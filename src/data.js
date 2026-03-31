// ── FOOD IMAGES (local assets) ────────────────────────────────────────────────
import jollofRice from "./assets/executive_rice.png";
import ofadaRice from "./assets/ofoda_rice.png";
import yamPorridge from "./assets/yam_porridge.png";
import beansPorridge from "./assets/beans_porridge.png";

import pineappleJuice from "./assets/pineapplejuice.png";
import watermelonJuice from "./assets/watermelonjuice.png";
import tropicalSplashJuice from "./assets/tropicalsplashjuice.png";
import tigernutjuice from "./assets/tigernutjuice.png";
import freshDetoxJuice from "./assets/zamarfreshdetoxjuice.png";

import mangoBliss from "./assets/mangosmoothie.png";
import tropicalFusion from "./assets/Tropicalfusionsmootie.png";
import parfait from "./assets/parfait.png";

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
// Keys match exactly what JUICES array uses: .pineapple, .watermelon, etc.
export const JUICE_IMAGES = {
  pineapple:      pineappleJuice,
  watermelon:     watermelonJuice,
  orange:         "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
  bloodBuilder:   tropicalSplashJuice,
  tropicalSplash: tigernutjuice,
  freshDetox:     freshDetoxJuice,
};

// ── SMOOTHIE IMAGES ───────────────────────────────────────────────────────────
export const SMOOTHIE_IMAGES = {
  parfait: parfait,
  creamyDelight:
    "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&q=80",
  greenVitality:
    "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80",
  berryEnergy:
    "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80",
  royalVitality:
    "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
  mangoBliss: mangoBliss,
  soursopSupreme:
    "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&q=80",
  tropicalFusion: tropicalFusion,
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
    price: "₦5,000",
    desc: "Rich, smoky party-style jollof rice with succulent grilled chicken and sweet plantain.",
    img: FOOD_IMAGES.jollofRice,
    color: "#FF6B00",
  },
  {
    id: "f2",
    name: "Exotic Fried Rice",
    tag: "Colorful · Flavorful · Delightful",
    price: "₦5,500",
    desc: "Vibrant rice stir-fried with fresh vegetables, tender proteins, and aromatic spices.",
    img: FOOD_IMAGES.friedRice,
    color: "#E8B400",
  },
  {
    id: "f3",
    name: "Ofada Rice Premium",
    tag: "Bold · Spicy · Authentic",
    price: "₦7,500",
    desc: "Authentic Ofada rice with rich, spicy ayamase sauce loaded with assorted meats.",
    img: FOOD_IMAGES.ofadaRice,
    color: "#4CAF50",
  },
  {
    id: "f4",
    name: "Assorted Yam Porridge",
    tag: "Savory · Hearty · Satisfying",
    price: "₦7,800",
    desc: "Soft yam slow-cooked in savory pepper sauce with palm oil and assorted meats.",
    img: FOOD_IMAGES.yamPorridge,
    color: "#C0392B",
  },
  {
    id: "f5",
    name: "Assorted Beans Porridge",
    tag: "Rich · Creamy · Nourishing",
    price: "₦4,500",
    desc: "Creamy beans in flavorful palm oil sauce with spices and assorted fish.",
    img: FOOD_IMAGES.beansPorridge,
    color: "#8B4513",
  },
  {
    id: "f6",
    name: "Healthy Bowl",
    tag: "Fresh · Balanced · Energizing",
    price: "₦10,000",
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
    price: "₦4,000",
    desc: "Fresh-pressed golden pineapple, sweet and tangy.",
    img: JUICE_IMAGES.pineapple,
    color: "#F4D03F",
  },
  {
    id: "j2",
    name: "Watermelon Juice",
    tag: "Classic",
    price: "₦3,200",
    desc: "Cool, refreshing watermelon bursting with summer sweetness.",
    img: JUICE_IMAGES.watermelon,
    color: "#E74C3C",
  },
  {
    id: "j3",
    name: "Orange Juice",
    tag: "Classic",
    price: "₦2,200",
    desc: "Freshly squeezed orange juice packed with vitamin C.",
    img: JUICE_IMAGES.orange,
    color: "#E67E22",
  },
  {
    id: "j4",
    name: "Tropical Splash Juice",
    tag: "Signature",
    price: "₦4,000",
    desc: "Beetroot + Orange + Pineapple — supports healthy blood circulation.",
    img: JUICE_IMAGES.bloodBuilder,
    color: "#C0392B",
  },
  {
    id: "j5",
    name: "Tigernut",
    tag: "Signature",
    price: "₦3,000",
    desc: "Tigernut bursting with flavor and hydration.",
    img: JUICE_IMAGES.tropicalSplash,
    color: "#1ABC9C",
  },
  {
    id: "j6",
    name: "Zamar Fresh Detox",
    tag: "Signature",
    price: "₦6,600",
    desc: "Cucumber + Pineapple + Lemon — crisp, cleansing, naturally refreshing.",
    img: JUICE_IMAGES.freshDetox,
    color: "#27AE60",
  },
];

