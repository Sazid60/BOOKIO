import { FaRegHeart, FaHeart } from "react-icons/fa";
import { InfinitySpin } from "react-loader-spinner";
import { truncateText } from './../../Functionalities/bookFunction';
import { useEffect, useState } from "react";
import { getWishlistedBooks, saveWishlistedBooks, toggleBookInWishlist } from './../../Functionalities/localStorageUtil';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TopSellingBooks = ({ books, isLoading }) => {
    const [wishlistedBooks, setWishlistedBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getWishlistedBooks();
        setWishlistedBooks(storedBooks);
    }, []);

    const handleToggleWishlist = (book) => {
        const updatedBooks = toggleBookInWishlist(book, wishlistedBooks);
        setWishlistedBooks(updatedBooks);
        saveWishlistedBooks(updatedBooks);


        const message = updatedBooks.some(wishlistedBook => wishlistedBook.id === book.id)
            ? `Book added to wishlist!`
            : `Book removed from wishlist!`;
        toast.success(message);
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
                            <div className="h-20 lg:mt-3 flex flex-col justify-center">
                                <h1 className="font-bold text-sm md:text-lg mb-3">
                                    {truncateText(reversedBooks[0].title, 3)}
                                </h1>
                                <p className="font-bold text-xs">Author : <span className="font-normal">
                                    {truncateText(reversedBooks[0].authors[0].name, 3)}
                                </span></p>
                                <p className="font-bold text-xs">
                                    Genre: <span className="font-normal">{truncateText(reversedBooks[0].subjects.join(', '), 4)}</span>
                                </p>
                                <p className="font-bold text-xs">
                                    ID: <span className="font-normal">{reversedBooks[0].id}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3 text-xs">
                            <a href={reversedBooks[0].formats["text/html"]} target="_blank" rel="noopener noreferrer">
                                <button className="hover:underline hover:text-indigo-500">Read Book</button>
                            </a>
                            <button onClick={() => handleToggleWishlist(reversedBooks[0])} aria-label={wishlistedBooks.some(wishlistedBook => wishlistedBook.id === reversedBooks[0].id) ? "Remove from wishlist" : "Add to wishlist"}>
                                {wishlistedBooks.some(wishlistedBook => wishlistedBook.id === reversedBooks[0].id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                            </button>
                        </div>
                        <Link to={`/book-details/${reversedBooks[0].id}`}>
                            <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">
                                View Details
                            </button>
                        </Link>
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
                            <div className="h-24 flex flex-col justify-center">
                                <h1 className="font-bold text-sm mb-3">
                                    {truncateText(book.title, 2)}
                                </h1>
                                <p className="font-bold text-xs">Author : <span className="font-normal">
                                    {truncateText(book.authors[0].name, 3)}
                                </span></p>
                                <p className="font-bold text-xs">
                                    Genre: <span className="font-normal">{truncateText(book.subjects.join(', '), 2)}</span>
                                </p>
                                <p className="font-bold text-xs">
                                    ID: <span className="font-normal">{book.id}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3 text-xs">
                            <a href={book.formats["text/html"]} target="_blank" rel="noopener noreferrer">
                                <button className="hover:underline hover:text-violet-600">Read Book</button>
                            </a>
                            <button onClick={() => handleToggleWishlist(book)} aria-label={wishlistedBooks.some(wishlistedBook => wishlistedBook.id === book.id) ? "Remove from wishlist" : "Add to wishlist"}>
                                {wishlistedBooks.some(wishlistedBook => wishlistedBook.id === book.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                            </button>
                        </div>
                        <Link to={`/book-details/${book.id}`}>
                            <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSellingBooks;
