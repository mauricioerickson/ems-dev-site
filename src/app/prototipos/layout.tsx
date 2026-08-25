import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protótipo Exclusivo | EMS Dev",
  description: "Apresentação de protótipo de alta conversão desenvolvido pela EMS Dev.",
};

export default function PrototiposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsappPhone = "5518988129554";
  const defaultMessage = encodeURIComponent(
    "Olá Erickson! Acessei o link do protótipo no site da EMS Dev e gostei da proposta. Podemos conversar?"
  );
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${defaultMessage}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* BARRA SUPERIOR DE APRESENTAÇÃO COMERCIAL (PROPOSAL HEADER) */}
      <header className="sticky top-0 z-50 border-b border-sky-500/30 bg-slate-950/90 backdrop-blur-md shadow-xl shadow-sky-950/20">
        <div className="container-default py-2.5 px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Lado Esquerdo: Identificação EMS Dev + Badge Lead */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <Image
                  src="/icon.png"
                  alt="EMS Dev"
                  width={32}
                  height={32}
                  className="rounded-lg shadow-md shadow-sky-500/20 bg-slate-900 group-hover:scale-105 transition-transform"
                />
                <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
                    EMS Dev
                  </span>
                  <span className="bg-sky-500/10 text-sky-400 border border-sky-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    DEMO EXCLUSIVA
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Protótipo Interativo de Alta Conversão
                </span>
              </div>
            </Link>

            {/* Destaque rápido no mobile */}
            <div className="md:hidden flex items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs !py-1.5 !px-3 font-semibold gap-1.5"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Centro: Badges de diferenciais entregues */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] text-slate-300 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> 0.5s Carregamento
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              📱 100% Responsivo
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-indigo-400 font-medium">
              ⚡ Foco em Vendas
            </span>
          </div>

          {/* Lado Direito: Chamada para Ação principal (CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden xl:inline">
              Gostou da proposta?
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-semibold gap-2 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:scale-[1.02]"
            >
              <svg
                className="w-4 h-4 text-emerald-300 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Aprovar Projeto no WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* ÁREA DO CONTEÚDO DO PROTÓTIPO */}
      <main className="flex-1 w-full">{children}</main>

      {/* FOOTER DE APRESENTAÇÃO */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="container-default flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} EMS Dev. Protótipo exclusivo desenvolvido para apresentação de proposta.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">Site Principal EMS Dev</Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">Falar com Consultor</a>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP NO CANTO INFERIOR DIREITO */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all group"
      >
        <svg
          className="w-6 h-6 fill-current text-slate-950"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="hidden sm:inline text-xs">Falar sobre este projeto</span>
      </a>
    </div>
  );
}
