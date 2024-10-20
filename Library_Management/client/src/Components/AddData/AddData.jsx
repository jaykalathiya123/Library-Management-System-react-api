import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { AddDataPostAsync } from '../../Services/Actions/BooksAction';

const AddData = () => {
    const [forminput, setForminput] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setForminput({ ...forminput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddDataPostAsync(forminput));
        navigate('/view-books-data');

        setForminput({
            id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
        })
    };

return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
    <div className="bg-green-300 p-10 rounded-xl shadow-2xl max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Library Management System
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          hidden
          name="id"
          value={forminput.id}
          onChange={handleFormInput}
        />

        <div className="mb-6">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200 transition"
            type="text"
            id="title"
            name="title"
            value={forminput.title}
            onChange={handleFormInput}
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200 transition"
            type="text"
            id="author"
            name="author"
            value={forminput.author}
            onChange={handleFormInput}
            placeholder="Enter author's name"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="genre"
          >
            Genre
          </label>
          <input
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200 transition"
            type="text"
            id="genre"
            name="genre"
            value={forminput.genre}
            onChange={handleFormInput}
            placeholder="Enter book genre"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <input
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-200 transition"
            type="number"
            id="year"
            name="year"
            value={forminput.year}
            onChange={handleFormInput}
            placeholder="Enter publication year"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-blue-600 hover:from-blue-600 hover:to-teal-400 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Add Book
        </button>
      </form>
    </div>
  </div>
);

};

export default AddData;
