import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {MdFastfood} from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <Nav>
        <MdFastfood/>
        <Logo to={'/'}>Cuisine of the world</Logo>
      </Nav>
      <Search/>
      <Category />
      <Pages />
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5em;
  font-family: 'Josefin Sans', sans-serif;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 1.5em;
  }

`;

export default App;
