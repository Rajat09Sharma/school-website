


import ContactUs from "../component/ContactUs";
import DisplaySection from "../component/DisplaySection";
import Features from "../component/Features";
import HomeCarousel from "../component/HomeCarousel";
import SchoolIntro from "../component/SchoolIntro";


export default function HomePage() {
    return (
        <section id="home">
            <HomeCarousel />
            <DisplaySection />
            <SchoolIntro />
            <Features />
            <ContactUs />
        </section>
    )
}
