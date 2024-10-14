import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Banner from "../Components/Individuals/Banner";


const MainLayout = () => {
    return (
        <div className="min-h-screen font-playfair">
            <div className="bg-[url('/banner-bg.jpg')] bg-cover bg-no-repeat bg-fixed">
                <div className="h-16 md:h-20 fixed z-10 w-full">
                    <Navbar />
                </div>
                <div className="pt-20 md:pt-28">
                    <Banner />
                </div>
            </div>
            <div className="container mx-auto ">
                <div className="min-h-[calc(100vh-321px)]">
                    <Outlet />
                </div>
            </div>
            <Footer className="bg-white" />
            <Toaster position="top-center" reverseOrder={false} />
        </div>

    );
};

export default MainLayout;