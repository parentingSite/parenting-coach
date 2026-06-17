export function analyzeScenario(scenario) {
  let suggestion = "";

  if (scenario.includes("جیغ")) {
    suggestion = "آرام بمانید و احساس کودک را نام‌گذاری کنید.";
  } else if (scenario.includes("خواب")) {
    suggestion = "یک روتین خواب ثابت ایجاد کنید.";
  } else {
    suggestion = "ابتدا علت رفتار کودک را بررسی کنید.";
  }

  return {
    suggestion,
  };
}