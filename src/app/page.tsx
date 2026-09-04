import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Inbox,
  Instagram,
  MessageCircle,
  Network,
  Play,
  RefreshCw,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  WalletCards,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: Bot,
    title: "Clara IA",
    text: "Responde, qualifica, busca imóveis e encaminha cada conversa para o setor certo, 24 horas por dia.",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    icon: Route,
    title: "Distribuição inteligente",
    text: "Roleta, plantão por horários, corretor angariador e redistribuição automática para nenhum lead parar.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    icon: Inbox,
    title: "Inbox compartilhado",
    text: "Um único número, vários atendentes e todo o histórico disponível para a equipe, sem perda de contexto.",
    accent: "bg-sky-50 text-sky-600",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    text: "Acompanhe origem, tempo de resposta, conversão e desempenho por atendente em dashboards claros.",
    accent: "bg-primary-50 text-primary-600",
  },
  {
    icon: RefreshCw,
    title: "Portais e CRM conectados",
    text: "Receba leads de portais e mantenha seu CRM atualizado automaticamente, sem cadastros duplicados.",
    accent: "bg-rose-50 text-rose-600",
  },
  {
    icon: WalletCards,
    title: "Serviços automatizados",
    text: "Envie segunda via de boletos e extratos financeiros diretamente na conversa pelo WhatsApp.",
    accent: "bg-cyan-50 text-cyan-600",
  },
];

const claraCapabilities = [
  {
    icon: Building2,
    title: "Busca imóveis",
    text: "Encontra opções compatíveis com o perfil e o interesse de cada cliente.",
  },
  {
    icon: WalletCards,
    title: "Resolve solicitações",
    text: "Responde dúvidas e envia boletos e extratos financeiros na conversa.",
  },
  {
    icon: MessageCircle,
    title: "Entende cada mensagem",
    text: "Interpreta textos, áudios, imagens e links enviados pelo contato.",
  },
  {
    icon: Route,
    title: "Direciona para especialistas",
    text: "Identifica quando é preciso atendimento humano e aciona o setor certo.",
  },
];

const steps = [
  {
    number: "01",
    icon: Network,
    title: "O lead chega",
    text: "WhatsApp, portais, site e Meta Ads convergem para um único painel.",
  },
  {
    number: "02",
    icon: Bot,
    title: "A IA responde",
    text: "O primeiro contato acontece em segundos, mesmo fora do horário comercial.",
  },
  {
    number: "03",
    icon: Route,
    title: "A Zimobi distribui",
    text: "Cada conversa chega ao profissional certo, seguindo as regras da operação.",
  },
  {
    number: "04",
    icon: Gauge,
    title: "Você acompanha",
    text: "Indicadores revelam gargalos, produtividade e oportunidades em tempo real.",
  },
];

const testimonials = [
  {
    quote:
      "Passamos a atender todos os clientes por um único número de WhatsApp, mesmo com vários atendentes. Todo o histórico ficou centralizado.",
    name: "Leonardo Baggio",
    role: "Baggio Imóveis",
    initials: "LB",
  },
  {
    quote:
      "O chatbot e a IA mudaram nossa rotina. Agora conseguimos atender fora do horário comercial e dar respostas rápidas sem depender 100% dos atendentes.",
    name: "João Felipe Motter Gottschild",
    role: "Razão Imobiliária",
    initials: "JG",
  },
  {
    quote:
      "A distribuição de leads ficou muito mais justa e rápida. Cada atendimento chega para o corretor certo, no momento certo.",
    name: "Esthfani Meira",
    role: "Fênix Imóveis",
    initials: "EM",
  },
];

