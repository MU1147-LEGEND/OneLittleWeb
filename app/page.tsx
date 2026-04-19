import CompanyLogos from "./components/CompanyLogos";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import ServiceCards from "./components/ServiceCards";

export default function Home() {
    return (
        <Container>
            <Header />
            <Hero />
            <CompanyLogos />
            <ServiceCards />
            <PricingSection />
        </Container>
    );
}
