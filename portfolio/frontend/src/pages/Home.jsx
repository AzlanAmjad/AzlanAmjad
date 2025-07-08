import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";

// Divider uses Tailwind and assumes bg-lightBlue is defined in tailwind.config.js or index.css
function Divider() {
    return (
        <div className="flex justify-center my-10">
            <div className="h-1 w-48 rounded-full bg-[#008DD5] shadow-lg" />
        </div>
    );
}

function Home() {
    return (
        <div>
            <HeroSection />
            <Divider />
            <Highlights />
        </div>
    );
}

export default Home;
