// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "#", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#produtos", label: "Produtos" },
  { href: "#cases", label: "Cases" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="container-default flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image 
            src="/icon.png" 
            alt="EMS Dev Logo" 
            width={38}
            height={38}
            className="rounded-xl shadow-lg shadow-sky-500/30 bg-slate-900" 
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              EMS Dev
            </span>
            <span className="text-[11px] text-slate-400">
              Parceiro Técnico & Consultoria
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
            Falar sobre um problema
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
              Falar sobre um problema
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
