"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100";
const selectClass = `${inputClass} appearance-none`;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const lines = [
      "Olá, time Zimobi! Gostaria de agendar uma demonstração.",
      "",
      `Nome: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Telefone: ${data.get("phone")}`,
      `Site: ${data.get("website") || "Não informado"}`,
      `Equipe: ${data.get("team")}`,
      `Leads/mês: ${data.get("leads")}`,
      `Segmento: ${data.get("segment")}`,
    ];

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.location.href = `mailto:marketing@zimobi.com.br?subject=${encodeURIComponent("Demonstração Zimobi")}&body=${encodeURIComponent(lines.join("\n"))}`;
    }, 450);
  }

  if (sent) {
    return (
      <div className="flex min-h-[540px] flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
          <CheckCircle2 className="size-8" />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-slate-950">
          Solicitação preparada!
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
          Abrimos seu aplicativo de e-mail com os dados preenchidos. É só
          revisar e enviar.
        </p>
        <Button
          variant="outline"
          className="mt-7"
          onClick={() => setSent(false)}
        >
          Enviar outra solicitação
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          Nome completo*
          <input
            className={inputClass}
            name="name"
            required
            autoComplete="name"
            placeholder="Como podemos te chamar?"
          />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          E-mail profissional*
          <input
            className={inputClass}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="voce@imobiliaria.com.br"
          />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Telefone*
          <input
            className={inputClass}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(41) 99999-9999"
          />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Site da imobiliária
          <input
            className={inputClass}
            name="website"
            type="url"
            placeholder="https://suaimobiliaria.com.br"
          />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Tamanho da equipe*
          <select className={selectClass} name="team" required defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            <option>Até 4 pessoas</option>
            <option>5 a 15 pessoas</option>
            <option>16 a 30 pessoas</option>
            <option>Mais de 30 pessoas</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Leads recebidos por mês*
          <select className={selectClass} name="leads" required defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            <option>Até 149</option>
            <option>150 a 299</option>
            <option>300 a 499</option>
            <option>500 a 999</option>
            <option>Acima de 1.000</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Segmento*
          <select
            className={selectClass}
            name="segment"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            <option>Imobiliária</option>
            <option>Corretor autônomo</option>
            <option>Incorporadora</option>
            <option>Outro segmento</option>
          </select>
        </label>
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-7 w-full"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Preparando...
          </>
        ) : (
          <>
            Agendar demonstração <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
        Ao continuar, seu aplicativo de e-mail será aberto com os dados acima.
        Nenhum dado é armazenado neste site.
      </p>
    </form>
  );
}
