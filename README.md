# Bookio

## Live Website
You can visit the live version of the website here: [Bookio Live Website](https://bookio-lake.vercel.app/)

## Overview
Bookio is an online platform that offers a comprehensive collection of books where users can browse, sort, search, and read books directly through the web. The platform features a Wishlist functionality using local storage, allowing users to add or remove books from their Wishlist. The website is responsive and designed to provide a seamless experience across different devices.

## Features
- **Book Collection**: Explore a large collection of books sorted by category and topic.
- **Search Functionality**: Users can search for books by title, author, or category.
- **Wishlist**: Add or remove books from the Wishlist by clicking the heart icon. Wishlist data is stored locally.
- **Read Book**: Users can read books by clicking the "Read Book" button, which opens the web version of the book.
- **View Book Details**: Users can view detailed information about the books by clicking on the "View Details" button.
- **Explore All Books**: A dedicated page to explore all available books in the collection.

## Pages & Sections
- **Home Page**: 
  - Contains the book collection and top-selling sections.
  - Users can browse books and add them to their Wishlist.
  
- **Explore All Books**: 
  - This page shows all the books available in the collection.
  - Users can search and sort books by category and topic.

- **Book Details Page**:
  - Displays detailed information about the selected book.
  - Users can add or remove the book from their Wishlist and read it directly on the website.

- **Wishlist Page**: 
  - Displays all books added to the Wishlist using local storage.
  
## Technologies Used
- **React.js**: Frontend framework used to build interactive UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling the website.
- **Local Storage**: Used for managing the Wishlist feature.
- **React Router**: For navigation between pages (Book details, Wishlist, etc.).
- **React Icons**: For displaying icons like heart icons for Wishlist functionality.
- **React Hot Toast**: For showing success notifications when adding or removing books from the Wishlist.
- **React Loader Spinner**: Shows when the data is loading.

## Instructions for Running the Project Locally
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd bookio`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open the app in your browser

### Note:
There is a known issue where the data may take longer than usual to load. Please be patient and wait for the data to appear. Thank you for your understanding.
