const AuthorOfTheMonth = () => {
    return (
        <div className="bg-[url('/Promo-BG.jpg')] bg-cover bg-no-repeat bg-fixed">
            <div className="container mx-auto p-5">
                <div className="text-left mb-5">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Author Of The Month</h2>
                    <p className="mt-2 text-sm md:text-lg">
                        Discover the latest works, interviews, and behind-the-scenes
                    </p>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-10">
                    <div className="space-y-8">
                        <div>
                            <img
                                src="/Author-Sign.png"
                                alt="Author Signature"
                                className="filter invert"
                            />
                            <p className="mt-2 text-gray-700 text-sm">Thomas Dietrich is an acclaimed author known for his thought-provoking and gripping novels that explore complex themes of human nature, society, and morality. </p>
                        </div>
                        <p className="mt-2 text-gray-700 text-sm">Books by Thomas Dietrich:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <img className="hover:scale-105 transform transition-transform duration-8000 ease-in-out" src="/A-Book-1.jpg" alt="Book 1 by Thomas Dietrich" />
                            <img className="hover:scale-105 transform transition-transform duration-8000 ease-in-out" src="/A-Book-2.jpg" alt="Book 2 by Thomas Dietrich" />
                            <img className="hover:scale-105 transform transition-transform duration-8000 ease-in-out" src="/A-Book-3.jpg" alt="Book 3 by Thomas Dietrich" />
                            <img className="hover:scale-105 transform transition-transform duration-8000 ease-in-out" src="/A-Book-4.jpg" alt="Book 4 by Thomas Dietrich" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/Author.png"
                            alt="Thomas Dietrich"
                            className="grayscale hover:grayscale-0 transition-all duration-900"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthorOfTheMonth;
