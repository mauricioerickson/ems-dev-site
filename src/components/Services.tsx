// src/components/Services.tsx
const SERVICES = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sistemas sob medida, painéis administrativos, SaaS, integrações com APIs, processos críticos e alto volume de dados.",
    tags: ["Laravel", "PHP", "Node", "Spring Boot", "Filament"],
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Apps corporativos para operação em campo, com sincronização, offline-first e integração completa com seu backend.",
    tags: ["Flutter", "APIs REST", "Autenticação", "Push"],
  },
  {
    title: "Automações & ETL",
    description:
      "Pipelines profissionais de dados, scraping de fontes públicas, integração com bancos e estrutura para BI.",
    tags: ["Python", "ETL", "PostgreSQL", "Scraping"],
  },
  {
    title: "Consultoria Técnica",
    description:
      "Análise de arquitetura, correção de projetos travados, revisão de código, otimização de performance e escalabilidade.",
    tags: ["Arquitetura", "Refactor", "Diagnóstico"],
  },
  {
    title: "Suporte & Manutenção",
    description:
      "Evolução de sistemas existentes, inclusão de novas features e suporte contínuo para sua operação.",
    tags: ["Manutenção", "SLA", "Evolução"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="section-padding border-t border-slate-900">
      <div className="container-default">
        <div className="mb-10">
          <h2 className="section-title">Serviços</h2>
          <p className="section-subtitle">
            Do zero a produção, da ideia ao sistema que roda todo dia. A EMS
            Dev atua em toda a cadeia: concepção, desenvolvimento, dados e
            suporte.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5 hover:border-sky-600/70 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-slate-300 mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-sky-200">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sky-500/10 border border-sky-500/40 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
