// src/components/Hero.tsx
export function Hero() {
  return (
    <section className="section-padding pb-10 md:pb-16">
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr] items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 mb-4">
            Parceiro técnico para resolver problemas de negócio
          </span>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Seu negócio tem um problema que a tecnologia pode resolver?
          </h1>

          <p className="mt-4 text-slate-300 text-sm md:text-base max-w-xl">
            Acreditamos que o problema do cliente é o ponto de partida. A tecnologia é apenas o meio. 
            Ajudamos empresas diagnosticando gargalos, propondo soluções e assumindo a responsabilidade técnica
            pelo desenvolvimento de sistemas, automações e integrações.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contato" className="btn-primary">
              Tenho um problema para resolver
            </a>
            <a href="#solucoes" className="btn-secondary">
              Conhecer as soluções
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-xs text-slate-400 max-w-md">
            <div>
              <div className="text-slate-100 font-semibold text-base">
                +10 anos
              </div>
              <div>de experiência resolvendo problemas complexos</div>
            </div>
            <div>
              <div className="text-slate-100 font-semibold text-base">
                Foco em Resultados
              </div>
              <div>diagnóstico real antes de escrever qualquer código</div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          <div className="absolute inset-0 -top-6 -right-4 blur-3xl bg-sky-500/20" />
          <div className="relative rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Como a EMS Dev atua</h3>
            <div className="space-y-4 text-sm text-slate-300">
              
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 text-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Sistemas e Produtos</span>
                  <p className="text-xs text-slate-400 mt-0.5">Sistemas sob medida, corporativos, plataformas SaaS e portais B2B.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="mt-0.5 text-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Integração e Dados</span>
                  <p className="text-xs text-slate-400 mt-0.5">Fazer sistemas conversarem, automação de planilhas e estruturação para BI.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="mt-0.5 text-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Recuperação e Manutenção</span>
                  <p className="text-xs text-slate-400 mt-0.5">Sistemas lentos, legados difíceis de manter e aplicativos instáveis.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="mt-0.5 text-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">CTO as a Service</span>
                  <p className="text-xs text-slate-400 mt-0.5">Direção técnica, arquitetura e liderança para sua operação interna.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
