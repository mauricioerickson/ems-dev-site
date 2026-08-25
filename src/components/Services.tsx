// src/components/Services.tsx

const SOLUTIONS = [
  {
    title: "Sistemas e Produtos Digitais",
    description: "Sistemas sob medida, corporativos, SaaS, portais, plataformas, MVPs e evolução de produtos existentes.",
    items: ["Sistemas sob medida", "Sistemas corporativos", "SaaS", "Portais", "Plataformas", "MVPs", "Evolução"]
  },
  {
    title: "Sistemas Problemáticos",
    description: "Seu sistema já existe, mas não está funcionando como deveria? Diagnóstico e recuperação.",
    items: ["Sistemas lentos", "Erros recorrentes", "Instabilidade", "Memory leaks", "Problemas de banco", "Integrações quebradas", "Código legado"]
  },
  {
    title: "Automação",
    description: "Substituição de processos manuais repetitivos por fluxos automatizados e robôs.",
    items: ["Processos manuais", "Robôs", "Integração de ferramentas", "Processamento automático", "Automação operacional", "Relatórios automáticos"]
  },
  {
    title: "Integrações",
    description: "Conexão entre diferentes sistemas para que a informação flua sem intervenção humana.",
    items: ["ERP", "APIs", "Sistemas legados", "Aplicativos", "Bancos de dados", "Serviços externos", "WhatsApp"]
  },
  {
    title: "Dados",
    description: "Transformar dados espalhados em informações estruturadas e prontas para uso.",
    items: ["ETL", "Consolidação de bases", "Tratamento de dados", "Scraping", "BI", "Relatórios", "Grandes volumes"]
  },
  {
    title: "Aplicativos",
    description: "Soluções mobile pensadas para a operação real e conectadas ao seu negócio.",
    items: ["Apps corporativos", "Equipes de campo", "Coleta de dados", "Offline-first", "Sincronização", "Integração"]
  }
];

export function Services() {
  return (
    <section id="solucoes" className="section-padding border-t border-slate-900 bg-slate-950/40">
      <div className="container-default">
        <div className="mb-10">
          <h2 className="section-title">O que podemos resolver</h2>
          <p className="section-subtitle">
            Áreas de atuação onde combinamos diagnóstico técnico e execução para destravar operações.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className={`rounded-2xl border ${
                solution.title === "Sistemas Problemáticos" 
                  ? "border-amber-800/50 bg-amber-950/10 hover:border-amber-600/70" 
                  : "border-slate-800 bg-slate-950/80 hover:border-sky-600/70"
              } p-6 transition-colors`}
            >
              <h3 className={`text-lg font-semibold mb-3 ${
                solution.title === "Sistemas Problemáticos" ? "text-amber-400" : "text-slate-100"
              }`}>
                {solution.title}
              </h3>
              <p className="text-sm text-slate-300 mb-5">
                {solution.description}
              </p>
              <ul className="flex flex-col gap-1.5">
                {solution.items.map((item) => (
                  <li key={item} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className={`w-1 h-1 rounded-full ${
                      solution.title === "Sistemas Problemáticos" ? "bg-amber-600/50" : "bg-sky-500/50"
                    }`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