export const SMOOTHIES = [
  {
    id: "s1",
    name: "Mango Smoothie",
    price: "₦3,500",
    desc: "Fresh Mango — rich, creamy, tropical sweetness in every sip.",
    img: SMOOTHIE_IMAGES.mangoBliss,
    color: "#E67E22",
  },
  {
    id: "s2",
    name: "Tropical Fusion Smoothie",
    price: "₦3,500",
    desc: "Banana + Pawpaw + Pineapple + Beetroot — rich and creamy.",
    img: SMOOTHIE_IMAGES.tropicalFusion,
    color: "#F39C12",
  },
  {
    id: "s3",
    name: "Creamy Delight",
    price: "₦4,000",
    desc: "Soursop + Pineapple — refreshing, rich in antioxidants.",
    img: SMOOTHIE_IMAGES.greenVitality,
    color: "#27AE60",
  },
  {
    id: "s4",
    name: "Parfait",
    price: "₦4,500",
    desc: "Strawberry + Banana + Orange — smooth, naturally energizing.",
    img: SMOOTHIE_IMAGES.parfait,
    color: "#E91E63",
  },
  {
    id: "s5",
    name: "Zamar Royal Vitality",
    price: "₦9,200",
    desc: "Banana + Pineapple + Strawberry + Orange — powerful vitamin boost.",
    img: SMOOTHIE_IMAGES.royalVitality,
    color: "#9B59B6",
  },
  {
    id: "s6",
    name: "Zamar Mango Bliss",
    price: "₦9,800",
    desc: "Fresh Mango — rich, creamy, tropical sweetness in every sip.",
    img: SMOOTHIE_IMAGES.mangoBliss,
    color: "#FF9800",
  },
  {
    id: "s7",
    name: "Zamar Soursop Supreme",
    price: "₦7,800",
    desc: "Fresh Soursop — naturally creamy with unique tropical flavor.",
    img: SMOOTHIE_IMAGES.soursopSupreme,
    color: "#4CAF50",
  },
  {
    id: "s8",
    name: "Zamar Tropical Fusion",
    price: "₦6,200",
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
  "Central Business District (CBD)",
  "Wuse",
  "Garki",
  "Maitama",
  "Asokoro",
  "Jabi",
  "Utako",
  "Gwagwalada town",
  "Kutunku",
  "Dobi",
  "Paiko",
  "University of Abuja area",
  "Kuje town",
  "Chukuku",
  "Gaube",
  "Kujekwa",
  "Rubochi",
  "Bwari town",
  "Dutse",
  "Kubwa (very popular)",
  "Ushafa",
  "Nigerian Law School area",
  "Abaji town",
  "Nuku",
  "Yaba",
  "Pandagi",
  "Kwali town",
  "Yangoji",
  "Pai",
  "Kilankwa",
];

// ── HERO STATS ────────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: "20+", label: "Menu Items" },
  { value: "100%", label: "Fresh Daily" },
  { value: "⚡", label: "Fast Delivery" },
];