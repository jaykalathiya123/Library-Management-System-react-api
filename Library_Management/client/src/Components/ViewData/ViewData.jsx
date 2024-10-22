import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Booksimage from '../../assets/img/back-book';
import { DeleteAsync, GetDataAsync, SingleRecord } from '../../Services/Actions/BooksAction';
import { FiEdit, FiTrash } from 'react-icons/fi';

const categories = [
    "All", 
    "Fiction", 
    "Non-Fiction", 
    "Science", 
    "Biography", 
    "Physical Book", 
    "Horror Books", 
    "Comedy Books", 
    "Hindu Books", 
    "Movie Magazine", 
    "Category Book"
]; 

const ViewData = () => {
    const { Books } = useSelector(state => state.Bookreducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleView = (id) => {
        navigate(`/view-details/${id}`);
    };

    const handleEdit = (id) => {
        dispatch(SingleRecord(id));
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        dispatch(DeleteAsync(id));
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    useEffect(() => {
        dispatch(GetDataAsync());
    }, [dispatch]);

    const filteredBooks = selectedCategory === "All" ? Books : Books.filter(book => book.genre === selectedCategory);

    return (
      <div className="container mx-auto p-6 min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="mb-6">
          <label
            htmlFor="category"
            className="text-gray-900 text-lg font-semibold"
          >
            Select Category:{" "}
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="ml-2 p-2 rounded-lg bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBooks.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={Booksimage}
                alt={data.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {data.title}
                </h1>
                <p className="text-gray-600 text-center mb-4">
                  Author: <span className="text-gray-800">{data.author}</span>
                </p>
                <p className="text-gray-600 text-center mb-4">
                  Genre: <span className="text-gray-800">{data.genre}</span>
                </p>
                <p className="text-gray-600 text-center mb-4">
                  Year: <span className="text-gray-800">{data.year}</span>
                </p>

                <div className="flex justify-around mt-4 space-x-2">
                  <button
                    className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-full hover:from-teal-500 hover:to-green-400 transition duration-200 flex items-center"
                    onClick={() => handleView(data.id)}
                  >
                    View
                  </button>

                  <button
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full hover:from-orange-500 hover:to-yellow-400 transition duration-200 flex items-center"
                    onClick={() => handleEdit(data.id)}
                  >
                    <FiEdit className="mr-1" />
                    Edit
                  </button>

                  <button
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-red-500 transition duration-200 flex items-center"
                    onClick={() => handleDelete(data.id)}
                  >
                    <FiTrash className="mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ViewData;
