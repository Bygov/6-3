interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="rounded-2xl border border-[#eee5dc] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f4ece5] text-3xl">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-bold">{title}</h3>

      <p className="leading-7 text-gray-500">{description}</p>
    </div>
  );
}
