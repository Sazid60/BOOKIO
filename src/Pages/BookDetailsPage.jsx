import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { getWishlistedBooks, saveWishlistedBooks, toggleBookInWishlist } from '../Functionalities/localStorageUtil';
import toast from 'react-hot-toast';
import { useLoaderData } from "react-router-dom";

const BookDetailsPage = () => {
    const book = useLoaderData();
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

    return (
        <div className="pt-24" style={{ scrollMarginTop: '200px' }}>
            <div className="font-sans p-4 max-w-4xl mx-auto bg-white border ">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="flex justify-center items-center w-full md:w-1/3">
                        <img
                            src={book.formats["image/jpeg"]}
                            alt={book?.title}
                            className="w-[250px] h-[350px] object-cover  shadow-2xl "
                        />
                    </div>
                    <div className="w-full md:w-2/3 font-caveat">
                        <h1 className="text-2xl font-bold mb-3">{book?.title || "Unknown Title"}</h1>
                        <p className="text-gray-700 text-sm mb-2">
                            <span className="font-bold">Author :</span> {book?.authors[0]?.name}
                        </p>
                        <p className="text-gray-600 text-sm mb-4"><span className="font-bold">Genre : </span> {book?.subjects}</p>
                        <p className="text-gray-600 text-sm mb-4"><span className="font-bold">ID : </span> {book?.id}</p>
                        <a
                            href={book?.formats["text/html"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-indigo-600 hover:underline mb-4"
                        >
                            Read Book
                        </a>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleWishlist}
                                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                                className="focus:outline-none"
                            >
                                {isWishlisted ? (
                                    <FaHeart className="text-red-500 text-xl" />
                                ) : (
                                    <FaRegHeart className="text-xl" />
                                )}
                            </button>
                            <span className="text-sm text-gray-600">
                                {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
