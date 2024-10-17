import { useEffect, useState } from "react";
import BookCard from "../Components/Shared/BookCard"; 

const Wishlist = () => {
    const [wishlistedBooks, setWishlistedBooks] = useState([]);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlistedBooks')) || [];
        setWishlistedBooks(savedWishlist);
    }, [wishlistedBooks]);

    if (wishlistedBooks.length === 0) return (
        <div className="flex justify-center items-center pt-24 px-5">
            <p>No books in your wishlist.</p>
        </div>
    );

    return (
        <div className="w-full pt-24 container mx-auto px-5">
            <h1 className="text-2xl font-bold mb-4">Wishlisted Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                {wishlistedBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
