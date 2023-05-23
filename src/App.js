import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import { API_KEY } from "./config.js";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [infinitePage, setInfinitePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 30;

  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = startIndex + pageSize;

  const galleryRef = useRef(null);

  const getAllImages = async (page) => {
    setIsLoading(true);
    let res = [];
    try {
      if (searchQuery) {
        const encodedQuery = encodeURIComponent(searchQuery);
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?query=${encodedQuery}&client_id=${API_KEY}&page=${page}`
        );
        res = data.results;
      } else {
        const { data } = await axios.get(
          `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=30&page=${page}`
        );
        res = data;
      }

      if (page === 1 || !isMobile) {
        setImages(res);
      } else {
        setImages((prevImages) => [...prevImages, ...res]);
      }

      setTotalPages(Math.ceil(res.length / pageSize));
      startIndex = (currentPage - 1) * pageSize;
      endIndex = startIndex + pageSize;
    } catch (err) {
      console.log(err);
      alert(`${err.response.data} - Error from Unsplash API`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllImages(currentPage);
  }, [currentPage, searchQuery]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // For Mobile Infinite scroll
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight &&
        isMobile
      ) {
        setInfinitePage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && infinitePage > 1) {
      getAllImages(infinitePage);
    }
  }, [infinitePage]);

  useEffect(() => {
    if (galleryRef.current) {
      // Scroll to the last position after gallery re-renders
      galleryRef.current.scrollTop = galleryRef.current.scrollHeight;
    }
  }, [images]);

  return (
    <div className="App">
      <Navbar setSearchQuery={setSearchQuery} />
      <Hero setSearchQuery={setSearchQuery} />
      <div ref={galleryRef}>
        <Gallery images={images} />
      </div>

      {isLoading && <Loading />}

      {/* <Pagination /> */}
      {!isMobile && (
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex mt-2 xs:mt-0">
            <button
              className="px-10 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700  disabled:opacity-80 disabled:cursor-not-allowed"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="px-10 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 disabled:opacity-80 disabled:cursor-not-allowed "
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
