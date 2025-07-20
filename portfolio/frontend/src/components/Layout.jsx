import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/next"

function Layout() {
    return (
        <div className="relative flex flex-col justify-between min-h-screen font-cormorantGaramond bg-night text-white overflow-hidden">
            <Analytics />
            <NavBar />
            <main className="p-14 mt-16 sm:mt-28 relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
