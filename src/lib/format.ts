// Arabic-friendly formatters for amounts (fractions) and time.

const FRACTIONS: Array<[number, string]> = [
  [1 / 8, "⅛"],
  [1 / 6, "⅙"],
  [1 / 4, "¼"],
  [1 / 3, "⅓"],
  [1 / 2, "½"],
  [2 / 3, "⅔"],
  [3 / 4, "¾"],
];

function closestFraction(frac: number): string | null {
  let best: { symbol: string; diff: number } | null = null;
  for (const [value, symbol] of FRACTIONS) {
    const diff = Math.abs(frac - value);
    if (diff < 0.04 && (!best || diff < best.diff)) {
      best = { symbol, diff };
    }
  }
  return best?.symbol ?? null;
}

export function formatAmount(n: number): string {
  if (n <= 0) return "0";
  // Whole numbers
  if (Math.abs(n - Math.round(n)) < 0.01) return String(Math.round(n));

  const whole = Math.floor(n);
  const frac = n - whole;
  const sym = closestFraction(frac);

  if (sym) {
    return whole > 0 ? `${whole} ${sym}` : sym;
  }
  // Fallback: trim trailing zeros
  return n.toFixed(2).replace(/\.?0+$/, "");
}

export function formatTime(input: string | number): string {
  // If it's already a formatted string without pure minutes, keep it.
  if (typeof input === "string") {
    const match = input.match(/^(\d+)\s*دقيقة$/);
    if (!match) return input;
    return minutesToArabic(parseInt(match[1], 10));
  }
  return minutesToArabic(input);
}

function minutesToArabic(mins: number): string {
  if (mins < 60) return `${mins} دقيقة`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const hourLabel = h === 1 ? "ساعة" : h === 2 ? "ساعتان" : h <= 10 ? `${h} ساعات` : `${h} ساعة`;
  if (m === 0) return hourLabel;
  return `${hourLabel} و${m} دقيقة`;
}
