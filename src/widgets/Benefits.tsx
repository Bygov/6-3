import { BenefitCard } from "../entities/BenefitCard";

const benefits = [
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-[#f2ece5] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold text-[#70452e]">
            Lorem ipsum
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
