

const NewsAndArticles = () => {
    const articles = [
        {
            id: 1,
            title: "How To Become A Book Writer",
            image: "/news-1.jpg",
            excerpt: "Writing a book can be a transformative journey, allowing you to express your thoughts and ideas to a wider audience. This article explores the essential steps to start your writing journey.",
        },
        {
            id: 2,
            title: "7 Books To Fight Laziness",
            image: "/news-2.jpg",
            excerpt: "If you find yourself struggling with procrastination and lack of motivation, these seven books can help. Each title offers valuable insights and practical strategies to boost your productivity.",
        },
        {
            id: 3,
            title: "Jenny's Latest Book Club Pick",
            image: "/news-3.jpg",
            excerpt: "Join Jenny as she reveals her latest pick for the book club! This month, she explores a gripping novel that delves into themes of friendship, betrayal, and redemption. Read about the author’s inspiration.",
        }
    ];

    return (
        <div className="container mx-auto p-5">
            <div className="text-left mb-5">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">News &amp; Article</h2>
                <p className="mt-2 text-sm md:text-lg">Stay updated with the latest news and insightful articles in the world of literature.</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                {articles.map(article => (
                    <div key={article.id} className="bg-white overflow-hidden border border-black group">
                        <div className="">
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-2 md:p-4">
                            <h3 className="text-sm md:text-lg lg:text-xl font-semibold">{article.title}</h3>
                            <p className="mt-2 text-gray-700 text-sm">{article.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsAndArticles;
