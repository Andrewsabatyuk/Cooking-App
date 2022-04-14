import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

function Veggie() {

  const [veggie, setVeggie] = useState([])

  useEffect(() => {
    getVeggie()
  }, []);

  const getVeggie = async () => {
    const checkLocalStor = localStorage.getItem('veggie')

    if (checkLocalStor) {
      setVeggie(JSON.parse(checkLocalStor))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=119219a8d0dc4e509c8ef94b97df01ac&number=12&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Вегетеріанські репепти</h3>
        <Splide options={
          {
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem'
          }
        }>
          {veggie.map(recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 9;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index:3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  `;


export default Veggie