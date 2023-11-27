
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { MdLogout } from "react-icons/md";
import logo from '../../assets/logo_new.png'

function LandingPageHeader() {
    const headerData = [
        {
            name: "Dashboard",
            linkTo: '/dashboard'
        },
       
    ]
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#002758', color: 'white',position:'sticky' }} className='p-1'>

            <Navbar.Brand href="" style={{

            }}>
                <img  width={150} height={"10%"}
                 src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle style={{ background: 'white' }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{marginRight:'20px'}}>
                <Nav
                    className='test_class'
                >
                    {
                        headerData.map((e, i) => {
                            return <Nav.Link style={{
                                color: 'white',
                                fontSize: '17px',
                                fontWeight: 500,
                                padding: '0px 10px',
                                textTransform:'uppercase'
                            }} href={''}>{e.name}</Nav.Link>
                        })
                    }
                    <Nav.Link href="#logout"
                        style={{
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 600,
                            padding: '0px 10px'
                        }}
                    >
                        <MdLogout size={20} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default LandingPageHeader;