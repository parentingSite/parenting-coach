export async function POST(request) {
    const body = await request.json();
    if (!body.scenario) {
        return Response.json(
          {
            error: "لطفاً سناریو را وارد کنید",
          },
          {
            status: 400,
          }
        );
      }
    console.log(body);
    const scenario = body.scenario;
  
    let suggestion = "";
  
    if (scenario.includes("جیغ")) {
      suggestion = "آرام بمانید و احساس کودک را نام‌گذاری کنید.";
    } else if (scenario.includes("خواب")) {
      suggestion = "یک روتین خواب ثابت ایجاد کنید.";
    } else {
      suggestion = "ابتدا علت رفتار کودک را بررسی کنید.";
    }
  
    return Response.json({
      suggestion,
    });
  }