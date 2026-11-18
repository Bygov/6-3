interface BenefitCardProps {
    title: string;
    description: string;
}

export function BenefitCard({
    title,
    description
}: BenefitCardProps) {
    return (
        <article className="rounded-2xl border border-[#eee5dc] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-[#29231f]">
                {title}
            </h3>

            <p className="leading-7 text-gray-500">
                {description}
            </p>
        </article>
    );
}