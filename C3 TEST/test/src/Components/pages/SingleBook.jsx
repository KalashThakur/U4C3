import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Params } from "react-router-dom";


// style for Flex
const Flex = styled.div``;

// add style for button
export const Button = styled.button``;
export const SingleBook = () => {
  // console.log(params);
const [data, setData] = useState([])
  const getData = async() => {
    try{
      let res = await fetch("http://localhost:8080/books");
      let data = await res.json();
      console.log('data:', data)
      setData(data)
    }
    catch(e)
    {
      console.log("error:",e)
    }
  }

  useEffect(() => {
    // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id
    getData()
  }, []);

  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!data && (
        <>
          <Flex>
            <img
              data-testid="book-image-url"
              src={data.thumbnailUrl}
              alt={data.title}
            />
            <div>
              <h2 data-testid="book-title">{data.title}</h2>
              <h3 data-testid="book-isbn">{data.isbn}</h3>
              <p data-testid="book-longdesc">{data.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
