// src/components/Differentials.tsx
const DIFFERENTIALS = [
  {
    title: "Visão de produto, não só de código",
    description:
      "O foco é entregar algo que funcione na prática, encaixado nos seus processos e na sua realidade.",
  },
  {
    title: "Experiência em projetos complexos",
    description:
      "Integrações com APIs, sistemas legados, alto volume de dados e operações sensíveis.",
  },
  {
    title: "Comunicação direta e transparente",
    description:
      "Contato direto com quem desenvolve, sem camadas desnecessárias entre problema e solução.",
  },
  {
    title: "Base sólida em dados e automação",
    description:
      "Capacidade de estruturar pipelines ETL, robôs e processos que alimentam BI e tomada de decisão.",
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-padding border-t border-slate-900"
    >
      <div className="container-default">
        <div className="mb-10">
          <h2 className="section-title">Por que trabalhar com a EMS Dev?</h2>
          <p className="section-subtitle">
            Mais do que entregar telas, a EMS Dev se preocupa em garantir que o
            sistema faça sentido para o negócio e possa crescer com segurança.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
            >
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
