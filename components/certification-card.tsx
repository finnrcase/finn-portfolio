import Image from "next/image";
import type { Certification } from "@/data/certifications";

export function CertificationCard({ item }: { item: Certification }) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-panel">
      <div className="flex h-48 items-center justify-center border-b border-line bg-[#f5f2ea] p-6 sm:h-52">
        <div className="relative h-full w-full max-w-64">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-contain"
            sizes="(min-width: 640px) 256px, 80vw"
          />
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h2 className="text-xl font-semibold tracking-normal">{item.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{item.issuer}</p>
      </div>
    </article>
  );
}
