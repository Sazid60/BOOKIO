import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { InfinitySpin } from "react-loader-spinner";

const BookCollection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);  

    const { data: allBooks = [], isLoading, isError } = useQuery({
        queryKey: ['Books', searchTriggered ? searchTerm : '', selectedSubject, currentPage], 
        queryFn: async () => {
            let url = `https://gutendex.com/books?search=${searchTerm}&page=${currentPage}`;
            if (selectedSubject) {
                url += `&topic=${selectedSubject.toLowerCase()}`;  
            }
            const { data } = await axios.get(url);
            return data;
        },
        enabled: true,
    });

    const books = allBooks.results ? allBooks.results.slice(0, 8) : []; 

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
        setSearchTriggered(true);  
        setCurrentPage(1);  
    };

    const handleSearch = () => {
        setSearchTriggered(true);
        setCurrentPage(1); 
    };

    const handleNextPage = () => {
        if (allBooks.next) setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (allBooks.previous && currentPage > 1) setCurrentPage(prevPage => prevPage - 1);
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

    if (isError) return <p>Something went wrong...</p>;

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="flex">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search Books"
                        className="p-2 border border-black border-r-0 w-full"
                    />
                    <button
                        onClick={handleSearch}
                        className="p-2 bg-indigo-500 text-white md:w-1/4 hover:bg-violet-600"
                    >
                        Search
                    </button>
                </div>
                <select
                    value={selectedSubject}
                    onChange={handleSortChange}
                    className="p-2 border border-black w-full md:w-1/4"
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
                                    {truncateText(book?.title || " ", 7)}
                                </h1>
                                <p className="font-bold text-xs">Author : <span className="font-normal">
                                    {truncateText(book?.authors[0]?.name || " ", 4)}
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

            <div className="flex justify-between items-center mt-6 gap-4">
                <button
                    onClick={handlePreviousPage}
                    className={`p-2 ${!allBooks.previous && 'cursor-not-allowed opacity-50'} border border-black hover:text-violet-600`}
                    disabled={!allBooks.previous}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    className={`p-2 ${!allBooks.next && 'cursor-not-allowed opacity-50'} border border-black hover:text-violet-600 `}
                    disabled={!allBooks.next}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BookCollection;
