import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

type CheckoutItem = {
  name: string;
  flavor: string;
  price: number;
  quantity: number;
};

type CheckoutBody = {
  items: CheckoutItem[];
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
};

export async function POST(req: NextRequest) {
  const body: CheckoutBody = await req.json();

  if (!body.items?.length) {
    return NextResponse.json({ error: "El carrito está vacío." }, { status: 400 });
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;

  // Demo mode: no Mercado Pago credentials configured yet.
  // Returns a mock order so the checkout flow can be reviewed end-to-end
  // before real payment credentials are added.
  if (!accessToken) {
    const orderId = `KLV-DEMO-${Date.now()}`;
    return NextResponse.json({ mode: "demo", orderId });
  }

  const client = new MercadoPagoConfig({ accessToken });
  const preference = new Preference(client);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? req.nextUrl.origin;

  const result = await preference.create({
    body: {
      items: body.items.map((item) => ({
        id: item.name,
        title: `${item.name} - ${item.flavor}`,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: "UYU",
      })),
      payer: {
        name: body.customer.name,
        email: body.customer.email,
        phone: { number: body.customer.phone },
        address: {
          street_name: body.customer.address,
        },
      },
      back_urls: {
        success: `${siteUrl}/checkout/exito`,
        failure: `${siteUrl}/checkout/error`,
        pending: `${siteUrl}/checkout/pendiente`,
      },
      auto_return: "approved",
    },
  });

  return NextResponse.json({
    mode: "live",
    id: result.id,
    init_point: result.init_point,
  });
}
