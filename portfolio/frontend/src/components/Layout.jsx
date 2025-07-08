import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col justify-between min-h-screen font-cormorantGaramond bg-night text-white bg-gradient-to-b from-night via-[#0a0a11] to-[#101018]">
            <NavBar />
            <main className="p-14 mt-16 sm:mt-28">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
