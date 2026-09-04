import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Atendimento, automação e inteligência para imobiliárias que querem transformar cada conversa em oportunidade.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-400">Navegue</p>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            <Link href="/#recursos" className="hover:text-white">Recursos</Link>
            <Link href="/#integracoes" className="hover:text-white">Integrações</Link>
            <Link href="/#clientes" className="hover:text-white">Clientes</Link>
            <Link href="/contato" className="inline-flex items-center gap-1 hover:text-white">Contato <ArrowUpRight className="size-3.5" /></Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-400">Fale com a gente</p>
          <div className="mt-5 space-y-4 text-sm">
            <a href="mailto:contato@zimobi.com.br" className="flex items-center gap-3 hover:text-white">
              <Mail className="size-4 text-primary-400" /> contato@zimobi.com.br
            </a>
            <p className="flex items-start gap-3 leading-6">
              <MapPin className="mt-1 size-4 shrink-0 text-primary-400" />
              Av. Cândido de Abreu, 381<br />Centro Cívico, Curitiba — PR
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Zimobi. Todos os direitos reservados.</p>
          <p>Feito para quem move o mercado imobiliário.</p>
        </div>
      </div>
    </footer>
  );
}
