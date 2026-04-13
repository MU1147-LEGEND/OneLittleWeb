import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Pricing", link: "/pricing" },
        { name: "Blog", link: "/blog" },
        { name: "Resources", link: "/resources" },
    ];
    return (
        <header className="bg-white text-black shadow-[0_4px_62px_0_rgba(250,196,210,0.63)] h-22.25 flex items-center justify-between px-4 md:px-8 lg:px-25">
            <div className="text-2xl font-bold">
                <Image
                    height={200}
                    width={200}
                    src="/Google-Logo.svg"
                    alt="logo"
                    className="w-[7.8rem] h-[2.8rem]"
                />
            </div>
            <nav className="hidden md:flex items-center gap-6">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className="group flex flex-col items-start"
                    >
                        <a
                            href={item.link}
                            className="transition-colors duration-200 group-hover:text-[#ED3C6A] text-lg"
                        >
                            {item.name}
                        </a>
                        <span className="mt-1 h-0.5 w-full origin-left scale-x-0 bg-[#ED3C6A] transition-transform duration-200 group-hover:scale-x-100"></span>
                    </div>
                ))}
            </nav>
            <div>
                <button className="bg-[#ED3C6A] px-6 py-4 text-white hover:bg-[#ED3C6A]/90 cursor-pointer flex items-center gap-2 rounded-md transition-colors duration-200">
                    Schedule A Meeting <ArrowRight />{" "}
                </button>
            </div>
        </header>
    );
};
export default Header;
