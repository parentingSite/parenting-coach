import { analyzeScenario } from "@/lib/ai/coach";

export async function POST(request) {
  const body = await request.json();

  // سناریو الزامی است
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

  // سن کودک الزامی است
  if (!body.childAge) {
    return Response.json(
      {
        error: "لطفاً سن کودک را وارد کنید",
      },
      {
        status: 400,
      }
    );
  }

  const age = Number(body.childAge);

  // عدد بودن سن
  if (isNaN(age)) {
    return Response.json(
      {
        error: "سن کودک باید عدد باشد",
      },
      {
        status: 400,
      }
    );
  }

  // بازه منطقی سن
  if (age < 1 || age > 18) {
    return Response.json(
      {
        error: "سن کودک باید بین 1 تا 18 سال باشد",
      },
      {
        status: 400,
      }
    );
  }

  const result = analyzeScenario(body.scenario);

  return Response.json(result);
}