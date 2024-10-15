import { FaRegHeart } from "react-icons/fa";

const fakeData = [
    {
        id: 1,
        title: "Frankenstein; Or, The Modern Prometheus",
        author: "Mary Wollstonecraft Shelley",
        genre: "Horror tales",
        imageUrl: "/Top-Book.png",
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian, Political Fiction",
        imageUrl: "/book-2.png", // Replace with actual image URL
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        imageUrl: "/book-2.png", // Replace with actual image URL
    },
    {
        id: 4,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        imageUrl: "/book-2.png", // Replace with actual image URL
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic",
        imageUrl: "/book-2.png", // Replace with actual image URL
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic",
        imageUrl: "/book-2.png", // Replace with actual image URL
    },
    {
        id: 8,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic",
        imageUrl: "/book-2.png", // Replace with actual image URL
    },
];

const TopSellingBooks = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="text-left mb-5">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Top Selling Books</h2>
                <p className="mt-2 text-sm md:text-lg">
                    Discover the latest works, interviews, and behind-the-scenes
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-start">
                {/* Left Card (Larger card on larger devices, same as right-side cards on small devices) */}
                <div className="w-full md:w-[40%] lg:w-[30%] md:sticky md:top-0">
                    <div className="font-caveat p-2 lg:p-4 border border-black">
                        <div className="text-center">
                            <img src={fakeData[0].imageUrl} alt={fakeData[0].title} />
                            <div className="h-20 flex flex-col justify-center">
                                <h1 className="font-bold text-sm">{fakeData[0].title}</h1>
                                <p className="font-bold text-xs">Author: <span className="font-normal">{fakeData[0].author}</span></p>
                                <p className="font-bold text-xs">Genre: <span className="font-normal">{fakeData[0].genre}</span></p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3 text-xs">
                            <button className="hover:underline hover:text-indigo-500">Read Book</button>
                            <button><FaRegHeart /></button>
                        </div>
                        <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">View Details</button>
                    </div>
                </div>

                {/* Right Cards (Smaller cards on large devices, same as left on small devices) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-6 gap-4 md:w-[60%] lg:w-[70%]">
                    {fakeData.slice(1).map(book => (
                        <div key={book.id} className="font-caveat p-2 lg:p-4 border border-black">
                            <div className="text-center">
                                <img src={book.imageUrl} alt={book.title} />
                                <div className="h-20 flex flex-col justify-center">
                                    <h1 className="font-bold text-sm">{book.title}</h1>
                                    <p className="font-bold text-xs">Author: <span className="font-normal">{book.author}</span></p>
                                    <p className="font-bold text-xs">Genre: <span className="font-normal">{book.genre}</span></p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-3 text-xs">
                                <button className="hover:underline hover:text-indigo-500">Read Book</button>
                                <button><FaRegHeart /></button>
                            </div>
                            <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">View Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopSellingBooks;
