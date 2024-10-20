import { useState } from 'react'
import { Route, Routes } from 'react-router'
import ViewData from './Components/ViewData/ViewData'
import AddData from './Components/AddData/AddData'
import Edit from './Components/Edit/Edit'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import BookDetails from './Components/ViewDetalis/ViewDetalis'

function App() {

  return (
    <>
 
   <Header />

      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/addbooksdata' element = {<AddData/>}/>

           <Route path="/view-books-data" element={ <ViewData />}/>
           <Route path="/Edit/:id" element={<Edit/>}/>
           <Route path='/view-details/:id' element={<BookDetails />} />

        </Routes>
    </>
  )
}

export default App
