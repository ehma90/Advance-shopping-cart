import {Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {GiShoppingCart} from 'react-icons/gi'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar () {
    const {openCart, cartQuantity} = useShoppingCart()
    return <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to='/' as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to='/store' as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to='/about' as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
                {cartQuantity > 0 && (
                    <Button onClick={openCart} style={{width: '3rem', height: '3rem', position: 'relative'}}
                    className="rounded-circle d-flex justify-content-center align-items-center" variant='outline-primary'>
                        <GiShoppingCart style={{fontSize: '3rem'}}/>
                        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center absolute'
                        style={{
                            color:'white',
                            width: '1.3rem',
                            height: '1.3rem',
                            position: 'absolute',
                            right: '0',
                            bottom: '0',
                            transform: 'translate(25%, -10%)'
                        }}>{cartQuantity}</div>
                    </Button>
                )}
        </Container>
    </NavbarBs>
}