import React from 'react';
import {
    Input,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import styled from 'styled-components';

function SearchBar (props) {
    return (
        <Header>
            <Navbar light expand="md">
                <LogoHeader>
                    <NavbarBrand><i className="fab fa-instagram"></i> | Instagram</NavbarBrand>
                </LogoHeader>
                <Searchbar>
                    <form onSubmit={props.search}>
                        <Input 
                            placeholder='Search' 
                            value={props.data}
                            onChange={props.changes}
                        />
                    </form>
                </Searchbar>
                <Nav className='ml-auto' navbar>
                    <NavItem><i className="far fa-compass"></i></NavItem>
                    <NavItem><i className="far fa-heart"></i></NavItem>
                    <NavItem><i className="far fa-user"></i></NavItem>
                </Nav>
            </Navbar>
        </Header>
    );
}

const Searchbar = styled.div`
    input{
        width: 300px;
        text-align: center;
    }
`

const Header = styled.header`
    @media (min-width: 768px){
        .navbar-expand-md {
            flex-flow: row nowrap;
            justify-content: space-evenly;
        }
    }
    .navbar {
        border-bottom: 1px solid lightgray;
        background: #fff;
    }   
    .ml-auto{
        margin-left: 0 !important;
    }
`

const LogoHeader = styled.div`

`
export default SearchBar;