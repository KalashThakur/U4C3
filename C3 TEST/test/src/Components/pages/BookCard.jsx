import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled  from "styled-components";
import { useEffect, useState } from "react";


export const Flex = styled.div`

//  add required style
`;
export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props;


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


const {xyz} = useParams()


  return (
    <>
    {/* <Link to = {`/books/${id}`}>
      <Flex >
        <img src={thumbnailUrl} alt={title} height = "200px" width={"200px"} />
        <h3>{title}</h3>
        <h4>{isbn}</h4>
      </Flex>
    </Link> */}

    <div>
    <img src={thumbnailUrl} />
                  {/* <h3>{elem.title}</h3>
                 <h3>{elem.isbn}</h3>  */}
                 <Link to={`/books/${id}`}>{title}</Link>
                 <Link to={`/books/${id}`}>{isbn}</Link>
    </div>
   
    </>
  );
};
