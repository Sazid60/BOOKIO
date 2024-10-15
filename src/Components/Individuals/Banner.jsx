const Banner = () => {
    return (
        <div className="pb-6 lg:pb-14 flex flex-col justify-center items-center mt-6 md:mt-0">
            <div className=" max-w-7xl w-full px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center gap-3">
                <div className="flex flex-col space-y-4 max-w-md text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                        Discover <br />
                        <span className="text-indigo-500">The Best Books</span> <br /> Of All Day
                    </h1>
                    <p className="text-gray-500 text-base leading-relaxed">
                    Explore a vast collection of literature that spans genres and eras. Whether you&apos;re looking for timeless classics, gripping thrillers, or insightful non-fiction, our curated selection has something for every reader. Immerse yourself in stories that inspire, educate, and entertain.
                    </p>
                    <a href="#get-started" className="inline-block text-gray-800 border-b-2 border-gray-800 text-sm font-semibold pb-1">
                        GET STARTED →
                    </a>
                </div>
                <div className=" mt-4 lg:mt-0 lg:ml-8 mb-6">
                    <img src="/Banner-Image.png" alt="Books" className="" />
                    <div className=" text-sm italic text-gray-600 w-full text-left lg:text-right ">
                        &quot; Some books leave us free and some books make us free. &quot;
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
