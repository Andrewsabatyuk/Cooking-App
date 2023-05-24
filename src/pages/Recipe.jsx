import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions')
  let params = useParams();

  const fetchRecipes = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=119219a8d0dc4e509c8ef94b97df01ac`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() => {
    fetchRecipes();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <ButtonWrapper>
          <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
          <Button className={activeTab === 'ingridients' ? 'active' : ''} onClick={() => setActiveTab('ingridients')}>Ingredients</Button>
        </ButtonWrapper>
        {activeTab === 'instructions' && (
          <TextWrapper>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4> <br />
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </TextWrapper>
        )}

        {activeTab === 'ingridients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}

      </Info>
    </DetailWrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4rem;
`;

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 7rem;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
  ${'' /* border-radius: 20px; */}

    .active{
      background: linear-gradient(35deg, #2C3E50 , #000000);
      color: white;
      border-radius: 40px;
    }
    a{
      text-decoration: none;
    }
    h2{
      margin-bottom: 4rem;
    }
    li{
      font-size: 1.3rem;
      line-height: 2rem;
    }
    ul{
      margin-top: 2.5rem;
      margin-left: 10rem;
      list-style: none;
      width: 100%;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid #313131;
    margin-left: 10rem;
    font-weight: bold;
  `;

const Info = styled.div`
      margin-right: 10rem;
 `;


const TextWrapper = styled.div`
    margin-left: 10rem;
    margin-top: 2rem;
    width: 100%;
`;
export default Recipe

// позиціонування css
// відносні величини em rem vh vw
// псевдокласи
// ref
// local and global state