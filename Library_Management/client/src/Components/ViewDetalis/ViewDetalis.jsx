import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { singledataAsync } from '../../Services/Actions/BooksAction';

const BookDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams(); 
    const { Book } = useSelector(state => state.Bookreducer);

    useEffect(() => {
        dispatch(singledataAsync(id));
    }, [dispatch, id]);

    if (!Book) {
        return <div>Loading...</div>;
    }

return (
<div className="bg-gray-100 min-h-screen py-10">
  <div className="max-w-xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 hover:from-blue-600 hover:to-purple-700 transition-colors duration-300">
    <h1 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
      <i className="fas fa-book"></i> {Book.title}
    </h1>
    <div className="text-left text-white">
      <h4 className="text-lg mb-1 flex items-center gap-2">
        <i className="fas fa-user"></i> Author: <span className="text-blue-200 hover:text-white transition-colors duration-300">{Book.author}</span>
      </h4>
      <h4 className="text-lg mb-1 flex items-center gap-2">
        <i className="fas fa-bookmark"></i> Genre: <span className="text-blue-200 hover:text-white transition-colors duration-300">{Book.genre}</span>
      </h4>
      <h4 className="text-lg mb-1 flex items-center gap-2">
        <i className="fas fa-calendar"></i> Year: <span className="text-blue-200 hover:text-white transition-colors duration-300">{Book.year}</span>
      </h4>
    </div>
    <p className="text-white mt-4 text-left hover:text-blue-200 transition-colors duration-300">{Book.description}</p>
  </div>
</div>

);
 
};

export default BookDetails;
