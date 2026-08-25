// src/components/Process.tsx

const STEPS = [
  {
    num: "1",
    title: "Entendemos o problema",
    description: "Antes de falar sobre linguagens ou servidores, nós conversamos sobre a operação, gargalos e processos. Entendemos a realidade da sua empresa."
  },
  {
    num: "2",
    title: "Diagnosticamos",
    description: "Analisamos a causa raiz: é um problema de arquitetura, banco de dados, fluxo de trabalho mal definido ou sistema legado travado?"
  },
  {
    num: "3",
    title: "Definimos a solução",
    description: "Projetamos a abordagem técnica mais viável, segura e sustentável para o longo prazo, evitando escopos desnecessários."
  },
  {
    num: "4",
    title: "Desenvolvemos / Implementamos",
    description: "A execução é feita com qualidade técnica, testes aplicados ao contexto real e acompanhamento passo a passo."
  },
  {
    num: "5",
    title: "Evoluímos",
    description: "Sistemas vivos mudam. Acompanhamos a operação após o lançamento para garantir que a solução cresça junto com o seu negócio."
  }
];

export function Process() {
  return (
    <section className="section-padding border-t border-slate-900 bg-slate-950/20">
      <div className="container-default">
        <div className="mb-12">
          <h2 className="section-title text-center">Como trabalhamos</h2>
          <p className="section-subtitle mx-auto text-center">
            Acreditamos que a EMS Dev não está aqui apenas para "receber um documento e codificar", mas sim para resolver o seu problema.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-slate-800/50 z-0"></div>
          
          <div className="grid gap-8 md:grid-cols-5 relative z-10">
            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-5 text-2xl font-bold text-sky-400 shadow-lg shadow-sky-500/10 shrink-0 mx-auto md:mx-0 relative">
                  {step.num}
                  {/* Pequena bolinha conectora */}
                  <div className="hidden md:block absolute -right-[1.125rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-800/80"></div>
                </div>
                <h3 className="text-base font-semibold text-slate-100 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
