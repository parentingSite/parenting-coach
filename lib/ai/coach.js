export function analyzeScenario(scenario) {
  if (scenario.includes("جیغ")) {
    return {
      childFeeling: "خشم",
      reason: "کودک نتوانسته احساس خود را به شکل مناسب بیان کند.",
      suggestion: "آرام بمانید و احساس کودک را نام‌گذاری کنید.",
    };
  }

  if (scenario.includes("خواب")) {
    return {
      childFeeling: "خستگی",
      reason: "احتمالاً برنامه خواب کودک منظم نیست.",
      suggestion: "یک روتین خواب ثابت و قابل پیش‌بینی ایجاد کنید.",
    };
  }

  return {
    childFeeling: "نامشخص",
    reason: "اطلاعات کافی برای تحلیل دقیق وجود ندارد.",
    suggestion: "ابتدا علت رفتار کودک را بررسی کنید.",
  };
}