// src/components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-6">
      <div className="container-default flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} EMS Dev. Todos os direitos reservados.</div>
        <div className="flex flex-wrap gap-4">
          <span>Desenvolvimento Web • Apps • Consultoria</span>
        </div>
      </div>
    </footer>
  );
}
