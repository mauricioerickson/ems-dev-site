// src/components/CTOAsAService.tsx

const AREAS = [
  "Arquitetura de software",
  "Decisões técnicas estratégicas",
  "Avaliação de fornecedores",
  "Priorização técnica de roadmap",
  "Planejamento de capacidade",
  "Acompanhamento de desenvolvimento",
  "Revisão de soluções e código",
  "Diagnóstico de problemas críticos",
  "Redução de riscos",
  "Evolução tecnológica contínua",
  "Organização da operação técnica",
];

export function CTOAsAService() {
  return (
    <section className="section-padding bg-slate-900 border-t border-slate-800">
      <div className="container-default grid gap-10 md:grid-cols-[2fr,3fr] items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-300 mb-6">
            Liderança Técnica Experiente
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-4">
            CTO as a Service
          </h2>
          <p className="text-lg text-slate-300 mb-6 font-medium">
            Sua empresa tem tecnologia, mas precisa de alguém experiente para conduzir as decisões técnicas?
          </p>
          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            Muitas empresas que estão crescendo, ou que já possuem desenvolvedores e fornecedores, sofrem com a falta de uma liderança técnica sólida. 
            O serviço de CTO as a Service não é apenas terceirizar desenvolvimento. É colocar alguém com experiência real para assumir a responsabilidade pelas decisões, guiar a equipe, garantir a arquitetura correta e alinhar a tecnologia aos objetivos do seu negócio.
          </p>
          <a href="#contato" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-indigo-500/70 bg-indigo-600 text-slate-50 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
            Preciso de liderança técnica
          </a>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950 p-6 md:p-8 shadow-xl">
          <h3 className="text-base font-semibold text-slate-100 mb-6">Onde a EMS Dev atua estrategicamente:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            {AREAS.map((area) => (
              <div key={area} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-sm text-slate-300">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
