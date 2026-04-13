import CompanyLogos from "./components/CompanyLogos";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
    return (
        <Container>
            <Header />
            <Hero />
            <CompanyLogos />
        </Container>
    );
}
