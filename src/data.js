// ── FOOD IMAGES (local assets) ────────────────────────────────────────────────
import jollofRice from "./assets/executive_rice.png";
import ofadaRice from "./assets/ofoda_rice.png";
import yamPorridge from "./assets/yam_porridge.png";
import beansPorridge from "./assets/beans_porridge.png";

export const FOOD_IMAGES = {
  jollofRice,
  ofadaRice,
  yamPorridge,
  beansPorridge,
  friedRice:
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
  healthyBowl:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
};

// ── JUICE IMAGES ──────────────────────────────────────────────────────────────
export const JUICE_IMAGES = {
  pineapple:
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
  watermelon:
    "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80",
  orange:
    "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&q=80",
  bloodBuilder:
    "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80",
  tropicalSplash:
    "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&q=80",
  rubyVitality:
    "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=600&q=80",
  freshDetox:
    "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80",
};

// ── SMOOTHIE IMAGES ───────────────────────────────────────────────────────────
export const SMOOTHIE_IMAGES = {
  sunriseBoost:
    "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80",
  creamyDelight:
    "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&q=80",
  greenVitality:
    "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80",
  berryEnergy:
    "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80",
  royalVitality:
    "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
  mangoBliss:
    "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
  soursopSupreme:
    "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&q=80",
  tropicalFusion:
    "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80",
};

// ── BRAND ─────────────────────────────────────────────────────────────────────
import logoImg from "./assets/zamar_logo.png";
export const LOGO_URL = logoImg;

// ── EMAILJS ───────────────────────────────────────────────────────────────────
export const EMAILJS_SERVICE_ID = "service_hzv1996";
export const EMAILJS_TEMPLATE_ID = "template_vvo80au";
export const EMAILJS_PUBLIC_KEY = "ZC2cESYBKeBXABKuP";

// ── MENU DATA ─────────────────────────────────────────────────────────────────
export const FOODS = [
  {
    id: "f1",
    name: "Executive Jollof Rice",
    tag: "Smoky · Rich · Irresistible",
    price: "₦3,500",
    desc: "Rich, smoky party-style jollof rice with succulent grilled chicken and sweet plantain.",
    img: FOOD_IMAGES.jollofRice,
    color: "#FF6B00",
  },
  {
    id: "f2",
    name: "Exotic Fried Rice",
    tag: "Colorful · Flavorful · Delightful",
    price: "₦3,200",
    desc: "Vibrant rice stir-fried with fresh vegetables, tender proteins, and aromatic spices.",
    img: FOOD_IMAGES.friedRice,
    color: "#E8B400",
  },
  {
    id: "f3",
    name: "Ofada Rice Premium",
    tag: "Bold · Spicy · Authentic",
    price: "₦3,800",
    desc: "Authentic Ofada rice with rich, spicy ayamase sauce loaded with assorted meats.",
    img: FOOD_IMAGES.ofadaRice,
    color: "#4CAF50",
  },
  {
    id: "f4",
    name: "Assorted Yam Porridge",
    tag: "Savory · Hearty · Satisfying",
    price: "₦2,800",
    desc: "Soft yam slow-cooked in savory pepper sauce with palm oil and assorted meats.",
    img: FOOD_IMAGES.yamPorridge,
    color: "#C0392B",
  },
  {
    id: "f5",
    name: "Assorted Beans Porridge",
    tag: "Rich · Creamy · Nourishing",
    price: "₦2,500",
    desc: "Creamy beans in flavorful palm oil sauce with spices and assorted fish.",
    img: FOOD_IMAGES.beansPorridge,
    color: "#8B4513",
  },
  {
    id: "f6",
    name: "Healthy Bowl",
    tag: "Fresh · Balanced · Energizing",
    price: "₦3,000",
    desc: "Nutritious grains, fresh vegetables, and lean protein — perfectly balanced.",
    img: FOOD_IMAGES.healthyBowl,
    color: "#27AE60",
  },
];

