import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";


export default function RootLayout() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return (
        <>
            <MainNavigation />
            <div className="">
                <Outlet />
            </div>
            <AboutUs />
            <Footer />
        </>
    )
}
