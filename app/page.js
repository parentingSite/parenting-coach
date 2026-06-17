"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(null);
  const [scenario, setScenario] = useState("");
  const [childAge, setChildAge] = useState("");

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-widest text-blue-600">
          همراه والدین
        </p>

        <h1 className="mt-6 text-5xl font-black leading-[1.4] text-gray-900 md:text-7xl">
          تربیت آرام‌تر،
          <br />
          ارتباط بهتر،
          <br />
          خانواده سالم‌تر
        </h1>

        <p className="mt-8 text-xl leading-10 text-gray-600">
          راهکارهای علمی و کاربردی برای کمک به والدین در مدیریت احساسات،
          ارتباط با کودک و حل چالش‌های روزمره.
        </p>

        <div className="mt-10 space-y-4">
          <input
            type="number"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            placeholder="سن کودک"
            className="w-full rounded-xl border p-4"
          />

          <textarea
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            placeholder="سناریوی خود را بنویسید..."
            className="w-full rounded-xl border p-4"
            rows={5}
          />

          <div className="flex gap-4">
            <button
              onClick={async () => {
                const res = await fetch("/api/coach", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    scenario,
                    childAge,
                  }),
                });

                const data = await res.json();

                console.log(data);

                if (data.error) {
                  setResult({
                    error: data.error,
                  });
                } else {
                  setResult(data);
                }
              }}
              className="rounded-2xl bg-black px-6 py-3 text-white hover:opacity-90"
            >
              شروع مشاوره
            </button>

            <button className="rounded-2xl border border-gray-300 px-6 py-3 hover:bg-gray-100">
              مطالعه مقالات
            </button>
          </div>

          {result?.error && (
            <p className="mt-4 text-red-600">
              {result.error}
            </p>
          )}

          {result && !result.error && (
            <div className="mt-6 space-y-3 rounded-xl border p-4">
              <p>
                <strong>احساس کودک:</strong> {result.childFeeling}
              </p>

              <p>
                <strong>دلیل:</strong> {result.reason}
              </p>

              <p>
                <strong>پیشنهاد:</strong> {result.suggestion}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}