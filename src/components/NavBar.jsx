import { NavLink, useLinkClickHandler } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdCatchingPokemon } from "react-icons/md";
function NavBar(){
    //Función para agregar una clase condicional a NavLink
    const linkActivo = ({isActive}) => isActive ? "active" : "not-active";
    
    return(
        <>
        <Navbar bg="danger">
        <Container>
            <Navbar.Brand href="#home">
            <MdCatchingPokemon size={70}/><strong>PokeApi</strong>
            </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"><NavLink to={"/"} className={linkActivo}>Home</NavLink></Nav.Link>
            <Nav.Link href="#features"><NavLink to={"/pokemones"} className={linkActivo}>Pokemones</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar