// src/components/About.tsx
export function About() {
  return (
    <section
      id="sobre"
      className="section-padding border-t border-slate-900 bg-slate-950/80"
    >
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr] items-start">
        <div>
          <h2 className="section-title">Sobre a EMS Dev</h2>
          <p className="section-subtitle mb-4">
            A EMS Dev é uma empresa de desenvolvimento criada a partir de
            projetos reais em operação: sistemas de gestão escolar, oficinas,
            advocacia, automações de dados, APIs e muito mais.
          </p>
          <p className="text-sm text-slate-300 mb-3">
            A proposta é simples: conectar desenvolvimento de software com a
            realidade do negócio. Sem promessas vazias, sem arquitetura
            complicada demais, sem vender tecnologia pela tecnologia.
          </p>
          <p className="text-sm text-slate-300">
            Cada projeto é pensado para ser claro, sustentável, com código
            organizado e documentação mínima necessária para crescer sem virar
            um monólito caótico.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 text-sm text-slate-300">
          <h3 className="text-slate-100 font-semibold mb-3">
            Como a EMS Dev pode ajudar:
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Você tem um sistema legado travado e precisa evoluir.</li>
            <li>Quer tirar um produto SaaS do papel com base sólida.</li>
            <li>Precisa integrar sistemas, APIs e bases de dados.</li>
            <li>Deseja automatizar processos operacionais repetitivos.</li>
            <li>Precisa de alguém técnico para ajudar a decidir caminhos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
