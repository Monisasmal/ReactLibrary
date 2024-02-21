import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Loading  from '../Loader/Loader';
import coverImg from '../../images/Cover-Notfound.jpg';
import './BookDetails.css';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const URL = "https://openlibrary.org/works/";


const BookDetails = () => {
  const {id} = useParams();
  const[loading, setLoading] = useState(false);
  const[book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if(data){
          const{description,title,covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description Found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            // subject_places: subject_places ? subject_places.join(", ") : "No Subject places Found",
            // subject_times: subject_times ? subject_times.join(", ") : "No Subject Time Found",
            // subjects: subjects ? subjects.join(", ") : "No Subject Found"
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        }else{
          setBook(null);
        }
         setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);
  // console.log(book);
  if(loading) return <Loading />

  return (
    <section className="bookdetails">
      <div className="container">
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
        <IoMdArrowRoundBack  size={25}/>
        <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className="book-details-content grid">
          <div className="book-details-image">
            <img  src= {book?.cover_img} alt='coverimage'/>
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="book-details-item description">
            <span className="fw-6">Description: </span>
              <span>{book?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject Places: </span>
              <span className="text-italic">{book?.subject_places}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject Time: </span>
              <span className="text-italic">{book?.subject_times}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default BookDetails