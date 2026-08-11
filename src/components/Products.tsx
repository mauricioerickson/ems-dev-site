import Link from "next/link";

const PRODUCTS = [
  {
    name: "GridERP",
    description: "Sistema completo para gestão de empresas.",
    href: "/griderp",
  },
];

export function Products() {
  return (
    <section
      id="produtos"
      className="section-padding border-t border-slate-900 bg-slate-950/40"
    >
      <div className="container-default">
        <div className="mb-10">
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Soluções desenvolvidas e comercializadas pela EMS Dev.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group block rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-5 hover:border-sky-500/50 hover:bg-slate-900/80 transition-all relative overflow-hidden"
            >
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold group-hover:text-sky-400 transition-colors">
                  {product.name}
                </h3>
                <span className="text-slate-500 group-hover:text-sky-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </div>
              <p className="relative z-10 text-sm text-slate-300">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
