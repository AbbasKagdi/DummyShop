import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">DummyShop</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl style={{width:500}} placeholder="Search Yummies" className="m-auto" />
            </Navbar.Text>
            <Nav>
                <Dropdown align={{ sm:"right" }}>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge bg="transparent">{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:200}}>
                        <span style={{padding:10}}>Cart is empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header