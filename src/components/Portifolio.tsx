// src/components/Portifolio.tsx

const PROJECTS = [
  {
    name: "MaisBase",
    problem: "A escola possuía processos manuais excessivos, papéis espalhados e falta de visão gerencial centralizada.",
    challenge: "Integrar módulos acadêmicos e financeiros em um único lugar, mantendo a simplicidade de uso para toda a equipe.",
    solution: "Desenvolvimento de um sistema de gestão completo, preparado para operar no modelo SaaS.",
    result: "Redução do uso de papel, centralização das informações e mais velocidade na operação.",
    tech: "Laravel, PHP, PostgreSQL",
  },
  {
    name: "Gimb — Plataforma",
    problem: "A operação precisava de um ambiente robusto e centralizado para gerenciar fluxos complexos e informações de negócios.",
    challenge: "Desenvolver uma plataforma segura, escalável e de alta disponibilidade, que fosse o coração tecnológico da operação.",
    solution: "Arquitetura e desenvolvimento de uma plataforma digital avançada, focada em performance e integração de processos.",
    result: "Centralização da operação, eficiência no gerenciamento de dados e base sólida para crescimento do produto.",
    tech: "Arquitetura Web, Banco de Dados, APIs",
  },
  {
    name: "Monitoração Jurídica com ESAJ",
    problem: "Escritórios de advocacia perdiam horas da equipe consultando processos manualmente em portais de tribunais.",
    challenge: "Extrair informações de sistemas públicos externos de forma automatizada, garantindo estabilidade.",
    solution: "Desenvolvimento de robôs para acompanhar publicações e processos vinculados a CPFs/CNPJs.",
    result: "Fim do tempo gasto em busca manual e redução de riscos de perda de prazos legais.",
    tech: "Python, Scraping, Automação",
  },
  {
    name: "Micro-SaaS para Loja de Celulares",
    problem: "Lojas de assistência técnica tinham dificuldade em gerenciar reparos e vendas de acessórios simultaneamente.",
    challenge: "Construir um sistema simples para o balcão, mas estruturado o suficiente para virar um produto recorrente (SaaS).",
    solution: "Sistema de gestão focado em assistência de celulares, controle de garantias e fluxo de caixa.",
    result: "Operação da loja padronizada e base técnica pronta para escalar e comercializar para outras lojas.",
    tech: "Spring Boot, APIs",
  },
  {
    name: "ETL + BI para Operações",
    problem: "A diretoria não conseguia analisar resultados cruzados porque os dados estavam espalhados em vários sistemas diferentes.",
    challenge: "Consolidar múltiplas fontes de origem (APIs, planilhas, banco legados) sem onerar os sistemas originais.",
    solution: "Pipelines de dados (ETL) construídos sob medida alimentando um Data Warehouse central.",
    result: "Dados limpos, centralizados e atualizados automaticamente, prontos para dashboards de BI.",
    tech: "Python, PostgreSQL, Integração",
  },
];

export function Portfolio() {
  return (
    <section
      id="cases"
      className="section-padding border-t border-slate-900 bg-slate-950/60"
    >
      <div className="container-default">
        <div className="mb-12">
          <h2 className="section-title">Cases e Experiência</h2>
          <p className="section-subtitle">
            Situações reais onde a EMS Dev atuou diagnosticando o problema e construindo a solução técnica.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-6 lg:p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-slate-100">{project.name}</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-slate-500 font-semibold mb-0.5 text-xs uppercase tracking-wider">O Problema</span>
                  <p className="text-slate-300">{project.problem}</p>
                </div>
                
                <div>
                  <span className="block text-slate-500 font-semibold mb-0.5 text-xs uppercase tracking-wider">O Desafio</span>
                  <p className="text-slate-300">{project.challenge}</p>
                </div>

                <div>
                  <span className="block text-slate-500 font-semibold mb-0.5 text-xs uppercase tracking-wider">A Solução</span>
                  <p className="text-slate-300">{project.solution}</p>
                </div>

                <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-4 mt-4">
                  <span className="block text-sky-400 font-semibold mb-1 text-xs uppercase tracking-wider">Resultado / Impacto</span>
                  <p className="text-slate-200">{project.result}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500">Tecnologias: </span>
                  <span className="text-xs text-slate-400 font-medium">{project.tech}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
