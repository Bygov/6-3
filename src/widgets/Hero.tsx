import { Button } from "../shared/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24"
    >
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <span className="mb-5 rounded-full bg-[#efe5dc] px-5 py-2 text-sm font-semibold text-[#70452e]">
          Lorem ipsum dolor
        </span>

        <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Lorem ipsum dolor sit amet consectetur
        </h1>

        <p className="mt-6 max-w-lg text-base leading-8 text-gray-500 sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatibus. Lorem ipsum dolor sit amet.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg">
            Lorem ipsum
          </Button>

          <Button variant="secondary" size="lg">
            Lorem ipsum
          </Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000"
          alt="Lorem ipsum"
          className="h-[350px] w-full rounded-3xl object-cover shadow-xl sm:h-[450px]"
        />

        <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-5 shadow-xl sm:-left-6">
          <p className="text-2xl font-black text-[#70452e]">Lorem</p>
          <p className="text-sm text-gray-500">Lorem ipsum dolor</p>
        </div>
      </div>
    </section>
  );
}
