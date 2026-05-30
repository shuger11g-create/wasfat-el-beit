import vanillaImg from "@/assets/vanilla-ice-cream.jpg";
import colaImg from "@/assets/cola-drink.jpg";
import burgerImg from "@/assets/burger.jpg";
import kunafaImg from "@/assets/kunafa.jpg";
import snacksImg from "@/assets/snacks.jpg";
import manakishImg from "@/assets/manakish.jpg";
import { imageForRecipe } from "@/lib/recipe-image";

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
  /** Total minutes; rendered via formatTime() */
  timeMinutes: number;
  baseServings: number;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  secret?: boolean;
}

const categoryImage: Record<CategoryId, string> = {
  drinks: colaImg,
  desserts: vanillaImg,
  mains: burgerImg,
  pastries: manakishImg,
  secret: colaImg,
};

// ============ Featured / hand-crafted recipes ============

const featured: Recipe[] = [
  {
    id: "vanilla-ice-cream",
    name: "آيس كريم الفانيليا",
    category: "desserts",
    image: vanillaImg,
    timeMinutes: 20,
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
    timeMinutes: 30,
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
    id: "homemade-pepsi",
    name: "البيبسي المنزلي ونكهات السر الصناعي",
    category: "secret",
    image: colaImg,
    timeMinutes: 35,
    baseServings: 4,
    secret: true,
    description: "نسخة البيبسي المنزلية بنكهات السر الصناعي — تركيبة كراميل التوابل التي تعطي اللون والمذاق الشهير.",
    ingredients: [
      { name: "ماء", amount: 2, unit: "كوب" },
      { name: "سكر أبيض", amount: 1, unit: "كوب" },
      { name: "سكر بني للكراميل", amount: 0.5, unit: "كوب" },
      { name: "عصير ليمون", amount: 2, unit: "ملعقة كبيرة" },
      { name: "خلاصة فانيليا", amount: 0.5, unit: "ملعقة صغيرة" },
      { name: "قشر ليمون مبشور", amount: 1, unit: "ملعقة صغيرة" },
      { name: "جوزة الطيب", amount: 0.25, unit: "ملعقة صغيرة" },
      { name: "قرفة بودرة", amount: 0.25, unit: "ملعقة صغيرة" },
      { name: "ماء غازي بارد", amount: 4, unit: "كوب" },
    ],
    steps: [
      "اصنعي كراميل: ذوّبي السكر البني على نار هادئة حتى يصبح بلون عنبري داكن.",
      "أضيفي الماء بحذر مع التحريك حتى يذوب الكراميل تماماً.",
      "أضيفي السكر الأبيض، قشر الليمون، القرفة وجوزة الطيب واتركيه يغلي 5 دقائق.",
      "ارفعيه عن النار، أضيفي عصير الليمون والفانيليا، واتركيه يبرد تماماً.",
      "صفي الشراب جيداً واحفظيه في زجاجة بالثلاجة.",
      "اخلطي ملعقتين كبيرتين من الشراب مع كوب ماء غازي مثلج وقدميه.",
    ],
  },
  {
    id: "secret-burger-sauce",
    name: "صوص البرجر السري",
    category: "secret",
    image: burgerImg,
    timeMinutes: 10,
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
    timeMinutes: 45,
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
    timeMinutes: 35,
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
    timeMinutes: 25,
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

// ============ Generated catalog (100 per category) ============

interface NameSet {
  bases: string[];
  flavors: string[];
}

const nameSets: Record<CategoryId, NameSet> = {
  drinks: {
    bases: [
      "عصير",
      "موكتيل",
      "سموذي",
      "ميلك شيك",
      "مشروب بارد",
      "شاي مثلج",
      "ليموناضة",
      "كوكتيل",
      "مشروب صحي",
      "مشروب رمضاني",
    ],
    flavors: [
      "الفراولة",
      "المانجو",
      "الأناناس",
      "البطيخ",
      "التوت",
      "البرتقال",
      "الليمون والنعناع",
      "الخوخ",
      "الرمان",
      "الكيوي",
    ],
  },
  desserts: {
    bases: [
      "كيكة",
      "تشيز كيك",
      "بانكيك",
      "براونيز",
      "كوكيز",
      "موس",
      "بودنغ",
      "تارت",
      "آيس كريم",
      "ترايفل",
    ],
    flavors: [
      "الشوكولاتة",
      "الفانيليا",
      "اللوتس",
      "الفراولة",
      "الكراميل المملح",
      "النوتيلا",
      "الموز",
      "الفستق",
      "الزبدة الفول السوداني",
      "التوت الأزرق",
    ],
  },
  mains: {
    bases: [
      "برجر",
      "باستا",
      "بيتزا",
      "دجاج مشوي",
      "أرز",
      "ستيك",
      "شاورما",
      "كبسة",
      "لازانيا",
      "حساء",
    ],
    flavors: [
      "بالجبن الذائب",
      "بصلصة الفطر",
      "بالأعشاب الإيطالية",
      "بالليمون والثوم",
      "بالخضار المشوية",
      "بصلصة الباربكيو",
      "بالكريمة",
      "بالطماطم والريحان",
      "الحار",
      "بنكهة التندوري",
    ],
  },
  pastries: {
    bases: [
      "مناقيش",
      "فطائر",
      "كرواسون",
      "خبز",
      "صامولي",
      "بيتزا صغيرة",
      "سمبوسة",
      "بقلاوة",
      "سينابون",
      "دونات",
    ],
    flavors: [
      "بالجبنة",
      "بالزعتر",
      "باللحمة",
      "بالسبانخ",
      "بالشوكولاتة",
      "بالقرفة",
      "بالعسل والجوز",
      "بالقشطة",
      "بالتمر",
      "بالسمسم",
    ],
  },
  secret: {
    bases: [
      "صوص سر المطعم",
      "تتبيلة سرية",
      "خلطة بهارات",
      "ماريناد",
      "صوص باربكيو",
      "صوص رانش",
      "نكهة سرية",
      "خلطة ديب",
      "صوص حار",
      "صوص قيصر",
    ],
    flavors: [
      "للبرجر",
      "للدجاج المقلي",
      "للستيك",
      "للأجنحة",
      "للسلطات",
      "للشاورما",
      "للبيتزا",
      "للباستا",
      "للسمك",
      "للمشاوي",
    ],
  },
};

const ingredientPools: Record<CategoryId, Ingredient[]> = {
  drinks: [
    { name: "فاكهة طازجة مقطعة", amount: 2, unit: "كوب" },
    { name: "ماء بارد", amount: 1, unit: "كوب" },
    { name: "سكر", amount: 3, unit: "ملعقة كبيرة" },
    { name: "ثلج مجروش", amount: 1, unit: "كوب" },
    { name: "نعناع طازج", amount: 5, unit: "ورقات" },
    { name: "عصير ليمون", amount: 1, unit: "ملعقة كبيرة" },
  ],
  desserts: [
    { name: "دقيق", amount: 1.5, unit: "كوب" },
    { name: "سكر", amount: 1, unit: "كوب" },
    { name: "زبدة", amount: 0.5, unit: "كوب" },
    { name: "بيض", amount: 2, unit: "حبة" },
    { name: "حليب", amount: 0.75, unit: "كوب" },
    { name: "فانيليا", amount: 1, unit: "ملعقة صغيرة" },
    { name: "بيكنج باودر", amount: 1.5, unit: "ملعقة صغيرة" },
  ],
  mains: [
    { name: "بروتين رئيسي (دجاج/لحم)", amount: 500, unit: "غرام" },
    { name: "بصل مفروم", amount: 1, unit: "حبة" },
    { name: "ثوم مهروس", amount: 3, unit: "فصوص" },
    { name: "زيت زيتون", amount: 3, unit: "ملعقة كبيرة" },
    { name: "ملح وفلفل", amount: 1, unit: "حسب الذوق" },
    { name: "بهارات مشكلة", amount: 1.5, unit: "ملعقة صغيرة" },
    { name: "صلصة طماطم", amount: 0.5, unit: "كوب" },
  ],
  pastries: [
    { name: "عجينة جاهزة", amount: 500, unit: "غرام" },
    { name: "حشوة مختارة", amount: 1.5, unit: "كوب" },
    { name: "زيت زيتون", amount: 2, unit: "ملعقة كبيرة" },
    { name: "بيضة للدهن", amount: 1, unit: "حبة" },
    { name: "سمسم", amount: 1, unit: "ملعقة كبيرة" },
    { name: "زبدة مذابة", amount: 0.25, unit: "كوب" },
  ],
  secret: [
    { name: "مايونيز", amount: 0.5, unit: "كوب" },
    { name: "كاتشب", amount: 2, unit: "ملعقة كبيرة" },
    { name: "خل تفاح", amount: 1, unit: "ملعقة كبيرة" },
    { name: "ثوم بودرة", amount: 1, unit: "ملعقة صغيرة" },
    { name: "بابريكا مدخنة", amount: 1, unit: "ملعقة صغيرة" },
    { name: "صلصة حارة", amount: 1, unit: "ملعقة صغيرة" },
    { name: "سكر بني", amount: 1, unit: "ملعقة صغيرة" },
  ],
};

const stepsByCategory: Record<CategoryId, string[]> = {
  drinks: [
    "اغسلي الفواكه وقطعيها قطعاً صغيرة.",
    "ضعي جميع المكونات في الخلاط الكهربائي.",
    "اخلطيها على سرعة عالية حتى تنعم تماماً.",
    "صفي المشروب إذا رغبتِ بقوام ناعم جداً.",
    "اسكبيه في كؤوس مزينة بالنعناع والثلج.",
  ],
  desserts: [
    "سخّني الفرن على 180°م وحضّري القالب بالزبدة.",
    "اخفقي الزبدة والسكر حتى يصبح المزيج كريمياً.",
    "أضيفي البيض والفانيليا واخلطي جيداً.",
    "أضيفي المكونات الجافة تدريجياً وقلّبي بلطف.",
    "اسكبي الخليط في القالب واخبزيه حتى ينضج.",
    "اتركيه يبرد قبل التقديم والتزيين.",
  ],
  mains: [
    "تبّلي البروتين بالبهارات والملح والفلفل.",
    "سخّني الزيت وحمّري البصل والثوم.",
    "أضيفي البروتين وحمّريه من جميع الجهات.",
    "أضيفي صلصة الطماطم والبهارات وقلّبي.",
    "غطّيها واتركيها على نار هادئة حتى تنضج.",
    "قدّميها ساخنة مع المرافقات المفضلة.",
  ],
  pastries: [
    "افردي العجينة على سطح مرشوش بالدقيق.",
    "قطّعيها بالشكل المطلوب وضعيها في صينية.",
    "وزّعي الحشوة بالتساوي مع ترك حواف صغيرة.",
    "ادهنيها بالبيض ورشّي السمسم.",
    "اخبزيها على 200°م حتى تذهب وتتحمر.",
    "قدميها دافئة مع الشاي أو اللبن.",
  ],
  secret: [
    "اخلطي جميع المكونات في وعاء عميق.",
    "حرّكي جيداً حتى تتجانس النكهات.",
    "غطّي الصوص واتركيه في الثلاجة 30 دقيقة.",
    "تذوّقي وعدّلي الملح والحرارة حسب الرغبة.",
    "احفظيه في برطمان محكم لمدة أسبوع.",
  ],
};

function generateForCategory(cat: CategoryId, count: number): Recipe[] {
  const { bases, flavors } = nameSets[cat];
  const pool = ingredientPools[cat];
  const steps = stepsByCategory[cat];
  const img = categoryImage[cat];
  const out: Recipe[] = [];
  let n = 0;
  for (const base of bases) {
    for (const flavor of flavors) {
      if (n >= count) break;
      n++;
      const name = `${base} ${flavor}`;
      // Vary time: 15..150 min
      const timeMinutes = 15 + ((n * 7) % 136);
      // Vary servings: 2,4,6,8
      const baseServings = [2, 4, 6, 8][n % 4];
      // Slight amount variation per recipe
      const variation = 0.75 + ((n % 5) * 0.1);
      const ingredients: Ingredient[] = pool.map((ing) => ({
        ...ing,
        amount: Math.round(ing.amount * variation * 100) / 100,
      }));
      // Add a flavor-specific accent ingredient
      ingredients.push({ name: `نكهة ${flavor.replace(/^ال/, "")}`, amount: 1, unit: "ملعقة كبيرة" });

      out.push({
        id: `${cat}-${n}`,
        name,
        category: cat,
        image: img,
        timeMinutes,
        baseServings,
        description: `${name} — وصفة شهية وسهلة بمكونات متوفرة في كل بيت.`,
        ingredients,
        steps,
        secret: cat === "secret",
      });
    }
    if (n >= count) break;
  }
  return out;
}

const generated: Recipe[] = (
  ["drinks", "desserts", "mains", "pastries", "secret"] as CategoryId[]
).flatMap((c) => generateForCategory(c, 100));

export const recipes: Recipe[] = [...featured, ...generated];

export const getRecipe = (id: string) => recipes.find((r) => r.id === id);
