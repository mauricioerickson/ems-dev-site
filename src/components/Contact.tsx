// src/components/Contact.tsx
const WHATSAPP_NUMBER = "5518988129554"; // ajuste se quiser outro número

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Olá, vi o site da EMS Dev e gostaria de conversar sobre um problema/projeto no meu negócio."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="section-padding border-t border-slate-900 bg-slate-950/80">
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr] items-start">
        <div>
          <h2 className="section-title">Vamos falar sobre o seu problema</h2>
          <p className="section-subtitle mb-8">
            Dê o primeiro passo. Me conte o contexto da sua operação ou a dor que você quer resolver. Retornaremos com uma visão clara de possibilidades e próximos passos.
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="font-semibold text-slate-200 mb-2">Exemplos de como podemos ajudar hoje:</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 mt-0.5">•</span>
                  "Meu sistema está lento e caindo constantemente."
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 mt-0.5">•</span>
                  "Preciso automatizar uma rotina de integração de notas fiscais."
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 mt-0.5">•</span>
                  "Quero construir uma plataforma web (SaaS) a partir de uma planilha."
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 mt-0.5">•</span>
                  "Preciso de uma liderança técnica para avaliar a entrega do meu fornecedor atual."
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-sky-900/50 bg-slate-950 p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-3xl rounded-full"></div>
          
          <h3 className="text-lg font-semibold text-slate-100 mb-3 relative z-10">Contato direto</h3>
          <p className="text-sm text-slate-400 mb-6 relative z-10">
            Atendimento focado em entender o contexto antes de sugerir qualquer linha de código.
          </p>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full relative z-10 text-center justify-center text-[15px] py-3">
            Falar pelo WhatsApp
          </a>
          
          <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 space-y-2 relative z-10">
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Horário comercial (horário de Brasília).
            </p>
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Retorno no mesmo dia útil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
