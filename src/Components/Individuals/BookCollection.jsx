import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { handleSearchChange, handleSortChange, handleSearch, handleNextPage, handlePreviousPage } from './../../Functionalities/bookFunction';
import BookCard from "../Shared/BookCard";

const BookCollection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { data: allBooks = {}, isLoading, isError } = useQuery({
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

    const books = allBooks.results || [];

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
                        onChange={(e) => handleSearchChange(e, setSearchTerm, setSearchTriggered)}
                        placeholder="Search Books"
                        className="p-2 border border-black border-r-0 w-full"
                    />
                    <button
                        onClick={() => handleSearch(setSearchTriggered, setCurrentPage)}
                        className="p-2 bg-indigo-500 text-white md:w-1/4 hover:bg-violet-600"
                    >
                        Search
                    </button>
                </div>
                <select
                    value={selectedSubject}
                    onChange={(e) => handleSortChange(e, setSelectedSubject, setSearchTriggered, setCurrentPage)}
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
                {books.map(book => (
                    <BookCard key={book.id} book={book} />  
                ))}
            </div>

            <div className="flex justify-between items-center mt-6 gap-4">
                <button
                    onClick={() => handlePreviousPage(currentPage, setCurrentPage)}
                    className={`p-2 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''} border border-black hover:text-violet-600`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => handleNextPage(setCurrentPage, allBooks)}
                    className={`p-2 ${!allBooks.next ? 'cursor-not-allowed opacity-50' : ''} border border-black hover:text-violet-600`}
                    disabled={!allBooks.next}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BookCollection;
