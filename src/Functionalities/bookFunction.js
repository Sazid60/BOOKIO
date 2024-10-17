
export const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '' : text;
};

export const handleSearchChange = (e, setSearchTerm, setSearchTriggered) => {
    setSearchTerm(e.target.value.toLowerCase());
    if (e.target.value === '') {
        setSearchTriggered(false);
    }
};


export const handleSortChange = (e, setSelectedSubject, setSearchTriggered, setCurrentPage) => {
    setSelectedSubject(e.target.value);
    setSearchTriggered(true);
    setCurrentPage(1);
};


export const handleSearch = (setSearchTriggered, setCurrentPage) => {
    setSearchTriggered(true);
    setCurrentPage(1);
};


export const handleNextPage = (setCurrentPage, allBooks) => {
    if (allBooks.next) {
        setCurrentPage((prevPage) => prevPage + 1);
    }
};


export const handlePreviousPage = (currentPage, setCurrentPage) => {
    if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
    }
};
