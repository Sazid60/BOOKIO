import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <div className="h-16 md:h-20 ">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-321px)]">
                <Outlet />
            </div>
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default MainLayout;