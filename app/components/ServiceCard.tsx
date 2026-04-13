import Image from "next/image";

type ServiceCardProps = {
    title?: string;
    description?: string;
    ctaLabel?: string;
    icon?: string;
};

const ServiceCard = ({
    title,
    description,
    ctaLabel,
    icon,
}: ServiceCardProps) => {
    return (
        <article className="flex max-w-100 max-h-96 flex-col gap-6 bg-white px-[2.06rem] pt-[3.43rem] pb-[1.88rem] text-[#262626] shadow-[0_24px_60px_rgba(0,0,0,0.06)] border border-[#FAC4D2] hover:border-transparent rounded-lg transition-colors duration-200">
            <div className="relative flex h-20 w-20 items-center justify-center">
                <div className="relative flex h-14 w-12 items-center justify-center rounded-sm bg-white shadow-[0_8px_18px_rgba(31,61,90,0.16)]">
                    {icon ? (
                        <Image
                            src={icon}
                            alt=""
                            width={28}
                            height={28}
                            className="h-21 w-7 object-contain"
                        />
                    ) : null}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="w-[80%] text-[1.50rem] leading-[1.05] font-bold tracking-[-0.04em]">
                    {title}
                </h3>
                <p className="max-w-76 text-[0.875rem] leading-[1.28] text-black">
                    {description}
                </p>
            </div>

            <button className="rounded-full border border-[#FF4F7A] px-6 py-3 text-base font-medium text-[#FF4F7A] transition-colors duration-200 hover:bg-[#FF4F7A] hover:text-white">
                {ctaLabel}
            </button>
        </article>
    );
};

export default ServiceCard;
