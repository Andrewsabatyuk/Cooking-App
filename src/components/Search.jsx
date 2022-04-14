import styled from "styled-components";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    }

    return (
        <StyledForm onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input onChange={(e) => setInput(e.target.value)}
                    type="text" value={input} />
            </div>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    margin: 0 20rem;
        
    div{
        position:relative;
        width: 100%;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #2C3E50 , #000000);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 2rem;
        outline: none;
        width: 100%;
        margin-top: 20px;
    }

    svg{
        position: absolute;
        top: 62%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search