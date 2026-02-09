// src/components/Contact.tsx
const WHATSAPP_NUMBER = "5518988129554"; // ajuste se quiser outro número

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Olá, vi o site da EMS Dev e gostaria de conversar sobre um projeto."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="section-padding border-t border-slate-900">
      <div className="container-default grid gap-10 md:grid-cols-[3fr,2fr] items-start">
        <div>
          <h2 className="section-title">Vamos falar sobre o seu projeto</h2>
          <p className="section-subtitle mb-6">
            Envie um resumo do que você precisa e retornaremos com uma visão
            clara de escopo, possibilidades técnicas e próximos passos.
          </p>

          {/* <form className="space-y-4 text-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-slate-200">
                  Nome / Empresa
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Seu nome ou nome da empresa"
                />
              </div>
              <div>
                <label className="block mb-1 text-slate-200">
                  E-mail para contato
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="voce@empresa.com"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-slate-200">
                O que você precisa?
              </label>
              <textarea
                rows={5}
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Descreva brevemente o tipo de sistema, app ou consultoria que você precisa."
              />
            </div>
            <p className="text-xs text-slate-500">
              Se preferir, você pode enviar uma mensagem direta pelo WhatsApp.
            </p>
          </form> */}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 text-sm">
          <h3 className="text-slate-100 font-semibold mb-3">Contato direto</h3>
          <p className="text-slate-300 mb-4">
            Atendimento personalizado e focado em entender o contexto do seu
            negócio antes de sugerir qualquer solução.
          </p>
          <a href={whatsappUrl} target="_blank" className="btn-primary w-full">
            Falar pelo WhatsApp
          </a>
          <div className="mt-5 text-xs text-slate-500 space-y-1">
            <p>• Horário de atendimento comercial (horário de Brasília).</p>
            <p>• Retorno normalmente dentro de 1 dia útil.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
