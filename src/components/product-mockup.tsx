import Image from "next/image";

export function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] lg:max-w-none">
      <div className="pointer-events-none absolute inset-[-12%] -z-10 rounded-full bg-primary-300/35 blur-3xl" />

      <div className="relative">
        <div className="relative ml-[10%] w-[96%] sm:ml-[12%] sm:w-[108%]">
          <Image
            src="/images/laptop.png"
            alt="Painel da Zimobi aberto no laptop"
            width={2685}
            height={1547}
            priority
            sizes="(min-width: 1024px) 50vw, 92vw"
            className="h-auto w-full drop-shadow-[0_30px_55px_rgba(15,23,42,0.16)]"
          />
        </div>

        <div
          className="absolute top-0 left-0 z-10 h-full"
          style={{ aspectRatio: "1495 / 2779" }}
        >
          <Image
            src="/images/smartphone.png"
            alt="Aplicativo da Zimobi no smartphone"
            fill
            priority
            sizes="(min-width: 1024px) 16vw, 38vw"
            className="object-contain object-top-left drop-shadow-[0_24px_40px_rgba(15,23,42,0.2)]"
          />
        </div>
      </div>
    </div>
  );
}
