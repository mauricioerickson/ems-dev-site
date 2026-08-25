// src/components/About.tsx

export function About() {
  return (
    <section
      id="sobre"
      className="section-padding border-t border-slate-900 bg-slate-950/80"
    >
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr] items-start">
        <div>
          <h2 className="section-title">Quem está por trás da EMS Dev</h2>
          <p className="text-xl font-medium text-sky-400 mb-6">
            Experiência técnica para problemas que não são simples.
          </p>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              A EMS Dev é uma operação de tecnologia e inteligência liderada por uma trajetória sólida na resolução de problemas complexos de software. 
              Nossa experiência abrange o ciclo de vida completo de produtos digitais, atuando desde a linha de código até a tomada de decisões estratégicas de negócios.
            </p>
            <p>
              Não somos apenas desenvolvedores executando tarefas. Temos experiência atuando como <strong>Tech Lead, CTO e Product Owner</strong> em projetos de missão crítica, incluindo sistemas de gestão, plataformas SaaS, aplicativos de operação e pipelines de dados de alta disponibilidade.
            </p>
            <p>
              Essa bagagem nos permite entender rapidamente a raiz do problema da sua empresa. Se o seu sistema está lento, se a sua equipe técnica precisa de liderança, ou se você tem uma ideia de produto que precisa sair do papel com uma arquitetura viável, nós já estivemos nessa cadeira e sabemos como resolver.
            </p>
          </div>
          
          <div className="mt-8">
            <a href="https://www.linkedin.com/in/erickson-mauricio-012323ba/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs">
              Ver experiência profissional
            </a>
          </div>
        </div>
        
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-sm">
          <h3 className="text-slate-100 font-semibold mb-4 text-base">
            Áreas de Domínio Prático
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <svg className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              <div>
                <strong className="block text-slate-200">Arquitetura de Software</strong>
                <span className="text-slate-400 text-xs">Desenho de soluções para SaaS, sistemas corporativos e infraestrutura robusta.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <svg className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              <div>
                <strong className="block text-slate-200">Liderança Técnica (CTO / Tech Lead)</strong>
                <span className="text-slate-400 text-xs">Gestão técnica, avaliação de fornecedores e direcionamento de equipes.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <svg className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              <div>
                <strong className="block text-slate-200">Integração e Automação</strong>
                <span className="text-slate-400 text-xs">APIs complexas, ETL, processos em lote e processamento de dados.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
