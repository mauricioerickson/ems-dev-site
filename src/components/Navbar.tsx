// src/components/Navbar.tsx
"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Projetos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="container-default flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600/90 shadow-lg shadow-sky-500/40">
            <span className="text-sm font-semibold tracking-tight">EMS</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              EMS Dev
            </span>
            <span className="text-[11px] text-slate-400">
              Desenvolvimento • Apps • Consultoria
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary text-xs">
            Falar sobre um projeto
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-2.5 py-1.5 text-xs text-slate-100 hover:bg-slate-800"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <nav className="container-default flex flex-col gap-3 py-4 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-sky-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-primary text-xs mt-2 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Falar sobre um projeto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
