// src/components/Problems.tsx

const PAIN_POINTS = [
  {
    title: "Meu sistema está lento ou instável",
    description: "Diagnóstico de performance, arquitetura, banco de dados, código, infraestrutura e problemas complexos.",
  },
  {
    title: "Minha empresa depende de processos manuais",
    description: "Automação de tarefas repetitivas, fluxos operacionais, processamento de dados e integrações.",
  },
  {
    title: "Meus sistemas não conversam entre si",
    description: "Integração entre ERPs, APIs, aplicativos, bancos de dados e sistemas legados.",
  },
  {
    title: "Tenho muitos dados, mas pouca informação",
    description: "ETL, consolidação de bases, tratamento, estruturação e preparação para Business Intelligence (BI).",
  },
  {
    title: "Tenho um sistema antigo que precisa evoluir",
    description: "Modernização e evolução de sistemas existentes sem necessariamente precisar reconstruí-los do zero.",
  },
  {
    title: "Preciso criar um sistema ou produto digital",
    description: "Desenvolvimento de sistemas corporativos, plataformas, SaaS e produtos digitais.",
  },
  {
    title: "Preciso de um aplicativo",
    description: "Aplicativos para operação, equipes de campo, coleta de dados, sincronização, funcionamento offline e integração.",
  },
  {
    title: "Tenho uma equipe técnica, mas preciso de direção",
    description: "CTO as a Service, arquitetura, decisões técnicas, acompanhamento e gestão técnica.",
  },
  {
    title: "Tenho uma ideia de produto",
    description: "Validação técnica, arquitetura, MVP e desenvolvimento do produto.",
  }
];

export function Problems() {
  return (
    <section className="section-padding border-t border-slate-900 bg-slate-950/60">
      <div className="container-default">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="section-title">Você se identifica com algum desses problemas?</h2>
          <p className="section-subtitle mx-auto">
            Não importa a linguagem de programação. O que importa é resolver a dor que está travando a sua operação ou impedindo seu crescimento.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((pain) => (
            <div
              key={pain.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 hover:border-sky-600/50 transition-colors"
            >
              <h3 className="text-[15px] font-semibold text-slate-100 mb-2 leading-snug">{pain.title}</h3>
              <p className="text-sm text-slate-400">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
