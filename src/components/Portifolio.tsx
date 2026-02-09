// src/components/Portfolio.tsx
const PROJECTS = [
  {
    name: "GESP – Gestão Escolar Sem Papel",
    description:
      "Sistema de gestão escolar completo, com cadastros, módulos acadêmicos e financeiro, pronto para operar como SaaS.",
    result:
      "Redução de processos manuais, centralização das informações e visão gerencial.",
  },
  {
    name: "Sistema de OS para Oficinas",
    description:
      "Gestão de ordens de serviço para oficinas mecânicas de motos e carros, com laudos, checklists e histórico.",
    result: "Mais controle da operação e melhor comunicação com o cliente.",
  },
  {
    name: "Micro-SaaS para Loja de Celulares",
    description:
      "Sistema de gestão focado em assistência técnica de celulares e acessórios, preparando modelo de recorrência.",
    result: "Base para produto escalável e monetização recorrente.",
  },
  {
    name: "Monitoração Jurídica com ESAJ",
    description:
      "Projeto para acompanhar processos por CPF/CNPJ e facilitar o dia a dia de escritórios de advocacia.",
    result:
      "Mais agilidade na leitura de intimações e proximidade com o cliente final.",
  },
  {
    name: "ETL + BI para Operações",
    description:
      "Pipelines em Python integrando múltiplas fontes em uma base PostgreSQL para uso em BI.",
    result: "Dados consolidados, prontos para análise e tomada de decisão.",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding border-t border-slate-900 bg-slate-950/60"
    >
      <div className="container-default">
        <div className="mb-10">
          <h2 className="section-title">Projetos e experiência</h2>
          <p className="section-subtitle">
            Alguns dos contextos onde a EMS Dev já atuou, sempre com foco em
            resolver problemas reais de operação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-5"
            >
              <h3 className="text-base font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-slate-300 mb-3">
                {project.description}
              </p>
              <p className="text-xs text-sky-300">
                <span className="font-semibold">Impacto:</span>{" "}
                {project.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
