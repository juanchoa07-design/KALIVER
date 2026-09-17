export type Product = {
  slug: string;
  name: string;
  flavor: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  gallery: string[];
  badges: string[];
  weightGrams: number;
  fresh_equivalent_g: number;
  nutrition: {
    servingSize: string;
    calories: number;
    carbs: string;
    protein: string;
    totalFat: string;
    satFat: string;
    transFat: string;
    fiber: string;
    sodium: string;
  };
  ingredients: string;
};

export const products: Product[] = [
  {
    slug: "charqui-vacuno-con-sal",
    name: "Charqui Kaliver",
    flavor: "Vacuno con Sal",
    tagline: "Carne. Sal. Nada complicado.",
    description:
      "Corte magro de vacuno, marinado y deshidratado lentamente para concentrar sabor y proteína. Sin azúcares agregados, sin conservantes raros. Solo carne de verdad.",
    price: 890,
    image: "/images/product-sal.jpg",
    gallery: ["/images/product-sal.jpg", "/images/product-sal-hero.png", "/images/product-back-label.jpg"],
    badges: ["30g de proteína", "Sin azúcares", "100% carne"],
    weightGrams: 50,
    fresh_equivalent_g: 150,
    nutrition: {
      servingSize: "50 g (1 envase)",
      calories: 181,
      carbs: "2.2 g",
      protein: "32 g",
      totalFat: "4.6 g",
      satFat: "1.7 g",
      transFat: "0.2 g",
      fiber: "0 g",
      sodium: "1200 mg",
    },
    ingredients: "Carne vacuna, miel, sal, vinagre de manzana, jugo de limón y especias.",
  },
  {
    slug: "charqui-vacuno-con-romero",
    name: "Charqui Kaliver",
    flavor: "Vacuno con Romero",
    tagline: "Herbal, profundo, para los que buscan algo más.",
    description:
      "El mismo corte magro de vacuno, marinado con romero fresco. Un charqui con carácter, pensado para después del entrenamiento o para cortar el hambre a media tarde.",
    price: 950,
    image: "/images/product-romero.jpg",
    gallery: ["/images/product-romero.jpg", "/images/product-back-label.jpg"],
    badges: ["30g de proteína", "Sin azúcares", "100% carne"],
    weightGrams: 50,
    fresh_equivalent_g: 150,
    nutrition: {
      servingSize: "50 g (1 envase)",
      calories: 181,
      carbs: "2.2 g",
      protein: "32 g",
      totalFat: "4.6 g",
      satFat: "1.7 g",
      transFat: "0.2 g",
      fiber: "0 g",
      sodium: "1200 mg",
    },
    ingredients: "Carne vacuna, miel, sal, vinagre de manzana, jugo de limón, romero y especias.",
  },
  {
    slug: "charqui-vacuno-con-chimichurri",
    name: "Charqui Kaliver",
    flavor: "Vacuno con Chimichurri",
    tagline: "El sabor del asador, en tu bolsillo.",
    description:
      "Marinado con chimichurri criollo: ajo, perejil, ají y vinagre. El favorito de quienes extrañan el fuego de la parrilla en cada bocado.",
    price: 950,
    image: "/images/product-chimichurri.jpg",
    gallery: ["/images/product-chimichurri.jpg", "/images/product-back-label.jpg"],
    badges: ["30g de proteína", "Sin azúcares", "100% carne"],
    weightGrams: 50,
    fresh_equivalent_g: 150,
    nutrition: {
      servingSize: "50 g (1 envase)",
      calories: 181,
      carbs: "2.2 g",
      protein: "32 g",
      totalFat: "4.6 g",
      satFat: "1.7 g",
      transFat: "0.2 g",
      fiber: "0 g",
      sodium: "1200 mg",
    },
    ingredients: "Carne vacuna, miel, sal, vinagre de manzana, jugo de limón, chimichurri y especias.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const bundles = [
  {
    slug: "pack-degustacion",
    name: "Pack Degustación",
    description: "Los 3 sabores de Kaliver, para que elijas tu favorito.",
    items: products.map((p) => p.slug),
    price: 2400,
    compareAtPrice: 2790,
    image: "/images/product-sal-hero.png",
  },
];

/*
 * Formatos de compra de la home. Unidades, reparto charqui/chips, sabores del
 * mix estándar y precio todavía no están definidos: quedan en null y la
 * tarjeta muestra "A definir" y deshabilita "Agregar al carrito". Cuando se
 * confirmen, se completan acá y la tarjeta se activa sola.
 */
export type Pack = {
  slug: string;
  name: string;
  description: string;
  image: string;
  units: number | null;
  charquiUnits: number | null;
  chipsUnits: number | null;
  flavors: string[] | null;
  price: number | null;
};

export const packs: Pack[] = [
  {
    slug: "degustacion",
    name: "Pack Degustación",
    description: "Conocé Kaliver con una selección de charqui y chips.",
    image: "/images/product-sal.jpg",
    units: null,
    charquiUnits: null,
    chipsUnits: null,
    flavors: null,
    price: null,
  },
  {
    slug: "semanal",
    name: "Pack Semanal",
    description: "Charqui y chips para acompañar tu semana.",
    image: "/images/product-romero.jpg",
    units: null,
    charquiUnits: null,
    chipsUnits: null,
    flavors: null,
    price: null,
  },
  {
    slug: "quincenal",
    name: "Pack Quincenal",
    description: "Tu selección de charqui y chips para la quincena.",
    image: "/images/product-chimichurri.jpg",
    units: null,
    charquiUnits: null,
    chipsUnits: null,
    flavors: null,
    price: null,
  },
  {
    slug: "mensual",
    name: "Pack Mensual",
    description: "Charqui y chips para tener a mano durante el mes.",
    image: "/images/product-back-label.jpg",
    units: null,
    charquiUnits: null,
    chipsUnits: null,
    flavors: null,
    price: null,
  },
];

export function isPackReady(pack: Pack): pack is Pack & {
  units: number;
  charquiUnits: number;
  chipsUnits: number;
  flavors: string[];
  price: number;
} {
  return (
    pack.units !== null &&
    pack.charquiUnits !== null &&
    pack.chipsUnits !== null &&
    pack.flavors !== null &&
    pack.price !== null
  );
}
