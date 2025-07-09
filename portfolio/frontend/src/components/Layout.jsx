import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Flare from "./Flare";

function Layout() {
    return (
        <div className="relative flex flex-col justify-between min-h-screen font-cormorantGaramond bg-night text-white overflow-hidden">
            <Flare className="w-56 h-40 left-[20%] top-[28%] bg-lightBlue blur-3xl z-0" />
            <Flare className="w-44 h-32 left-[60%] top-[60%] bg-lightBlue blur-3xl z-0" />
            <NavBar />
            <main className="p-14 mt-16 sm:mt-28 relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
