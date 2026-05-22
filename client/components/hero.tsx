"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-green-500" />
          Now supporting 5 AI models
        </div>

        <h1 className="mb-6 text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
          Chat with Every AI Model in One Place
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Access GPT-4, Gemini, Claude, DeepSeek, and Llama all from a single interface. 
          Compare responses side by side, save your conversations, and export them as PDFs.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-base font-semibold text-white hover:from-purple-700 hover:to-blue-700"
          >
            Get Started Free
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-border/50 bg-secondary/50 px-8 text-base font-semibold text-foreground hover:bg-secondary"
          >
            See Comparison Mode
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-8 border-t border-border/30 pt-8 md:gap-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground md:text-3xl">5+</div>
            <div className="text-sm text-muted-foreground">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground md:text-3xl">100K+</div>
            <div className="text-sm text-muted-foreground">Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground md:text-3xl">1M+</div>
            <div className="text-sm text-muted-foreground">Chats</div>
          </div>
        </div>
      </div>
    </section>
  );
}
