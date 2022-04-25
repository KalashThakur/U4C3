import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Grid = styled.div`
 /* add required style here */
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: auto;
 width: 60%;
 margin: auto;
 grid-gap: 10px;
`;

export const Div = styled.div`
  border: 1px solid black;
`

const Books = () => {
  const [data, setData] = useState([]);

  const getData = async() => {
    try{
      let res = await fetch("http://localhost:8080/books");
      let data = await res.json()
      console.log('data:', data)
      setData(data);

    }
    catch(e)
    {
      console.log("e", e)
    }
    
  }
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
         {data.map((elem) => {
           return (
             <>
               <Div key={elem.id}>
                  <img src={elem.thumbnailUrl} />
                  {/* <h3>{elem.title}</h3>
                 <h3>{elem.isbn}</h3>  */}
                 <Link to={`/books/${elem.id}`}>{elem.title}</Link>
                 <Link to={`/books/${elem.id}`}>{elem.isbn}</Link>

               </Div>
             </>
           )
         })}
         <div>
           <Outlet />
         </div>
      </Grid>
    </>
  );
};
export default Books;
