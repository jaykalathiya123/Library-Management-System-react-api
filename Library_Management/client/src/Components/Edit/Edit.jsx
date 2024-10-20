

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateRecordAsync } from '../../Services/Actions/BooksAction';



const Edit = () => {

    const {Books} = useSelector(state => state.Bookreducer)

    const {id} = useParams();

    const [updateinput, setUpdateinput] = useState({Books})


 

    let navigate = useNavigate();



    const handleFormInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUpdateinput({ ...updateinput, [name]: value });

    }


    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateRecordAsync(updateinput)); 
        navigate('/view-books-data');
    };  
    

    useEffect(() => {
        if (Books.length > 0) {
            const bookToEdit = Books.find(book => book.id === id);
            setUpdateinput(bookToEdit);
        }
    }, [Books, id]);
    
    

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Library Management System Update
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            hidden
            name="id"
            value={updateinput.id}
            onChange={handleFormInput}
          />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-200"
              type="text"
              id="title"
              name="title"
              value={updateinput.title}
              onChange={handleFormInput}
              placeholder="Enter book title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-200"
              type="text"
              id="author"
              name="author"
              value={updateinput.author}
              onChange={handleFormInput}
              placeholder="Enter author's name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="genre"
            >
              Genre
            </label>
            <input
              className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-200"
              type="text"
              id="genre"
              name="genre"
              value={updateinput.genre}
              onChange={handleFormInput}
              placeholder="Enter book genre"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="year"
            >
              Year
            </label>
            <input
              className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-200"
              type="number"
              id="year"
              name="year"
              value={updateinput.year}
              onChange={handleFormInput}
              placeholder="Enter publication year"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Update Books
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;