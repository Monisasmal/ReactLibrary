import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
// import App from './App';
import { AppProvider } from './context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookList from './Component/BookList/Booklist';
import BookDetails from './Component/BookDetails/BookDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home />}>
      <Route path='about' element = {<About/>}/>
      <Route  path='book' element = {<BookList/>}/>
      <Route path='/book/:id' element ={<BookDetails/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </AppProvider>
);

