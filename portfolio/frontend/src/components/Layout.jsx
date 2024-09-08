import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col justify-between min-h-screen font-cormorantGaramond bg-night text-white">
            <NavBar />
            <main className="p-14 mt-16 sm:mt-28">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
