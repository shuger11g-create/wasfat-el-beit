import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Clock, Users, Minus, Plus, Lock } from "lucide-react";
import { useState } from "react";
import { getRecipe } from "@/data/recipes";

export const Route = createFileRoute("/recipe/$id")({
  loader: ({ params }) => {
    const recipe = getRecipe(params.id);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.recipe.name} — مطبخي` : "وصفة" },
      { name: "description", content: loaderData?.recipe.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
      <p className="text-2xl mb-4">لم نعثر على هذه الوصفة 😔</p>
      <Link to="/" className="text-primary font-bold underline">العودة للرئيسية</Link>
    </div>
  ),
  component: RecipePage,
});

function formatAmount(n: number) {
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(2).replace(/\.?0+$/, "");
}

function RecipePage() {
  const { recipe } = Route.useLoaderData();
  const [servings, setServings] = useState(recipe.baseServings);
  const ratio = servings / recipe.baseServings;

  return (
    <main className="min-h-screen bg-background pb-12">
      {/* Hero image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <Link
          to="/"
          aria-label="العودة"
          className="absolute top-5 right-5 h-11 w-11 rounded-full bg-card/90 backdrop-blur flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <ArrowRight className="h-5 w-5 text-foreground" />
        </Link>

        {recipe.secret && (
          <div className="absolute top-5 left-5 flex items-center gap-1 bg-secret text-secret-foreground rounded-full px-3 py-1.5 text-xs font-bold">
            <Lock className="h-3.5 w-3.5" />
            وصفة سرية
          </div>
        )}
      </div>

      {/* Title block */}
      <section className="px-5 -mt-8 relative">
        <div
          className="bg-card rounded-3xl p-5 border border-border"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h1 className="text-2xl font-extrabold text-foreground mb-2">{recipe.name}</h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{recipe.description}</p>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span>{servings} أشخاص</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servings calculator */}
      <section className="px-5 mt-5">
        <div
          className="rounded-2xl p-4 flex items-center justify-between"
          style={{ background: "var(--gradient-warm)" }}
        >
          <div className="text-primary-foreground">
            <p className="font-bold text-base">حاسبة الكميات</p>
            <p className="text-xs opacity-90">عدّل عدد الأشخاص لتتغيّر المقادير تلقائياً</p>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full p-1">
            <button
              onClick={() => setServings((s) => Math.max(1, s - 1))}
              aria-label="إنقاص"
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center active:scale-90 transition-transform"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center font-extrabold text-foreground">{servings}</span>
            <button
              onClick={() => setServings((s) => Math.min(50, s + 1))}
              aria-label="زيادة"
              className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-90 transition-transform"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          {[2, 4, 6, 8].map((n) => (
            <button
              key={n}
              onClick={() => setServings(n)}
              className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                servings === n
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-muted-foreground border border-border"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      {/* Ingredients */}
      <section className="px-5 mt-7">
        <h2 className="text-lg font-extrabold text-foreground mb-3">المكونات</h2>
        <ul className="bg-card rounded-2xl divide-y divide-border border border-border overflow-hidden">
          {recipe.ingredients.map((ing, i) => (
            <li key={i} className="flex items-center justify-between p-4">
              <span className="text-foreground">{ing.name}</span>
              <span className="font-bold text-primary">
                {formatAmount(ing.amount * ratio)} {ing.unit}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="px-5 mt-7">
        <h2 className="text-lg font-extrabold text-foreground mb-3">طريقة التحضير</h2>
        <ol className="space-y-3">
          {recipe.steps.map((step, i) => (
            <li
              key={i}
              className="bg-card rounded-2xl p-4 flex gap-3 border border-border"
            >
              <div
                className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-primary-foreground font-extrabold text-sm"
                style={{ background: "var(--gradient-warm)" }}
              >
                {i + 1}
              </div>
              <p className="text-foreground leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
