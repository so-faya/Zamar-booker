// ── ZOETIC / ZAMAR MEALS IMAGES ───────────────────────────────────────────────
import jollofRiceWithBeef from "./assets/jollof_rice_with_beef.webp";
import jollofRiceWithChicken from "./assets/jollof_rice_with_chicken.webp";
import friedRiceWithBeef from "./assets/fried_rice_with_beef.webp";
import friedRiceWithChicken from "./assets/fried_rice_with_chicken.webp";
import tiggernutChocolateVelvet from "./assets/tigernut_chocolate_velvet_milkshake.webp";
import tigernutBanana from "./assets/tigernut_banana_milkshake.webp";
import zoeticLogo from "./assets/zoetic_foods_drinks.webp";

// ── SOUP IMAGES ───────────────────────────────────────────────────────────────
import vegetableSoup from "./assets/vegetable_soup.webp";
import melonSoup from "./assets/melon_soup.webp";
import achiSoup from "./assets/achi_soup.webp";
import okroSoup from "./assets/okro_soup.webp";

export { zoeticLogo };

export const FOOD_IMAGES = {
  jollofRiceWithBeef,
  jollofRiceWithChicken,
  friedRiceWithBeef,
  friedRiceWithChicken,
};

export const SOUP_IMAGES = {
  vegetableSoup,
  melonSoup,
  achiSoup,
  okroSoup,
};

// ── MILKSHAKE IMAGES ──────────────────────────────────────────────────────────
export const MILKSHAKE_IMAGES = {
  tigernutChocolateVelvet: tiggernutChocolateVelvet,
  tigernutBanana:          tigernutBanana,
};

// ── BRAND ─────────────────────────────────────────────────────────────────────
import logoImg from "./assets/zamar_logo.webp";
export const LOGO_URL = logoImg;

// ── EMAILJS ───────────────────────────────────────────────────────────────────
export const EMAILJS_SERVICE_ID = "service_hzv1996";
export const EMAILJS_TEMPLATE_ID = "template_vvo80au";
export const EMAILJS_PUBLIC_KEY = "ZC2cESYBKeBXABKuP";

// ── MENU DATA ─────────────────────────────────────────────────────────────────
export const FOODS = [
  {
    id: "zm1",
    name: "Jollof Rice with Chicken",
    tag: "Zamar Meals · Smoky · Juicy",
    price: "₦5,000",
    desc: "Party-style smoky jollof rice paired with succulent grilled chicken, garnished with fresh herbs.",
    img: FOOD_IMAGES.jollofRiceWithChicken,
    color: "#FF6B00",
  },
  {
    id: "zm2",
    name: "Jollof Rice with Beef",
    tag: "Zamar Meals · Rich · Hearty",
    price: "₦5,500",
    desc: "Aromatic smoky jollof rice loaded with tender seasoned beef chunks and vibrant peppers.",
    img: FOOD_IMAGES.jollofRiceWithBeef,
    color: "#E8B400",
  },
  {
    id: "zm3",
    name: "Fried Rice with Chicken",
    tag: "Zamar Meals · Colorful · Delicious",
    price: "₦5,500",
    desc: "Flavorful fried rice stir-fried with fresh vegetables and topped with crispy golden chicken.",
    img: FOOD_IMAGES.friedRiceWithChicken,
    color: "#4CAF50",
  },
  {
    id: "zm4",
    name: "Fried Rice with Beef",
    tag: "Zamar Meals · Bold · Satisfying",
    price: "₦6,000",
    desc: "Vibrant fried rice tossed with mixed vegetables and generous tender beef bites.",
    img: FOOD_IMAGES.friedRiceWithBeef,
    color: "#C0392B",
  },
  // ── SOUPS ──────────────────────────────────────────────────────────────────
  {
    id: "zm7",
    name: "Vegetable Soup + Eba",
    tag: "Zamar Meals · Healthy · Traditional",
    price: "₦8,500",
    desc: "Fresh leafy vegetable soup slow-cooked with assorted meats and crayfish, served with smooth Eba.",
    img: SOUP_IMAGES.vegetableSoup,
    color: "#4CAF50",
  },
  {
    id: "zm8",
    name: "Vegetable Soup + Poundo/Semo",
    tag: "Zamar Meals · Healthy · Traditional",
    price: "₦9,500",
    desc: "Fresh leafy vegetable soup slow-cooked with assorted meats and crayfish, served with Poundo or Semo.",
    img: SOUP_IMAGES.vegetableSoup,
    color: "#4CAF50",
  },
  {
    id: "zm9",
    name: "Melon Soup (Egusi) + Eba",
    tag: "Zamar Meals · Rich · Classic",
    price: "₦8,500",
    desc: "Thick, hearty egusi soup cooked with palm oil, peppers, and assorted meats, served with smooth Eba.",
    img: SOUP_IMAGES.melonSoup,
    color: "#E8B400",
  },
  {
    id: "zm10",
    name: "Melon Soup (Egusi) + Poundo/Semo",
    tag: "Zamar Meals · Rich · Classic",
    price: "₦9,500",
    desc: "Thick, hearty egusi soup cooked with palm oil, peppers, and assorted meats, served with Poundo or Semo.",
    img: SOUP_IMAGES.melonSoup,
    color: "#E8B400",
  },
  {
    id: "zm11",
    name: "Achi Soup + Eba",
    tag: "Zamar Meals · Delicacy · Savory",
    price: "₦8,500",
    desc: "Flavourful Achi soup thickened to perfection with assorted meats and fish, served with smooth Eba.",
    img: SOUP_IMAGES.achiSoup,
    color: "#FF6B00",
  },
  {
    id: "zm12",
    name: "Achi Soup + Poundo/Semo",
    tag: "Zamar Meals · Delicacy · Savory",
    price: "₦9,500",
    desc: "Flavourful Achi soup thickened to perfection with assorted meats and fish, served with Poundo or Semo.",
    img: SOUP_IMAGES.achiSoup,
    color: "#FF6B00",
  },
  {
    id: "zm13",
    name: "Okro Soup + Eba",
    tag: "Zamar Meals · Nutritious · Bold",
    price: "₦8,500",
    desc: "Silky okro soup with prawns, assorted meats, and aromatic spices, served with smooth Eba.",
    img: SOUP_IMAGES.okroSoup,
    color: "#27AE60",
  },
  {
    id: "zm14",
    name: "Okro Soup + Poundo/Semo",
    tag: "Zamar Meals · Nutritious · Bold",
    price: "₦9,500",
    desc: "Silky okro soup with prawns, assorted meats, and aromatic spices, served with Poundo or Semo.",
    img: SOUP_IMAGES.okroSoup,
    color: "#27AE60",
  },
];

export const JUICES = [];

export const SMOOTHIES = [
  {
    id: "zm5",
    name: "Tigernut Banana Milkshake",
    tag: "Zamar Meals",
    price: "₦2,000",
    desc: "Creamy tigernut blended with ripe banana — naturally sweet, dairy-free, and energizing.",
    img: MILKSHAKE_IMAGES.tigernutBanana,
    color: "#E8B400",
  },
  {
    id: "zm6",
    name: "Tigernut Chocolate Velvet Milkshake",
    tag: "Zamar Meals · Signature",
    price: "₦2,500",
    desc: "Rich tigernut milk swirled with velvety chocolate for a luxurious, indulgent treat.",
    img: MILKSHAKE_IMAGES.tigernutChocolateVelvet,
    color: "#6D3F2F",
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