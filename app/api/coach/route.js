import { analyzeScenario } from "@/lib/ai/coach";
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
  const result = analyzeScenario(scenario);
return Response.json(result);
   
  }