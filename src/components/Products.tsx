// src/components/Products.tsx

const PRODUCTS = [
  {
    name: "GRID B2B",
    tagline: "Transforme seu catálogo em um canal de vendas integrado ao seu ERP.",
    description: "Plataforma de catálogo digital B2B. Configure catálogos personalizados para seus clientes. O cliente acessa, monta o pedido e finaliza a solicitação via WhatsApp, integrando automaticamente com o seu ERP.",
    audience: "Ideal para MEIs, pequenas/médias empresas, distribuidores e equipes comerciais.",
    href: "/grid-b2b",
    available: true,
  },
  {
    name: "GRID ERP",
    tagline: "Sistema de gestão empresarial completo e integrado.",
    description: "Controle finanças, estoque, faturamento e processos operacionais em uma única plataforma estável e segura, pronta para acompanhar o crescimento do seu negócio.",
    audience: "Ideal para pequenas e médias empresas que buscam centralizar sua gestão.",
    href: "/griderp",
    available: true,
  },
];

export function Products() {
  return (
    <section
      id="produtos"
      className="section-padding border-t border-slate-900 bg-slate-950/40"
    >
      <div className="container-default">
        <div className="mb-12">
          <span className="inline-flex items-center rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-[11px] font-medium text-teal-300 mb-4">
            Desenvolvimento Próprio
          </span>
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Além de atuar resolvendo problemas sob medida para nossos clientes, a EMS Dev também desenvolve, opera e evolui produtos digitais próprios focados no mercado B2B.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-6 lg:p-8 hover:border-teal-500/50 hover:bg-slate-900/80 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-base font-medium text-slate-200 mb-3">
                  {product.tagline}
                </p>
                
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/50">
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-400">Público: </span>
                    {product.audience}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/60 relative z-10">
                <a href={product.href} className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors">
                  Conhecer o {product.name}
                  <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
