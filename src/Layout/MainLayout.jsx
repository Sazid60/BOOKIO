import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="min-h-screen font-playfair">
            <div className="">
                <div className="h-16 md:h-20 fixed z-10 w-full">
                    <Navbar />
                </div>
            </div>
            <div className=" ">
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