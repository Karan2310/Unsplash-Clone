import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import { API_KEY } from "./config.js";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 30;

  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = startIndex + pageSize;
  let totalData = totalPages * pageSize;

  const getAllImages = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=30`
      );
      startIndex = (currentPage - 1) * pageSize;
      endIndex = startIndex + pageSize;
      setImages(data);
      setTotalPages(Math.ceil(data.length / pageSize));
      console.log("Clicked");
      console.log(data);
    } catch (err) {
      console.log(err);
      alert(`${err.response.data} - Error from unsplash API`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllImages();
  }, [currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {isLoading ? <Loading /> : <Gallery images={images} />}

      {/* <Pagination /> */}
      <div class="flex flex-col items-center mb-10">
        <span class="text-sm text-gray-700 ">
          Showing <span class="font-semibold text-gray-900 ">{startIndex}</span>{" "}
          to <span class="font-semibold text-gray-900 ">{endIndex}</span> of{" "}
          <span class="font-semibold text-gray-900 ">
            {totalData * currentPage}
          </span>{" "}
          Entries
        </span>

        <div class="inline-flex mt-2 xs:mt-0">
          <button
            class="px-10 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700  disabled:opacity-80 disabled:cursor-not-allowed"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            class="px-10 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 disabled:opacity-80 disabled:cursor-not-allowed "
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
