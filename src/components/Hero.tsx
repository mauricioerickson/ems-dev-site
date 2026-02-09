// src/components/Hero.tsx
export function Hero() {
  return (
    <section className="section-padding pb-10 md:pb-16">
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr] items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 mb-4">
            Desenvolvimento orientado a resultado real
          </span>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Soluções digitais para negócios que não podem parar.
          </h1>

          <p className="mt-4 text-slate-300 text-sm md:text-base max-w-xl">
            Desenvolvimento web, aplicativos, automações, ETL e consultoria
            técnica para transformar processos confusos em sistemas claros,
            escaláveis e com performance.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contato" className="btn-primary">
              Falar com a EMS Dev
            </a>
            <a href="#portfolio" className="btn-secondary">
              Ver projetos e sistemas
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-slate-400 max-w-md">
            <div>
              <div className="text-slate-100 font-semibold text-base">
                +10 anos
              </div>
              <div>em desenvolvimento de sistemas e integrações</div>
            </div>
            <div>
              <div className="text-slate-100 font-semibold text-base">
                Foco em B2B
              </div>
              <div>operações que dependem de estabilidade e dados</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -top-6 -right-4 blur-3xl bg-sky-500/30" />
          <div className="relative rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-5 shadow-xl">
            <div className="text-xs text-slate-400 mb-3">Stack & foco</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3">
                <div className="text-slate-200 font-medium mb-1">
                  Sistemas Web
                </div>
                <div>Laravel, PHP, Spring Boot, Node, Filament</div>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3">
                <div className="text-slate-200 font-medium mb-1">
                  Apps & Campo
                </div>
                <div>Flutter, integração com APIs, uso em operação</div>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3">
                <div className="text-slate-200 font-medium mb-1">
                  Dados & ETL
                </div>
                <div>Python, ETL, BI, PostgreSQL, scraping</div>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3">
                <div className="text-slate-200 font-medium mb-1">
                  Consultoria
                </div>
                <div>arquitetura, diagnóstico, otimização de projetos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