export const JUICES = [
  {
    id: "j1",
    name: "Pineapple Juice",
    tag: "Classic",
    price: "₦1,200",
    desc: "Fresh-pressed golden pineapple, sweet and tangy.",
    img: JUICE_IMAGES.pineapple,
    color: "#F4D03F",
  },
  {
    id: "j2",
    name: "Watermelon Juice",
    tag: "Classic",
    price: "₦1,200",
    desc: "Cool, refreshing watermelon bursting with summer sweetness.",
    img: JUICE_IMAGES.watermelon,
    color: "#E74C3C",
  },
  {
    id: "j3",
    name: "Orange Juice",
    tag: "Classic",
    price: "₦1,200",
    desc: "Freshly squeezed orange juice packed with vitamin C.",
    img: JUICE_IMAGES.orange,
    color: "#E67E22",
  },
  {
    id: "j4",
    name: "Zamar Blood Builder",
    tag: "Signature",
    price: "₦1,800",
    desc: "Beetroot + Orange + Pineapple — supports healthy blood circulation.",
    img: JUICE_IMAGES.bloodBuilder,
    color: "#C0392B",
  },
  {
    id: "j5",
    name: "Zamar Tropical Splash",
    tag: "Signature",
    price: "₦1,600",
    desc: "Pineapple + Watermelon — tropical fusion bursting with flavor and hydration.",
    img: JUICE_IMAGES.tropicalSplash,
    color: "#1ABC9C",
  },
  {
    id: "j6",
    name: "Zamar Ruby Vitality",
    tag: "Signature",
    price: "₦1,800",
    desc: "Strawberry + Beetroot + Pineapple — packed with antioxidants.",
    img: JUICE_IMAGES.rubyVitality,
    color: "#8E44AD",
  },
  {
    id: "j7",
    name: "Zamar Fresh Detox",
    tag: "Signature",
    price: "₦1,600",
    desc: "Cucumber + Pineapple + Lemon — crisp, cleansing, naturally refreshing.",
    img: JUICE_IMAGES.freshDetox,
    color: "#27AE60",
  },
];

export const SMOOTHIES = [
  {
    id: "s1",
    name: "Zamar Sunrise Boost",
    price: "₦2,000",
    desc: "Pineapple + Orange + Strawberry — packed with vitamin C.",
    img: SMOOTHIE_IMAGES.sunriseBoost,
    color: "#E67E22",
  },
  {
    id: "s2",
    name: "Zamar Creamy Delight",
    price: "₦2,200",
    desc: "Banana + Pawpaw + Pineapple + Beetroot — rich and creamy.",
    img: SMOOTHIE_IMAGES.creamyDelight,
    color: "#F39C12",
  },
  {
    id: "s3",
    name: "Zamar Green Vitality",
    price: "₦2,000",
    desc: "Soursop + Pineapple — refreshing, rich in antioxidants.",
    img: SMOOTHIE_IMAGES.greenVitality,
    color: "#27AE60",
  },
  {
    id: "s4",
    name: "Zamar Berry Energy",
    price: "₦2,000",
    desc: "Strawberry + Banana + Orange — smooth, naturally energizing.",
    img: SMOOTHIE_IMAGES.berryEnergy,
    color: "#E91E63",
  },
  {
    id: "s5",
    name: "Zamar Royal Vitality",
    price: "₦2,200",
    desc: "Banana + Pineapple + Strawberry + Orange — powerful vitamin boost.",
    img: SMOOTHIE_IMAGES.royalVitality,
    color: "#9B59B6",
  },
  {
    id: "s6",
    name: "Zamar Mango Bliss",
    price: "₦1,800",
    desc: "Fresh Mango — rich, creamy, tropical sweetness in every sip.",
    img: SMOOTHIE_IMAGES.mangoBliss,
    color: "#FF9800",
  },
  {
    id: "s7",
    name: "Zamar Soursop Supreme",
    price: "₦1,800",
    desc: "Fresh Soursop — naturally creamy with unique tropical flavor.",
    img: SMOOTHIE_IMAGES.soursopSupreme,
    color: "#4CAF50",
  },
  {
    id: "s8",
    name: "Zamar Tropical Fusion",
    price: "₦2,000",
    desc: "Mango + Pineapple — vibrant, vitamin-rich, every sip is paradise.",
    img: SMOOTHIE_IMAGES.tropicalFusion,
    color: "#FF6B00",
  },
];

export const ALL_ITEMS = [
  ...FOODS.map((i) => ({ ...i, category: "Food" })),
  ...JUICES.map((i) => ({ ...i, category: "Juice" })),
  ...SMOOTHIES.map((i) => ({ ...i, category: "Smoothie" })),
];

// ── DELIVERY AREAS ────────────────────────────────────────────────────────────
export const DELIVERY_AREAS = [
  "Lagos Island",
  "Lagos Mainland",
  "Ikeja",
  "Surulere",
  "Lekki",
  "Victoria Island",
  "Ajah",
  "Yaba",
  "Mushin",
  "Oshodi",
  "Gbagada",
  "Maryland",
  "Ikorodu",
  "Badagry",
  "Epe",
  "Apapa",
  "Festac",
  "Isale Eko",
  "Ojo",
  "Alimosho",
];

// ── HERO STATS ────────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: "20+", label: "Menu Items" },
  { value: "100%", label: "Fresh Daily" },
  { value: "⚡", label: "Fast Delivery" },
];
