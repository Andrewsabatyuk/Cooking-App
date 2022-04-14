import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Searched() {

  const [searchedRecepies, setSearchedRecepies] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=119219a8d0dc4e509c8ef94b97df01ac&query=${name}`);
    const recepies = await data.json();
    setSearchedRecepies(recepies.results);
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search])

  return (
    <Grid>
      {searchedRecepies.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}</Grid>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
  `;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 10px;
    }
    a{
        text-decoratoin: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
 `;


export default Searched