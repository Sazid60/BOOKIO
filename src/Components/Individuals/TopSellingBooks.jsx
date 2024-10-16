import { FaRegHeart } from "react-icons/fa";
import { InfinitySpin } from "react-loader-spinner";



const TopSellingBooks = ({ books, isLoading }) => {
    
    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '.';
        }
        return text;
    };

    if (isLoading) return (
        <div className="flex justify-center items-center">
            <InfinitySpin
                visible={true}
                height="100"
                width="100"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#6366F1', '#6366F1']}
            />
        </div>
    );

    const reversedBooks = books.slice().reverse(); 

    return (
        <div className="flex flex-col md:flex-row gap-3 items-start">
           
            {reversedBooks.length > 0 && (
                <div className="w-full md:w-[40%] lg:w-[30%] md:sticky md:top-0">
                    <div className="font-caveat p-2 lg:p-4 border border-black">
                        <div className="text-center">
                            <div className="flex justify-center items-center">
                                <img src={reversedBooks[0].formats["image/jpeg"]} alt={reversedBooks[0].title} />
                            </div>
                            <div className="h-14 lg:mt-3 flex flex-col justify-center">
                                <h1 className="font-bold text-sm md:text-lg mb-3">
                                    {truncateText(reversedBooks[0].title, 2)} 
                                </h1>
                                <p className="font-bold text-xs">Author : <span className="font-normal">
                                    {truncateText(reversedBooks[0].authors[0].name, 3)}
                                </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3 text-xs">
                            <a href={reversedBooks[0].formats["text/html"]} target="_blank"><button className="hover:underline hover:text-indigo-500">Read Book</button></a>
                            <button><FaRegHeart /></button>
                        </div>
                        <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">View Details</button>
                    </div>
                </div>
            )}

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-6 gap-4 w-full md:w-[60%] lg:w-[70%]">
                {reversedBooks.slice(1, 7).map(book => (
                    <div key={book.id} className="font-caveat p-2 lg:p-4 border border-black">
                        <div className="text-center">
                            <div className="flex justify-center items-center">
                                <img src={book.formats["image/jpeg"]} alt={book.title} />
                            </div>

                            <div className="h-14 flex flex-col justify-center">
                                <h1 className="font-bold text-sm mb-3">
                                    {truncateText(book.title, 2)} 
                                </h1>
                                <p className="font-bold text-xs">Author : <span className="font-normal">
                                    {truncateText(book.authors[0].name, 3)} 
                                </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3 text-xs">
                            <a href={book.formats["text/html"]} target="_blank"><button className="hover:underline hover:text-indigo-500">Read Book</button></a>
                            <button><FaRegHeart /></button>
                        </div>
                        <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSellingBooks;
