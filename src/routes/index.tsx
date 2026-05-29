import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Clock, Sparkles, Lock } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, recipes, type CategoryId } from "@/data/recipes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مطبخي — وصفات وأسرار الطبخ" },
      { name: "description", content: "اكتشف وصفات اليوم، أسرار المطاعم العالمية، وحاسبة الكميات بضغطة واحدة." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<CategoryId | "all">("all");

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchCat = activeCat === "all" ? !r.secret : r.category === activeCat;
      const matchQ = query.trim() === "" || r.name.includes(query.trim());
      return matchCat && matchQ;
    });
  }, [query, activeCat]);

  const secretRecipes = recipes.filter((r) => r.secret);

  return (
    <main className="min-h-screen bg-background pb-12">
      {/* Header */}
      <header className="px-5 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">أهلاً بك في</p>
            <h1 className="text-3xl font-extrabold text-foreground">مطبخي 🍳</h1>
          </div>
          <div className="h-12 w-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "var(--gradient-warm)" }}>
            👨‍🍳
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن وصفة أو مشروب..."
            className="w-full bg-card rounded-2xl py-4 pr-12 pl-4 text-base text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </div>
      </header>

      {/* Categories */}
      <section className="px-5 mb-8">
        <h2 className="text-lg font-bold mb-3 text-foreground">الأقسام</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none">
          <CategoryChip active={activeCat === "all"} onClick={() => setActiveCat("all")} emoji="✨" name="الكل" />
          {categories.filter(c => c.id !== "secret").map((c) => (
            <CategoryChip
              key={c.id}
              active={activeCat === c.id}
              onClick={() => setActiveCat(c.id)}
              emoji={c.emoji}
              name={c.name}
            />
          ))}
        </div>
      </section>

      {/* Suggested recipes */}
      <section className="px-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            وصفات مقترحة اليوم
          </h2>
          <span className="text-sm text-muted-foreground">{filtered.length} وصفة</span>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">لا توجد وصفات مطابقة 🥲</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filtered.map((r) => (
              <Link
                key={r.id}
                to="/recipe/$id"
                params={{ id: r.id }}
                className="group bg-card rounded-3xl overflow-hidden border border-border transition-transform active:scale-95"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-foreground text-sm leading-tight mb-1">{r.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{r.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Secret section */}
      <section className="px-5">
        <div
          className="rounded-3xl p-5 text-secret-foreground"
          style={{ background: "var(--gradient-secret)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Lock className="h-5 w-5" />
            <h2 className="text-xl font-extrabold">السر الصناعي 🔐</h2>
          </div>
          <p className="text-sm opacity-80 mb-4">وصفات المطاعم العالمية والمشروبات الغازية بطريقة منزلية.</p>

          <div className="flex gap-3 overflow-x-auto -mx-5 px-5 pb-1 scrollbar-none">
            {secretRecipes.map((r) => (
              <Link
                key={r.id}
                to="/recipe/$id"
                params={{ id: r.id }}
                className="shrink-0 w-44 bg-secret-foreground/10 backdrop-blur rounded-2xl overflow-hidden border border-secret-foreground/20 active:scale-95 transition-transform"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.image} alt={r.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm leading-tight mb-1">{r.name}</h3>
                  <div className="flex items-center gap-1 text-xs opacity-75">
                    <Clock className="h-3 w-3" />
                    <span>{r.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryChip({
  active,
  onClick,
  emoji,
  name,
}: {
  active: boolean;
  onClick: () => void;
  emoji: string;
  name: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
        active
          ? "text-primary-foreground shadow-md"
          : "bg-card text-foreground border border-border"
      }`}
      style={active ? { background: "var(--gradient-warm)", boxShadow: "var(--shadow-soft)" } : undefined}
    >
      <span className="text-lg">{emoji}</span>
      <span>{name}</span>
    </button>
  );
}
