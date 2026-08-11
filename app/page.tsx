import Image from "next/image";
import PhoneModelViewer from "./components/PhoneModelViewer";
import ScrollReveal from "./components/ScrollReveal";

type PortfolioVisual = {
  number: string;
  group: string;
  title: string;
  shape: "wide" | "standard" | "square";
  description: string;
  placeholder?: string;
  phoneDemo?: boolean;
  image?: string;
  imageAlt?: string;
};

const services = [
  {
    number: "01",
    title: "Sites institucionais",
    text: "Uma presença profissional que explica seu negócio, apresenta seus diferenciais e conduz o visitante até o contato.",
  },
  {
    number: "02",
    title: "Landing pages",
    text: "Páginas objetivas para campanhas, lançamentos, captação de contatos e ofertas específicas.",
  },
  {
    number: "03",
    title: "Automações no WhatsApp",
    text: "Atendimento rápido, triagem, organização de pedidos, lembretes e colaboração entre sua equipe e a IA.",
  },
  {
    number: "04",
    title: "Comércio digital",
    text: "Lojas online e cardápios digitais pensados para facilitar a escolha e aproximar o cliente da compra.",
  },
  {
    number: "05",
    title: "Design e identidade visual",
    text: "Templates, materiais para Canva e uma apresentação visual mais coerente em todos os pontos de contato.",
  },
  {
    number: "06",
    title: "Tráfego pago",
    text: "Campanhas para levar as pessoas certas até uma página e uma oferta preparadas para recebê-las.",
  },
];

const portfolioVisuals: PortfolioVisual[] = [
  {
    number: "01",
    group: "Site · Página inicial",
    title: "Yes Play — excelência para o reino",
    shape: "wide",
    image: "/showcase/01.png",
    imageAlt: "Página inicial do site Yes Play",
    description:
      "Uma presença digital para produtora musical, gravadora e editora, com caminhos diretos para contratar um show ou conhecer o elenco.",
  },
  {
    number: "02",
    group: "Site · Serviços",
    title: "Celeiro Pet Village — escolha sem dúvida",
    shape: "standard",
    image: "/showcase/02.png",
    imageAlt: "Seção de serviços do site Celeiro Pet Village",
    description:
      "Serviços, explicações e ações organizadas para que tutores entendam o atendimento e entrem em contato com facilidade.",
  },
  {
    number: "04",
    group: "Site · Conversão",
    title: "Cabana — cardápio direto ao pedido",
    shape: "standard",
    image: "/showcase/04.png",
    imageAlt: "Cardápio digital do site Cabana Carnes e Pizzas",
    description:
      "Um cardápio digital que apresenta os itens com clareza e direciona o cliente para fazer o pedido pelo WhatsApp.",
  },
  {
    number: "03",
    group: "Site · Responsividade",
    title: "Yes Play — experiência feita para celular",
    shape: "wide",
    phoneDemo: true,
    description:
      "A versão mobile preserva a identidade visual, organiza a leitura e mantém as ações principais sempre ao alcance do cliente.",
  },
  {
    number: "05",
    group: "Automação · Estrutura",
    title: "O fluxo completo no n8n",
    shape: "standard",
    image: "/showcase/05.png",
    imageAlt: "Fluxo de automação no n8n",
    description:
      "Uma automação que recebe mensagens, consulta informações, organiza decisões e devolve respostas pelo WhatsApp.",
  },
  {
    number: "06",
    group: "Automação · Resultado",
    title: "Atendimento rápido e organizado",
    shape: "standard",
    image: "/showcase/06.png",
    imageAlt: "Conversa de WhatsApp com resultado de automação",
    description:
      "A conversa recebe a intenção do cliente e apresenta opções úteis imediatamente, sem deixar o atendimento parado.",
  },
];

