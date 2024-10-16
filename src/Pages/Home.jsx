import AuthorOfTheMonth from "../Components/Individuals/AuthorOfTheMonth";
import Banner from "../Components/Individuals/Banner";
import FeaturesSection from "../Components/Individuals/FeaturesSection";
import NewsAndArticles from "../Components/Individuals/NewsAndArticles";
import PromoSection from "../Components/Individuals/PromoSection";
import TopSellingBooks from "../Components/Individuals/TopSellingBooks";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Home = () => {
    const { data: allBooks = [], isLoading } = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const { data } = await axios.get(`https://gutendex.com/books/`)
            return data
        },
    })


    // console.log(allBooks.results)
    const books = allBooks.results

    return (
        <div>
            <div className="pt-20 md:pt-28 bg-[url('/banner-bg.jpg')] bg-cover bg-no-repeat bg-fixed">
                <Banner />
            </div>
            <div className="container mx-auto p-5">
                <div className="text-left mb-5">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Top Selling Books</h2>
                    <p className="mt-2 text-sm md:text-lg">
                        Discover the latest works, interviews, and behind-the-scenes
                    </p>
                </div>
                <TopSellingBooks books={books} isLoading={isLoading} />
            </div>

            <FeaturesSection />
            <PromoSection />

            <AuthorOfTheMonth />
            <NewsAndArticles />
        </div>
    );
};

export default Home;