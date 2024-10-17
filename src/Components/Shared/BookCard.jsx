import { FaRegHeart } from "react-icons/fa";


import { truncateText } from './../../Functionalities/bookFunction';


const BookCard = ({ book }) => {
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
            <button className="w-full text-center border border-black p-1 hover:text-indigo-500 text-xs">
                View Details
            </button>
        </div>
    );
};

export default BookCard;
