import { useState } from "react";
import { MobileMenu } from "../features/MobileMenu";

const links = [
  { title: "Главная", href: "#home" },
  { title: "Преимущества", href: "#benefits" },
  { title: "Цены", href: "#pricing" },
  { title: "Контакты", href: "#contacts" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#faf8f5]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#home" className="text-2xl font-black text-[#70452e]">
          Coffee
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-[#70452e]"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <button className="hidden rounded-full bg-[#70452e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#583521] md:block">
          Lorem ipsum
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#e8ddd3] md:hidden"
        >
          <span className="h-0.5 w-5 bg-[#70452e]" />
          <span className="h-0.5 w-5 bg-[#70452e]" />
          <span className="h-0.5 w-5 bg-[#70452e]" />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
