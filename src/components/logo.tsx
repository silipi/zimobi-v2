import Link from "next/link";
import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex w-28 items-center sm:w-32"
      aria-label="Zimobi - início"
    >
      <Image
        src="/images/logo-zimobi.png"
        alt="Zimobi"
        width={1272}
        height={276}
        sizes="(min-width: 640px) 8rem, 7rem"
        className={`h-auto w-full ${light ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
