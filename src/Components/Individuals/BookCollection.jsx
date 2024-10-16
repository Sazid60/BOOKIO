import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { InfinitySpin } from "react-loader-spinner";

const BookCollection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false); 

    const { data: allBooks = [], isLoading } = useQuery({
        queryKey: ['Books', searchTriggered ? searchTerm : ''], 
        queryFn: async () => {
            const { data } = await axios.get(`https://gutendex.com/books?search=${searchTerm}`);
            return data;
        },
        enabled: true, 
    });

    const books = allBooks.results;

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
        if (e.target.value === '') {
            setSearchTriggered(false);
        }
    };

    const handleSortChange = (e) => {
        setSelectedSubject(e.target.value);
    };

    const handleSearch = () => {
        setSearchTriggered(true);
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

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="flex">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search Books"
                        className="p-2 border border-black border-r-0 w-full "
                    />
                    <button
                        onClick={handleSearch}
                        className="p-2 bg-indigo-500 text-white md:w-1/4 hover:bg-indigo-600"
                    >
                        Search
                    </button>
                </div>
                <select
                    value={selectedSubject}
                    onChange={handleSortChange}
                    className="p-2 border border-black rounded-md w-full md:w-1/4"
                >
                    <option value="">All Subjects</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Biography">Biography</option>
                </select>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                {books?.map(book => (
                    <div key={book.id} className="font-caveat p-2 lg:p-4 border border-black">
                        <div className="text-center">
                            <div className="flex justify-center items-center">
                                <img
                                    src={book.formats["image/jpeg"]}
                                    alt={book?.title}
                                    className="w-[200px] h-[300px]"
                                />
                            </div>

                            <div className="h-14 flex flex-col justify-center">
                                <h1 className="font-bold text-sm mb-3">
                                    {truncateText(book?.title || " ", 2)}
                                </h1>
                                <p className="font-bold text-xs">Author : <span className="font-normal">
                                    {truncateText(book?.authors[0]?.name || " ", 3)}
                                </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3 text-xs">
                            <a href={book?.formats["text/html"]} target="_blank" rel="noopener noreferrer">
                                <button className="hover:underline hover:text-indigo-500">Read Book</button>
                            </a>
                            <button><FaRegHeart /></button>
                        </div>
                        <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCollection;
