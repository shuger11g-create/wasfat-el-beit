import vanillaImg from "@/assets/vanilla-ice-cream.jpg";
import colaImg from "@/assets/cola-drink.jpg";
import burgerImg from "@/assets/burger.jpg";
import kunafaImg from "@/assets/kunafa.jpg";
import snacksImg from "@/assets/snacks.jpg";
import manakishImg from "@/assets/manakish.jpg";

export type CategoryId = "drinks" | "desserts" | "mains" | "pastries" | "secret";

export interface Category {
  id: CategoryId;
  name: string;
  emoji: string;
}

export const categories: Category[] = [
  { id: "drinks", name: "المشروبات", emoji: "🍹" },
  { id: "desserts", name: "الحلى", emoji: "🍰" },
  { id: "mains", name: "الأكلات الرئيسية", emoji: "🍔" },
  { id: "pastries", name: "المعجنات", emoji: "🥐" },
  { id: "secret", name: "السر الصناعي", emoji: "🔐" },
];

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: string;
  name: string;
  category: CategoryId;
  image: string;
  time: string;
  baseServings: number;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  secret?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "vanilla-ice-cream",
    name: "آيس كريم الفانيليا",
    category: "desserts",
    image: vanillaImg,
    time: "20 دقيقة + تجميد",
    baseServings: 4,
    description: "آيس كريم فانيليا كريمي بمذاق المحلات، بمكونات بسيطة من المطبخ.",
    ingredients: [
      { name: "كريمة خفق", amount: 2, unit: "كوب" },
      { name: "حليب مكثف محلى", amount: 1, unit: "علبة" },
      { name: "خلاصة فانيليا", amount: 1, unit: "ملعقة كبيرة" },
      { name: "سكر ناعم", amount: 2, unit: "ملعقة كبيرة" },
      { name: "رشة ملح", amount: 1, unit: "رشة" },
    ],
    steps: [
      "اخفقي الكريمة الباردة حتى تتكون قمم متماسكة.",
      "أضيفي الحليب المكثف والفانيليا والسكر وقلبي برفق.",
      "اسكبي الخليط في قالب وغطيه بورق زبدة.",
      "جمدي لمدة 6 ساعات على الأقل حتى يتماسك.",
      "قدميه بمغرفة آيس كريم مع صوص الشوكولاتة المفضل.",
    ],
  },
  {
    id: "homemade-cola",
    name: "كولا منزلية طبيعية",
    category: "secret",
    image: colaImg,
    time: "30 دقيقة",
    baseServings: 4,
    secret: true,
    description: "سر تحضير مشروب الكولا بمكونات طبيعية في البيت — بدون مواد حافظة.",
    ingredients: [
      { name: "ماء", amount: 2, unit: "كوب" },
      { name: "سكر بني", amount: 1, unit: "كوب" },
      { name: "عصير ليمون", amount: 3, unit: "ملعقة كبيرة" },
      { name: "قشر برتقال مبشور", amount: 1, unit: "ملعقة صغيرة" },
      { name: "قرفة عود", amount: 1, unit: "قطعة" },
      { name: "ماء غازي بارد", amount: 4, unit: "كوب" },
    ],
    steps: [
      "اغلي الماء مع السكر البني والقرفة وقشر البرتقال لمدة 10 دقائق.",
      "أضيفي عصير الليمون واتركيه يبرد تماماً.",
      "صفي الشراب من القرفة والقشر.",
      "اخلطي ملعقتين من الشراب مع كوب ماء غازي بارد.",
      "قدميها مع الثلج وشريحة ليمون.",
    ],
  },
  {
    id: "secret-burger-sauce",
    name: "صوص البرجر السري",
    category: "secret",
    image: burgerImg,
    time: "10 دقائق",
    baseServings: 4,
    secret: true,
    description: "صوص البرجر الشهير الذي تستخدمه المطاعم العالمية — مكوناته من مطبخك.",
    ingredients: [
      { name: "مايونيز", amount: 4, unit: "ملعقة كبيرة" },
      { name: "كاتشب", amount: 2, unit: "ملعقة كبيرة" },
      { name: "خردل", amount: 1, unit: "ملعقة صغيرة" },
      { name: "مخلل مفروم", amount: 2, unit: "ملعقة كبيرة" },
      { name: "بابريكا مدخنة", amount: 1, unit: "ملعقة صغيرة" },
      { name: "ثوم بودرة", amount: 1, unit: "ملعقة صغيرة" },
    ],
    steps: [
      "اخلطي جميع المكونات في وعاء صغير.",
      "غطي الصوص واتركيه في الثلاجة 30 دقيقة لتمتزج النكهات.",
      "ادهنيه على خبز البرجر قبل وضع اللحمة والجبن.",
    ],
  },
  {
    id: "kunafa",
    name: "كنافة بالقشطة",
    category: "desserts",
    image: kunafaImg,
    time: "45 دقيقة",
    baseServings: 6,
    description: "كنافة ذهبية مقرمشة محشوة بالقشطة ومغموسة بالقطر.",
    ingredients: [
      { name: "كنافة ناعمة", amount: 500, unit: "غرام" },
      { name: "زبدة مذابة", amount: 1, unit: "كوب" },
      { name: "قشطة", amount: 2, unit: "كوب" },
      { name: "قطر", amount: 1, unit: "كوب" },
      { name: "فستق مطحون", amount: 0.25, unit: "كوب" },
    ],
    steps: [
      "افركي الكنافة بالزبدة المذابة جيداً.",
      "ضعي نصف الكمية في صينية ثم القشطة ثم باقي الكنافة.",
      "اخبزيها على 180° لمدة 25 دقيقة حتى تذهب.",
      "اسكبي القطر البارد فوقها وهي ساخنة.",
      "زينيها بالفستق وقدميها دافئة.",
    ],
  },
  {
    id: "cheese-manakish",
    name: "مناقيش الجبنة",
    category: "pastries",
    image: manakishImg,
    time: "35 دقيقة",
    baseServings: 4,
    description: "مناقيش طرية بجبنة عكاوي ذائبة، فطور لذيذ في دقائق.",
    ingredients: [
      { name: "عجينة جاهزة", amount: 500, unit: "غرام" },
      { name: "جبنة عكاوي مبشورة", amount: 2, unit: "كوب" },
      { name: "جبنة موزاريلا", amount: 1, unit: "كوب" },
      { name: "زيت زيتون", amount: 2, unit: "ملعقة كبيرة" },
      { name: "حبة البركة", amount: 1, unit: "ملعقة صغيرة" },
    ],
    steps: [
      "افردي العجينة على شكل دوائر متوسطة.",
      "وزعي الجبنة فوقها واتركي حافة صغيرة.",
      "رشي زيت الزيتون وحبة البركة.",
      "اخبزيها على 220° لمدة 10 دقائق حتى تذهب.",
    ],
  },
  {
    id: "loaded-snacks",
    name: "أصابع الموزاريلا المقرمشة",
    category: "mains",
    image: snacksImg,
    time: "25 دقيقة",
    baseServings: 4,
    description: "أصابع موزاريلا ذهبية مقرمشة من الخارج، ذائبة من الداخل.",
    ingredients: [
      { name: "جبنة موزاريلا", amount: 400, unit: "غرام" },
      { name: "بقسماط", amount: 2, unit: "كوب" },
      { name: "دقيق", amount: 1, unit: "كوب" },
      { name: "بيض", amount: 2, unit: "حبة" },
      { name: "بابريكا", amount: 1, unit: "ملعقة صغيرة" },
      { name: "زيت للقلي", amount: 3, unit: "كوب" },
    ],
    steps: [
      "قطعي الجبنة أصابع متساوية.",
      "غمسيها بالدقيق ثم البيض ثم البقسماط مرتين.",
      "جمديها لمدة 30 دقيقة قبل القلي.",
      "اقليها في زيت ساخن حتى تذهب وقدميها فوراً.",
    ],
  },
];

export const getRecipe = (id: string) => recipes.find((r) => r.id === id);
