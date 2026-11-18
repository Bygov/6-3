import { Button } from "../shared/ui/Button";

const plans = [
  {
    name: "Lorem",
    price: "10",
    description: "Lorem ipsum dolor sit amet.",
    popular: false,
  },
  {
    name: "Lorem",
    price: "20",
    description: "Lorem ipsum dolor sit amet.",
    popular: true,
  },
  {
    name: "Lorem",
    price: "30",
    description: "Lorem ipsum dolor sit amet.",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold text-[#70452e]">
            Lorem ipsum
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-[#70452e] bg-[#70452e] text-white shadow-2xl md:scale-105"
                  : "border-[#eee5dc] bg-white text-[#29231f]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#d6b28c] px-5 py-2 text-xs font-bold text-[#3c281b]">
                  Популярный
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className={`mt-3 text-sm ${
                plan.popular ? "text-white/70" : "text-gray-500"
              }`}>
                {plan.description}
              </p>

              <div className="my-8">
                <span className="text-5xl font-black">
                  {plan.price}
                </span>
                <span className="ml-2 text-sm opacity-70">
                  Lorem ipsum
                </span>
              </div>

              <div className="mb-8 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm">
                    <span>✓</span>
                    Lorem ipsum dolor sit amet
                  </p>
                ))}
              </div>

              <Button
                variant={plan.popular ? "secondary" : "primary"}
                className={`w-full ${
                  plan.popular
                    ? "border-white bg-white text-[#70452e] hover:bg-[#f0e7df]"
                    : ""
                }`}
                size="lg"
              >
                Lorem ipsum
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
