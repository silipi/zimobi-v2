"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#solucao", label: "Solução" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/#clara-ia", label: "Clara IA" },
  { href: "/#integracoes", label: "Integrações" },
  { href: "/#clientes", label: "Clientes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="container-shell glass-card flex h-16 items-center justify-between rounded-2xl px-5">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contato">Agendar demonstração <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>
        <button
          className="flex size-10 items-center justify-center rounded-full bg-slate-100 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="container-shell glass-card mt-2 rounded-2xl p-4 md:hidden">
          <nav className="flex flex-col" aria-label="Navegação mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-50">
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <Link href="/contato" onClick={() => setOpen(false)}>Agendar demonstração</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
