export default function Home() {
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
          راهکارهای علمی و کاربردی برای کمک به والدین
          در مدیریت احساسات، ارتباط با کودک و حل چالش‌های روزمره.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-2xl bg-black px-6 py-3 text-white hover:opacity-90">
            شروع مشاوره
          </button>

          <button className="rounded-2xl border border-gray-300 px-6 py-3 hover:bg-gray-100">
            مطالعه مقالات
          </button>

        </div>

      </div>

    </section>
  );
}