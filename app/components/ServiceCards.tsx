import ServiceCard from "./ServiceCard";

const serviceCards = [
    {
        title: "Manage Property Listings",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ctaLabel: "Read More",
        icon: "/manage-property.png",
    },
    {
        title: "Manage Customer Bookings",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        ctaLabel: "Read More",
        icon: "/bookings.png",
    },
    {
        title: "Schedule House Cleaning",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        ctaLabel: "Read More",
        icon: "/clean.png",
    },
    {
        title: "Monitor Guest Reviews",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        ctaLabel: "Read More",
        icon: "/reviews.png",
    },
    {
        title: "Track & Report Expenses",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        ctaLabel: "Read More",
        icon: "/expenses.png",
    },
    {
        title: "Guest Inquiry & Support",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        ctaLabel: "Read More",
        icon: "/support.png",
    },
];

const ServiceCards = () => {
    return (
        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-center text-[2rem] font-bold leading-9 tracking-tight text-black sm:text-4xl sm:leading-10 ">
                    Our <span className="text-[#ED3C6A]">Services</span>
                </h2>
                <p className="mx-auto mt-4 mb-[3.38rem] max-w-2xl text-center text-lg leading-6 text-gray-500">
                    We offer a wide range of services to help you manage your
                    property and provide an exceptional experience for your
                    guests.
                </p>
                <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3 xl:justify-items-stretch">
                    {serviceCards.map((card) => (
                        <ServiceCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            ctaLabel={card.ctaLabel}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
