"use client";

const models = [
  {
    name: "GPT-4",
    description: "OpenAI's most capable model with advanced reasoning and creativity.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
  },
  {
    name: "Gemini",
    description: "Google's multimodal AI with excellent analytical capabilities.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
  },
  {
    name: "Claude",
    description: "Anthropic's helpful assistant known for nuanced conversations.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
  },
  {
    name: "DeepSeek",
    description: "Cutting-edge AI with strong coding and technical expertise.",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
  },
  {
    name: "Llama",
    description: "Meta's open-source model with great general knowledge.",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
  },
];

export function AIModels() {
  return (
    <section className="relative px-6 py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Supported AI Models
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Chat with the world&apos;s most powerful AI models, all in one place
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {models.map((model) => (
            <div
              key={model.name}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${model.bgColor}`}
              >
                <div
                  className={`h-6 w-6 rounded-lg bg-gradient-to-br ${model.color}`}
                />
              </div>
              <h3 className={`mb-2 text-lg font-semibold ${model.textColor}`}>
                {model.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {model.description}
              </p>
              {/* Hover gradient overlay */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${model.color} opacity-0 transition-opacity group-hover:opacity-5`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