const automationItems = [
  "Respostas em menos de 5 minutos",
  "Triagem e organização de informações",
  "Montagem de pedidos",
  "Lembretes e acompanhamento",
  "Atendimento humano + IA",
  "Planilhas e tarefas administrativas",
];

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <header className="site-header">
        <a className="mt-logo" href="#inicio" aria-label="Manoel Teófilo, início">
          MT
        </a>
        <nav aria-label="Navegação principal">
          <a href="#trabalhos">Trabalhos</a>
          <a href="#automacoes">Automações</a>
          <a href="#sobre">Sobre mim</a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/5585994101646?text=Ol%C3%A1%2C%20Manoel!%20Quero%20conversar%20sobre%20meu%20neg%C3%B3cio."
          target="_blank"
          rel="noreferrer"
        >
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy" data-reveal="left">
          <p className="eyebrow">Sites · Automações · Presença digital</p>
          <h1>
            Infraestrutura digital para negócios locais <em>avançarem.</em>
          </h1>
          <p className="hero-lead">
            Eu sou Manoel Teófilo. Crio sites e automações que ajudam empresas a
            vender com mais clareza, responder mais rápido e ganhar tempo no dia a dia.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#trabalhos">
              Ver meus trabalhos <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href="https://wa.me/5585994101646?text=Ol%C3%A1%2C%20Manoel!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar."
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Resumo do atendimento" data-reveal="right" data-reveal-delay="100">
          <div className="hero-card-top">
            <span className="status-dot" /> Disponível para novos projetos
          </div>
          <div className="signal" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>Do primeiro contato à entrega</p>
          <strong>Estratégia, design, código e automação em uma só conversa.</strong>
          <div className="hero-card-meta">
            <span>Fortaleza + RM</span>
            <span>Reuniões presenciais</span>
          </div>
        </aside>

        <div className="hero-facts" aria-label="Informações rápidas" data-reveal="up" data-reveal-delay="180">
          <div>
            <strong>5 dias úteis</strong>
            <span>Prazo médio de um site</span>
          </div>
          <div>
            <strong>Atendimento direto</strong>
            <span>Você fala comigo do começo ao fim</span>
          </div>
          <div>
            <strong>Suporte pós-entrega</strong>
            <span>Acompanhamento depois do lançamento</span>
          </div>
        </div>
      </section>

      <section className="project-section" id="trabalhos">
        <div className="section-heading" data-reveal="up">
          <div>
            <p className="eyebrow">Sites e automações</p>
            <h2>Projetos que apresentam, convencem e trabalham.</h2>
          </div>
          <p>
            Os sites ocupam o primeiro plano desta galeria. As automações completam a
            apresentação mostrando como o atendimento pode continuar depois do clique.
          </p>
        </div>

        <div className="automation-visual-grid">
          {portfolioVisuals.map((visual) => (
            <article
              className={`automation-visual-card automation-visual-${visual.shape}`}
              key={visual.number}
              data-reveal="scale"
              data-reveal-delay={(Number(visual.number) % 2) * 80}
            >
              <div
                className={`automation-placeholder${visual.image ? " automation-preview" : ""}`}
                aria-label={visual.image ? undefined : `Espaço para imagem: ${visual.title}`}
              >
                <span className="placeholder-number">{visual.number}</span>
                {visual.image ? (
                  <Image
                    src={visual.image}
                    alt={visual.imageAlt}
                    fill
                    sizes={visual.shape === "wide" ? "88vw" : "(max-width: 760px) 100vw, 44vw"}
                    unoptimized
                  />
                ) : visual.phoneDemo ? (
                  <PhoneModelViewer />
                ) : (
                  <>
                    <div className="placeholder-grid" aria-hidden="true" />
                    <div className="placeholder-center">
                      <span className="placeholder-icon" aria-hidden="true">＋</span>
                      <strong>{visual.placeholder}</strong>
                    </div>
                  </>
                )}
              </div>
              <div className="automation-visual-copy">
                <div>
                  <span>{visual.group}</span>
                </div>
                <h3>{visual.title}</h3>
                <p>{visual.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="automation-section" id="automacoes">
        <div className="automation-copy" data-reveal="left">
          <p className="eyebrow">Atendimento inteligente</p>
          <h2>Uma IA que trabalha com você — ou assume o primeiro atendimento.</h2>
          <p>
            A automação pode colaborar com um atendente humano ou conduzir sozinha as
            primeiras etapas: entender o pedido, entregar informações, organizar dados
            e preparar tudo para a decisão da sua equipe.
          </p>
          <ul className="automation-list">
            {automationItems.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="video-card" data-reveal="right" data-reveal-delay="100">
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/988WhXZ2KkM"
              title="Demonstração de automação por Manoel Teófilo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-caption">
            <div>
              <span>Demonstração</span>
              <strong>Veja como funciona na prática</strong>
            </div>
            <a
              href="https://youtu.be/988WhXZ2KkM"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir demonstração no YouTube"
            >
              ↗
            </a>
          </div>
        </div>
      </section>

      <section className="services-section" id="servicos">
        <div className="section-heading services-heading" data-reveal="up">
          <div>
            <p className="eyebrow">O que posso construir</p>
            <h2>O digital a serviço do negócio real.</h2>
          </div>
          <p>
            Cada projeto começa com uma conversa sobre o que está consumindo tempo,
            travando vendas ou enfraquecendo a apresentação da empresa.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article
              key={service.title}
              data-reveal="scale"
              data-reveal-delay={(Number(service.number) % 3) * 70}
            >
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-intro" data-reveal="left">
          <p className="eyebrow">Sobre mim</p>
          <h2>Trabalho bem feito também é uma forma de servir pessoas.</h2>
          <figure className="about-portrait">
            <Image
              src="/about/manoel-teofilo.png"
              alt="Manoel Teófilo sorrindo, vestindo blazer azul"
              fill
              sizes="(max-width: 1050px) 100vw, 36vw"
              unoptimized
            />
          </figure>
        </div>
        <div className="about-body" data-reveal="right" data-reveal-delay="100">
          <p className="about-lead">
            Sou Manoel, jovem empreendedor cristão de Fortaleza. Quero potencializar
            negócios locais dos quais eu já sou — ou facilmente seria — cliente.
          </p>
          <p>
            Meu trabalho é construir a infraestrutura que ajuda essas empresas a serem
            mais eficientes, consumir menos tempo e facilitar a vida de quem administra,
            atende e compra. Gosto de entender o negócio de perto, por isso priorizo
            reuniões presenciais e uma relação direta durante todo o projeto.
          </p>
          <div className="experience-card">
            <div>
              <span>Experiência</span>
              <strong>10 meses de estágio em tecnologia na IMTS</strong>
            </div>
            <div>
              <span>Formação complementar</span>
              <strong>AI Fluency e Claude 101 · Anthropic</strong>
            </div>
            <div>
              <span>Ferramentas</span>
              <strong>n8n, JavaScript, HTML, CSS, APIs, Canva e Adobe</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div data-reveal="left">
          <p className="eyebrow">Fortaleza e Região Metropolitana</p>
          <h2>Vamos olhar para o seu negócio juntos?</h2>
          <p>
            Conte o que você quer melhorar. Se fizer sentido, marcamos uma conversa
            presencial e desenhamos o próximo passo.
          </p>
        </div>
        <div className="contact-actions" data-reveal="right" data-reveal-delay="100">
          <a
            className="button button-light"
            href="https://wa.me/5585994101646?text=Ol%C3%A1%2C%20Manoel!%20Quero%20marcar%20uma%20conversa%20sobre%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp · (85) 99410-1646 <span aria-hidden="true">↗</span>
          </a>
          <a className="email-link" href="mailto:manoelteofilo.contato@gmail.com">
            manoelteofilo.contato@gmail.com
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#inicio">
          <span>Manoel</span> Teófilo
        </a>
        <p>Sites &amp; Automações para negócios locais.</p>
        <div>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#automacoes">Automações</a>
          <a href="https://www.instagram.com/manelzimmm/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
