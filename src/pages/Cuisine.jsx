import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import {motion} from 'framer-motion';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=119219a8d0dc4e509c8ef94b97df01ac&cuisine=${name}`);
        const recepies = await data.json();
        setCuisine(recepies.results);
    }

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type])

    return (
        <Grid animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration: 0.7}}>
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <h2>{item.healthScore}</h2>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled(motion.div)`
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
        text-decoratoin: none;
    }
 `;

export default Cuisine
