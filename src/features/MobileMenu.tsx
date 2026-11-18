interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { title: "Главная", href: "#home" },
  { title: "Преимущества", href: "#benefits" },
  { title: "Цены", href: "#pricing" },
  { title: "Контакты", href: "#contacts" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav className="absolute left-0 top-full z-50 w-full bg-white p-6 shadow-lg md:hidden">
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-gray-700 transition hover:text-[#70452e]"
          >
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
