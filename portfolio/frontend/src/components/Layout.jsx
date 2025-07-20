import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="relative flex flex-col justify-between min-h-screen font-cormorantGaramond bg-night text-white overflow-hidden">
            <NavBar />
            <main className="p-14 mt-16 sm:mt-28 relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
