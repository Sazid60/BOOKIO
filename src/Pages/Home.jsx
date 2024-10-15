import Banner from "../Components/Individuals/Banner";
import FeaturesSection from "../Components/Individuals/FeaturesSection";
import NewsAndArticles from "../Components/Individuals/NewsAndArticles";
import PromoSection from "../Components/Individuals/PromoSection";


const Home = () => {
    return (
        <div>
            <div className="pt-20 md:pt-28 bg-[url('/banner-bg.jpg')] bg-cover bg-no-repeat bg-fixed">
                <Banner />
            </div>
            <FeaturesSection />
            <PromoSection />
            <NewsAndArticles/>
        </div>
    );
};

export default Home;