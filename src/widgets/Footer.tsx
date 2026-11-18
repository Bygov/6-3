const footerColumns = [
  {
    title: "Lorem ipsum",
    links: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    title: "Lorem ipsum",
    links: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    title: "Lorem ipsum",
    links: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    title: "Lorem ipsum",
    links: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
];

export function Footer() {
  return (
    <footer id="contacts" className="bg-[#29231f] px-5 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-5 text-2xl font-black">Coffee.</h2>
            <p className="max-w-xs text-sm leading-7 text-white/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="mb-5 font-bold">{column.title}</h3>

              <div className="flex flex-col gap-4">
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#home"
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2026 Lorem ipsum dolor sit amet.
        </div>
      </div>
    </footer>
  );
}
