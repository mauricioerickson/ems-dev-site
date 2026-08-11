import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Grid ERP | Controle Total da sua Empresa",
  description: "O sistema ERP completo, ágil e visual da EMS Dev para revolucionar o seu negócio.",
};

const SECTIONS = [
  {
    id: "dashboard",
    title: "Controle Total da sua Empresa em Uma Única Tela",
    image: "/assets/prints-erp/01_dashboard.png",
    imageAlt: "Dashboard do Grid ERP",
    valueProps: [
      {
        title: "Visão 360º Instantânea",
        desc: "Monitore indicadores cruciais como faturamento, volume de vendas, lançamentos e orçamentos abertos em tempo real.",
      },
      {
        title: "Análise Gráfica e Fluxo de Caixa",
        desc: "Entenda a sazonalidade e o comportamento do seu caixa através de gráficos visuais de faturamento diário e anual.",
      },
      {
        title: "Contas a Pagar e Receber Unificadas",
        desc: "Antecipe-se a gargalos financeiros visualizando as pendências do mês diretamente na tela inicial, sem precisar navegar por menus complexos.",
      },
    ],
    reverse: false,
  },
  {
    id: "vendas",
    title: "Gestão de Vendas Rápida, Escalável e Inteligente",
    image: "/assets/prints-erp/02_vendas.png",
    imageAlt: "Módulo de Vendas do Grid ERP",
    valueProps: [
      {
        title: "Filtros Avançados de Performance",
        desc: "Encontre qualquer venda registrada em segundos filtrando por período, cliente ou ordem cronológica, garantindo total auditoria.",
      },
      {
        title: "Ecossistema Comercial Completo",
        desc: "Integre Venda Rápida, PDV e Pedidos complexos de atacado (B2B) em um só menu intuitivo.",
      },
      {
        title: "Histórico Detalhado de Transações",
        desc: "Mantenha controle absoluto sobre a sua operação comercial, rastreando a data, hora e o caixa responsável por cada transação.",
      },
    ],
    reverse: true,
  },
  {
    id: "financeiro",
    title: "Fluxo de Caixa Sem Complicações e à Prova de Erros",
    image: "/assets/prints-erp/03_financeiro.png",
    imageAlt: "Módulo Financeiro do Grid ERP",
    valueProps: [
      {
        title: "Centralização de Lançamentos",
        desc: "Registre, audite e acompanhe toda e qualquer movimentação financeira de forma centralizada e transparente.",
      },
      {
        title: "Controle Rigoroso de Despesas e Retiradas",
        desc: "Evite surpresas no final do mês utilizando módulos específicos para despesas operacionais e retiradas de caixa.",
      },
      {
        title: "Auditoria e Ações Rápidas",
        desc: "Visualize facilmente a hora, a data e o valor de cada transação, e tome ações corretivas com um clique direto na tabela.",
      },
    ],
    reverse: false,
  },
  {
    id: "estoque",
    title: "Estoque Organizado e Precificação Dinâmica",
    image: "/assets/prints-erp/04_produtos.png",
    imageAlt: "Controle de Produtos e Estoque",
    valueProps: [
      {
        title: "Organização por Localização Física",
        desc: "Saiba exatamente em qual prateleira, corredor ou depósito seu produto está armazenado, agilizando o picking.",
      },
      {
        title: "Busca Instantânea por GTIN / Código de Barras",
        desc: "Localize e cadastre itens em conformidade com os padrões de mercado, facilitando o checkout.",
      },
      {
        title: "Gestão Visual e Rápida",
        desc: "Edite preços, exclua produtos descontinuados ou visualize detalhes com ícones intuitivos e uma interface fluida.",
      },
    ],
    reverse: true,
  },
  {
    id: "clientes",
    title: "O Ecossistema Completo da sua Carteira de Contatos",
    image: "/assets/prints-erp/05_clientes.png",
    imageAlt: "Gestão de Clientes e Parceiros",
    valueProps: [
      {
        title: "Centralização de Stakeholders",
        desc: "Cadastre e gerencie não apenas clientes, mas também fornecedores, funcionários, vendedores e entregadores num só painel.",
      },
      {
        title: "Flexibilidade Regulatória nativa",
        desc: "Campos e validações adaptadas perfeitamente para Pessoa Física (CPF) e Pessoa Jurídica (CNPJ).",
      },
      {
        title: "Gestão Operacional de Serviços",
        desc: "Controle técnicos, serviço/mão de obra e transportadoras em um menu unificado, reduzindo atritos na prestação do serviço.",
      },
    ],
    reverse: false,
  },
];

export default function GridErpPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar simplificada para a landing page interna */}
      <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="container-default flex items-center justify-between py-3">
          <Link href="/#produtos" className="flex items-center gap-2 group">
            <span className="text-slate-400 group-hover:text-slate-200 transition-colors text-sm font-medium">
              &larr; Voltar para EMS Dev
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              GRID ERP
            </span>
          </div>
          <div>
            <a href="https://wa.me/5518991606608?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20detalhes%20sobre%20o%20Grid%20ERP" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs hidden md:inline-flex">
              Agendar Demonstração
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container-default relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Transforme a Gestão<br className="hidden md:block"/> da sua Empresa com <span className="text-sky-400">Grid ERP</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
              Um sistema ágil, visual e completo. Pare de caçar números em planilhas e comece a tomar decisões estratégicas baseadas em dados em tempo real.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://wa.me/5518991606608?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20detalhes%20sobre%20o%20Grid%20ERP" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Falar com Consultor
              </a>
              <a href="#dashboard" className="btn-secondary">
                Ver Funcionalidades
              </a>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        </section>

        {/* Feature Sections */}
        {SECTIONS.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={`section-padding border-b border-slate-900 ${
              idx % 2 !== 0 ? "bg-slate-950/60" : "bg-slate-900/20"
            }`}
          >
            <div className="container-default">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${section.reverse ? "lg:flex-row-reverse" : ""}`}>
                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    {section.title}
                  </h2>
                  <div className="space-y-8">
                    {section.valueProps.map((prop, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-200 mb-2">
                            {prop.title}
                          </h3>
                          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            {prop.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image / UI Preview */}
                <div className="flex-1 w-full relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                    {/* Placeholder div in case image is missing */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-600 text-sm z-0 text-center px-4">
                      Imagem: {section.imageAlt} <br/> ({section.image})
                    </div>
                    <Image 
                      src={section.image} 
                      alt={section.imageAlt}
                      width={1200}
                      height={800}
                      className="relative z-10 w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Footer */}
        <section id="contato" className="section-padding bg-sky-900/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-transparent"></div>
          <div className="container-default relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para escalar com segurança?
            </h2>
            <p className="text-slate-300 mb-10 text-lg">
              Agende uma demonstração gratuita e veja na prática como o Grid ERP pode otimizar os processos da sua empresa hoje mesmo.
            </p>
            <a href="https://wa.me/5518991606608?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20detalhes%20sobre%20o%20Grid%20ERP" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              Falar com o Comercial pelo WhatsApp
            </a>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900 bg-slate-950">
        <div className="container-default">
          <p>© {new Date().getFullYear()} EMS Dev. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