function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-primary-300/30 blur-3xl" />
      <div className="glass-card overflow-hidden rounded-[1.75rem] border-white/80 p-2 shadow-2xl shadow-slate-900/15">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-300" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-primary-300" />
          <div className="ml-3 h-6 flex-1 rounded-full bg-slate-50" />
        </div>
        <div className="grid min-h-[370px] grid-cols-[64px_1fr] bg-white sm:grid-cols-[150px_1fr]">
          <aside className="border-r border-slate-100 p-3">
            <div className="mb-5 flex size-9 items-center justify-center rounded-xl bg-primary-500">
              <MessageCircle className="size-4 text-primary-foreground" />
            </div>
            <div className="space-y-2">
              {["Inbox", "Contatos", "Relatórios"].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-lg p-2 text-[10px] font-semibold ${index === 0 ? "bg-primary-50 text-primary-800" : "text-slate-400"}`}
                >
                  {index === 0 ? (
                    <Inbox className="size-3.5" />
                  ) : index === 1 ? (
                    <UsersRound className="size-3.5" />
                  ) : (
                    <BarChart3 className="size-3.5" />
                  )}
                  <span className="hidden sm:inline">{item}</span>
                </div>
              ))}
            </div>
          </aside>
          <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
            <div className="hidden border-r border-slate-100 p-3 sm:block">
              <p className="mb-3 text-[10px] font-bold text-slate-900">
                Conversas{" "}
                <span className="ml-1 rounded-full bg-primary-100 px-1.5 py-0.5 text-primary-700">
                  12
                </span>
              </p>
              {[
                ["MC", "Marina Costa", "Quero visitar o imóvel"],
                ["RL", "Rafael Lima", "Qual o valor do condomínio?"],
                ["AS", "Ana Souza", "Obrigada pelo retorno!"],
              ].map((chat, index) => (
                <div
                  key={chat[1]}
                  className={`mb-2 rounded-xl p-2.5 ${index === 0 ? "bg-slate-50" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-slate-900 text-[8px] font-bold text-white">
                      {chat[0]}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[9px] font-bold">{chat[1]}</p>
                      <p className="truncate text-[8px] text-slate-400">
                        {chat[2]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col bg-slate-50/50 p-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
                  MC
                </span>
                <div>
                  <p className="text-[10px] font-bold">Marina Costa</p>
                  <p className="text-[8px] text-primary-600">online agora</p>
                </div>
                <span className="ml-auto rounded-full bg-violet-50 px-2 py-1 text-[8px] font-bold text-violet-600">
                  IA ativa
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-end gap-2 py-4">
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white p-3 text-[9px] leading-4 shadow-sm">
                  Olá! Vi o apartamento no Água Verde. Ainda está disponível?
                </div>
                <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-primary-500 p-3 text-[9px] leading-4 text-primary-foreground">
                  Olá, Marina! Está sim. Encontrei mais 2 opções parecidas para
                  você. Quer agendar uma visita?
                </div>
                <div className="flex items-center gap-1 text-[8px] font-medium text-violet-500">
                  <Sparkles className="size-3" /> Respondido pela IA em 0s
                </div>
              </div>
              <div className="flex items-center rounded-xl bg-white p-2 shadow-sm">
                <span className="text-[9px] text-slate-400">
                  Digite sua mensagem...
                </span>
                <span className="ml-auto flex size-7 items-center justify-center rounded-lg bg-primary-500">
                  <Send className="size-3 text-primary-foreground" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate-float absolute -bottom-6 -left-3 hidden rounded-2xl border border-white bg-white p-3 shadow-xl sm:flex sm:items-center sm:gap-3">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
          <Zap className="size-4" />
        </span>
        <div>
          <p className="text-[9px] text-slate-400">Tempo de resposta</p>
          <p className="text-sm font-bold text-slate-900">0 segundos</p>
        </div>
      </div>
      <div
        className="animate-float absolute -right-3 top-16 hidden rounded-2xl border border-white bg-white p-3 shadow-xl sm:flex sm:items-center sm:gap-3"
        style={{ animationDelay: "1s" }}
      >
        <CheckCircle2 className="size-8 text-primary-500" />
        <div>
          <p className="text-[9px] text-slate-400">Novo lead</p>
          <p className="text-xs font-bold text-slate-900">
            Distribuído com sucesso
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
        <div className="grid-fade absolute inset-0 -z-20" />
        <div className="animate-pulse-soft absolute -left-32 top-0 -z-10 size-[430px] rounded-full bg-primary-200/50 blur-3xl" />
        <div className="container-shell grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-primary-800 shadow-sm">
              IA + ecossistema imobiliário
            </div>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-6xl ">
              Plataforma de atendimento com IA para{" "}
              <span className="text-primary-500">imobiliárias</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Centralize canais, distribua leads, organize sua operação e conte
              com IA para atender 24/7, tudo em um só lugar!
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contato">
                  Quero conhecer a Zimobi <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#solucao">
                  <Play className="size-4 fill-slate-800" /> Ver como funciona
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
              {["WhatsApp API Oficial"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ProductMockup />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-400 md:text-left">
            Conectada ao ecossistema imobiliário de ponta
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-base font-bold text-slate-400">
            <span>ZAP+</span>
            <span>Viva Real</span>
            <span className="flex items-center gap-1">
              <span className="rounded bg-orange-500 px-1.5 py-0.5 text-xs text-white">
                olx
              </span>
            </span>
            <span>Vista</span>
            <span>Universal</span>
            <span>Properfy</span>
          </div>
        </div>
      </section>

      <section id="solucao" className="py-24 lg:py-32">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="section-label">Uma operação conectada</span>
            <h2 className="text-balance mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Do primeiro “olá” até a conversão, sem deixar ninguém para trás.
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-11 hidden border-t border-dashed border-primary-300 lg:block" />
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.08}
                className="relative"
              >
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-slate-900/5">
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                    <step.icon className="size-5" />
                  </div>
                  <span className="mt-6 block text-xs font-bold text-primary-600">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="bg-[#120831] py-24 text-white lg:py-32">
        <div className="container-shell">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="section-label !text-primary-400">
                Mais que um chatbot
              </span>
              <h2 className="text-balance mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                Uma plataforma inteira trabalhando pela sua equipe.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Tecnologia que reduz tarefas repetitivas, organiza a operação e
              devolve tempo para seus corretores venderem.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <article className="group h-full rounded-3xl border border-primary/30 bg-white/[0.045] p-7 transition-all hover:border-primary-400/30 hover:bg-white/[0.075]">
                  <div
                    className={`flex size-11 items-center justify-center rounded-2xl ${feature.accent}`}
                  >
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="mt-7 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.text}
                  </p>
                  <span className="mt-6 flex items-center gap-1 text-xs font-bold text-primary-400 opacity-0 transition-opacity group-hover:opacity-100">
                    Saiba mais <ChevronRight className="size-3.5" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="clara-ia"
        className="relative overflow-hidden bg-primary-50 py-24 lg:py-32"
      >
        <div className="absolute -right-32 -top-32 size-96 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="container-shell relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-x-[7%] bottom-0 top-[12%] rounded-[2.5rem] bg-linear-to-b from-primary-100 to-primary-200/80 shadow-2xl shadow-primary-900/10" />
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary-300/25 blur-3xl" />
            <Image
              src="/images/clara-ia-personagem.png"
              alt="Clara, assistente de inteligência artificial da Zimobi"
              width={911}
              height={1080}
              sizes="(min-width: 1024px) 42vw, (min-width: 640px) 32rem, 100vw"
              className="relative z-10 h-auto w-full"
            />
            <div className="absolute bottom-6 left-3 z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:bottom-10 sm:left-6">
              <p className="flex items-center gap-2 text-xs font-bold text-slate-950">
                <span className="size-2 rounded-full bg-primary-500" />
                Clara IA disponível
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Atendimento imobiliário 24/7
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <span className="section-label">IA para Imobiliárias</span>
            <h2 className="text-balance mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Clara IA
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              A Clara atua na primeira camada do atendimento pelo WhatsApp.
              Recebe leads, clientes e locatários, entende o que cada pessoa
              precisa e avança a conversa antes mesmo do contato humano.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {claraCapabilities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-primary-100 bg-white/80 p-5 shadow-sm"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <item.icon className="size-4.5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <Button asChild size="lg" className="mt-9">
              <Link href="/contato">
                Quero conhecer a Clara <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section
        id="integracoes"
        className="overflow-hidden bg-white py-24 lg:py-32"
      >
        <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="section-label">Integrações de verdade</span>
            <h2 className="text-balance mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              Seu ecossistema continua. A{" "}
              <span className="text-primary">Zimobi</span> conecta tudo.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Os leads chegam dos principais portais e campanhas. O histórico, a
              origem e o imóvel de interesse seguem para o CRM que sua equipe já
              usa.
            </p>
            <ul className="mt-8 space-y-4 text-sm font-semibold text-slate-700">
              {[
                "Captação automática de portais e Meta Ads",
                "Integrações com CRM's",
                "Dados sincronizados, sem retrabalho ou cadastro duplicado",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary-100">
                    <Check className="size-3.5 text-primary-700" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="dark" className="mt-9">
              <Link href="/contato">
                Conversar com um especialista <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative mx-auto aspect-square max-w-[520px]">
              <div className="absolute inset-[16%] rounded-full border border-dashed border-primary-300" />
              <div className="absolute inset-[32%] rounded-full border border-primary-100 bg-primary-50 shadow-[0_0_80px_color-mix(in_oklab,var(--color-primary)_20%,transparent)]" />
              <div className="absolute inset-[39%] flex items-center justify-center">
                <Image
                  src="/images/logo-zimobi-roxo.png"
                  alt="Logo roxo da Zimobi"
                  width={100}
                  height={100}
                />
              </div>
              {[
                {
                  label: "WhatsApp",
                  icon: MessageCircle,
                  pos: "left-[3%] top-[42%]",
                },
                {
                  label: "Portais",
                  icon: Building2,
                  pos: "right-[3%] top-[42%]",
                },
                {
                  label: "Meta Ads",
                  icon: Instagram,
                  pos: "left-[24%] top-[6%]",
                },
                {
                  label: "Seu CRM",
                  icon: RefreshCw,
                  pos: "right-[24%] bottom-[6%]",
                },
                { label: "Site", icon: Network, pos: "left-[24%] bottom-[6%]" },
                {
                  label: "Equipe",
                  icon: UsersRound,
                  pos: "right-[24%] top-[6%]",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`absolute ${item.pos} flex size-20 flex-col items-center justify-center gap-1 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/8`}
                >
                  <item.icon className="size-5 text-primary-600" />
                  <span className="text-[10px] font-bold text-slate-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-400 py-20 text-primary-foreground">
        <div className="container-shell grid gap-10 text-center md:grid-cols-3">
          {[
            ["0s", "para iniciar uma conversa"],
            ["24/7", "de atendimento com IA"],
            ["1 painel", "para toda a sua operação"],
          ].map(([value, label], index) => (
            <Reveal key={value} delay={index * 0.08}>
              <p className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
                {value}
              </p>
              <p className="mt-3 text-sm font-semibold text-primary-foreground/70">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="clientes" className="py-24 lg:py-32">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-label">Quem usa, recomenda</span>
            <h2 className="text-balance mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              Resultados que aparecem na rotina.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="size-4 fill-[#FABB05] text-[#FABB05]"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-6 flex-1 text-base leading-8 text-slate-700">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <span className="flex size-10 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white sm:px-12 lg:py-20">
              <div className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/20 blur-3xl" />
              <div className="relative mx-auto max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-primary-300">
                  <ShieldCheck className="size-3.5" /> Seu próximo lead pode
                  chegar agora
                </span>
                <h2 className="text-balance mt-6 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                  Pronto para transformar seu atendimento?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
                  Descubra como a Zimobi se adapta à operação da sua imobiliária
                  em uma demonstração personalizada.
                </p>
                <Button asChild size="lg" className="mt-9">
                  <Link href="/contato">
                    Agendar demonstração <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
