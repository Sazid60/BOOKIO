
export const getWishlistedBooks = () => {
    return JSON.parse(localStorage.getItem('wishlistedBooks')) || [];
};

export const saveWishlistedBooks = (books) => {
    localStorage.setItem('wishlistedBooks', JSON.stringify(books));
};

export const toggleBookInWishlist = (book, wishlistedBooks) => {
    const updatedBooks = [...wishlistedBooks];
    const bookIndex = updatedBooks.findIndex(wishlistedBook => wishlistedBook.id === book.id);

    if (bookIndex !== -1) {
        // Remove from wishlist
        updatedBooks.splice(bookIndex, 1);
    } else {
        // Add to wishlist
        updatedBooks.push(book);
    }

    return updatedBooks;
};
