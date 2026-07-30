import Link from "next/link";
import { primaryCta } from "@/config/navigation";
import type { SolutionBlock } from "@/types";

function SolutionRow({
  block,
  index,
  defaultOpen,
}: {
  block: SolutionBlock;
  index: number;
  defaultOpen: boolean;
}) {
  return (
    <details className="group py-5" open={defaultOpen}>
      <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-strong md:grid-cols-12 md:gap-x-6">
        <span
          aria-hidden="true"
          className="font-serif text-base text-accent md:col-span-1"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent-strong md:col-span-5">
          {block.title}
        </span>
        <span
          aria-hidden="true"
          className="row-start-1 self-center justify-self-end font-serif text-2xl text-accent transition-transform duration-200 group-open:rotate-45 md:col-span-1 md:col-start-12"
        >
          +
        </span>
        <span className="col-start-2 text-sm leading-relaxed text-muted md:col-span-5 md:col-start-7 md:row-start-1">
          {block.summary}
        </span>
      </summary>

      <div className="mt-5 md:grid md:grid-cols-12 md:gap-x-6">
        <div className="rounded-card border border-border bg-surface p-6 md:col-span-11 md:col-start-2 md:p-8">
          <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
            <p>{block.problem}</p>
            <p>{block.action}</p>
            <ul className="space-y-1 text-sm">
              {block.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="border-l-2 border-accent pl-4 font-serif text-lg italic text-foreground">
              {block.result}
            </p>
            <p>
              <Link
                href={primaryCta.href}
                className="text-sm font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                {primaryCta.label}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

export default function SolutionAccordion({
  items,
  className = "",
}: {
  items: SolutionBlock[];
  className?: string;
}) {
  return (
    <div className={`divide-y divide-border ${className}`}>
      {items.map((block, index) => (
        <SolutionRow
          key={block.id}
          block={block}
          index={index}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}
