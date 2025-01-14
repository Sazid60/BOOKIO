import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { truncateText } from './../../Functionalities/bookFunction';
import { getWishlistedBooks, saveWishlistedBooks, toggleBookInWishlist } from '../../Functionalities/localStorageUtil';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        const wishlistedBooks = getWishlistedBooks();
        const updatedBooks = toggleBookInWishlist(book, wishlistedBooks);


        saveWishlistedBooks(updatedBooks);


        setIsWishlisted(updatedBooks.some(wishlistedBook => wishlistedBook.id === book.id));


        toast.success(isWishlisted ? `Book removed from wishlist!` : `Book added to wishlist!`);
    };

    useEffect(() => {
        const wishlistedBooks = getWishlistedBooks();
        const isInWishlist = wishlistedBooks.some(wishlistedBook => wishlistedBook.id === book.id);
        setIsWishlisted(isInWishlist);
    }, [book.id]);

    const authorName = truncateText(book?.authors[0]?.name || "Unknown Author", 4);
    const genre = truncateText(book?.subjects[0] || "Unknown Genre", 3);
    const id = book?.id;

    return (
        <div className="font-caveat p-2 lg:p-4 border border-black">
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
                        {truncateText(book?.title || "Unknown Title", 7)}
                    </h1>
                    <p className="font-bold text-xs">
                        Author: <span className="font-normal">{authorName}</span>
                    </p>
                </div>
                <p className="font-bold text-xs">
                    Genre: <span className="font-normal">{genre}</span>
                </p>
                <p className="font-bold text-xs">
                    ID: <span className="font-normal">{id}</span>
                </p>
            </div>
            <div className="flex justify-between items-center mb-3 text-xs">
                <a href={book?.formats["text/html"]} target="_blank" rel="noopener noreferrer">
                    <button className="hover:underline hover:text-indigo-500">Read Book</button>
                </a>
                <button onClick={toggleWishlist} aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}>
                    {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                </button>
            </div>
            <Link to={`/book-details/${book.id}`}>
                <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">
                    View Details
                </button>
            </Link>

        </div>
    );
};

export default BookCard;
