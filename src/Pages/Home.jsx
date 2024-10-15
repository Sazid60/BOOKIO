import AuthorOfTheMonth from "../Components/Individuals/AuthorOfTheMonth";
import Banner from "../Components/Individuals/Banner";
import FeaturesSection from "../Components/Individuals/FeaturesSection";
import NewsAndArticles from "../Components/Individuals/NewsAndArticles";
import PromoSection from "../Components/Individuals/PromoSection";
import TopSellingBooks from "../Components/Individuals/TopSellingBooks";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { InfinitySpin } from "react-loader-spinner";


const Home = () => {
    // const { data: allBooks = [], isLoading } = useQuery({
    //     queryKey: ['allBooks'],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`https://gutendex.com/books/`)
    //         return data
    //     },
    // })

    // if (isLoading) return (
    //     <div className="min-h-screen flex justify-center items-center">
    //       <InfinitySpin
    //         visible={true}
    //         height="80"
    //         width="80"
    //         ariaLabel="hourglass-loading"
    //         wrapperStyle={{}}
    //         wrapperClass=""
    //         colors={['#6366F1','#6366F1']}
    //       />
    //     </div>
    //   );
      
    // console.log(allBooks.results)

    return (
        <div>
            <div className="pt-20 md:pt-28 bg-[url('/banner-bg.jpg')] bg-cover bg-no-repeat bg-fixed">
                <Banner />
            </div>
            <TopSellingBooks />
            <FeaturesSection />
            <PromoSection />

            <AuthorOfTheMonth />
            <NewsAndArticles />
        </div>
    );
};

export default Home;