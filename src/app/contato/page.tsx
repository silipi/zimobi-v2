import type { Metadata } from "next";
import { ArrowLeft, Bot, Clock3, Mail, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Agende uma demonstração",
  description: "Converse com um especialista e veja como a Zimobi pode transformar o atendimento da sua imobiliária.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      <div className="grid-fade absolute inset-0 -z-20" />
      <div className="absolute -left-40 top-10 -z-10 size-[500px] rounded-full bg-primary-200/50 blur-3xl" />
      <div className="container-shell">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950"><ArrowLeft className="size-4" /> Voltar para o início</Link>
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="section-label">Vamos conversar</span>
            <h1 className="text-balance mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">Veja a Zimobi funcionando na sua realidade.</h1>
            <p className="mt-6 text-base leading-8 text-slate-600">Conte um pouco sobre a sua operação. Um especialista vai mostrar como centralizar canais, distribuir leads e acelerar o atendimento da sua imobiliária.</p>
            <div className="mt-9 space-y-4">
              {[
                { icon: Clock3, text: "Demonstração personalizada para sua operação" },
                { icon: Bot, text: "Conheça os fluxos de atendimento com IA" },
                { icon: ShieldCheck, text: "Sem compromisso e sem cartão de crédito" },
              ].map((item) => <div key={item.text} className="flex items-center gap-3 text-sm font-semibold text-slate-700"><span className="flex size-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700"><item.icon className="size-4" /></span>{item.text}</div>)}
            </div>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Prefere contato direto?</p>
              <a href="mailto:contato@zimobi.com.br" className="mt-4 flex items-center gap-3 text-sm font-semibold text-slate-800 hover:text-primary-700"><Mail className="size-4 text-primary-600" /> contato@zimobi.com.br</a>
              <p className="mt-4 flex items-start gap-3 text-sm leading-6 text-slate-600"><MapPin className="mt-1 size-4 shrink-0 text-primary-600" /> Av. Cândido de Abreu, 381 — Centro Cívico, Curitiba — PR</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
