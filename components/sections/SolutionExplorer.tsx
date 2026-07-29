"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { SolutionBlock } from "@/types";

interface SolutionExplorerProps {
  groupId: string;
  items: SolutionBlock[];
  /** Accordion rendered on small screens, passed from the server page. */
  children: React.ReactNode;
}

export default function SolutionExplorer({
  groupId,
  items,
  children,
}: SolutionExplorerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = items[selectedIndex];

  function selectAndFocus(index: number) {
    setSelectedIndex(index);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const lastIndex = items.length - 1;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectAndFocus(selectedIndex === lastIndex ? 0 : selectedIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectAndFocus(selectedIndex === 0 ? lastIndex : selectedIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectAndFocus(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectAndFocus(lastIndex);
    }
  }

  return (
    <>
      <div className="lg:hidden">{children}</div>

      <div className="mt-8 hidden lg:grid lg:grid-cols-12 lg:gap-10">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Soluciones del grupo"
          onKeyDown={handleKeyDown}
          className="lg:col-span-4"
        >
          {items.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={item.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`${groupId}-tab-${item.id}`}
                aria-selected={isSelected}
                aria-controls={`${groupId}-panel-${item.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedIndex(index)}
                className={`flex w-full items-baseline gap-4 border-l-2 py-3.5 pl-4 pr-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${
                  isSelected
                    ? "border-accent bg-surface"
                    : "border-border hover:border-accent hover:bg-surface/60"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`font-serif text-sm ${
                    isSelected ? "text-accent-strong" : "text-accent"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif text-lg leading-snug ${
                    isSelected ? "text-accent-strong" : "text-foreground"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8">
          <div
            key={selected.id}
            role="tabpanel"
            id={`${groupId}-panel-${selected.id}`}
            aria-labelledby={`${groupId}-tab-${selected.id}`}
            tabIndex={0}
            className="animate-panel sticky top-28 rounded-card border border-border bg-surface p-8 shadow-sm"
          >
            <h3 className="font-serif text-2xl">{selected.title}</h3>
            <p className="mt-2 text-sm text-muted">{selected.summary}</p>

            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>{selected.problem}</p>
              <p>{selected.action}</p>
              <ul className="space-y-1 text-sm">
                {selected.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="border-l-2 border-accent pl-4 font-serif text-lg italic text-foreground">
                {selected.result}
              </p>
              <p>
                <Link
                  href="/contacto"
                  className="text-sm font-medium text-accent-strong underline-offset-4 hover:underline"
                >
                  Cuéntanos tu caso
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
