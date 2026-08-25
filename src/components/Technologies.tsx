// src/components/Technologies.tsx

const TECH_CATEGORIES = [
  {
    category: "Backend & APIs",
    items: ["Laravel", "PHP", "Spring Boot", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Filament"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Android Nativo"],
  },
  {
    category: "Dados e Automação",
    items: ["Python", "ETL Pipelines", "Scraping", "Integração via API"],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Infraestrutura",
    items: ["Linux", "Docker", "Nginx", "AWS", "VPS", "CI/CD"],
  },
];

export function Technologies() {
  return (
    <section className="section-padding border-t border-slate-900 bg-slate-950/40">
      <div className="container-default">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="section-title">Nossa Caixa de Ferramentas</h2>
          <p className="section-subtitle mx-auto">
            Acreditamos que a tecnologia é apenas o meio. O problema do seu negócio é o ponto de partida. 
            Estas são algumas das ferramentas que dominamos para construir a solução ideal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {TECH_CATEGORIES.map((group) => (
            <div key={group.category} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-center flex flex-col items-center justify-center">
              <h3 className="text-sm font-semibold text-slate-200 mb-3">{group.category}</h3>
              <div className="flex flex-wrap justify-center gap-1.5">
                {group.items.map((tech) => (
                  <span key={tech} className="text-[11px] text-slate-400 bg-slate-900 border border-slate-800 rounded px-2 py-0.5">
                    {tech}
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
