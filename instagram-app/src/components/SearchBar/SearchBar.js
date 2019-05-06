import React from 'react';
import './SearchBar.css';
import {
    Input,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <div className='searchBar'>
                <Navbar light expand="md">
                    <NavbarBrand><i className="fab fa-instagram"></i> | Instagram</NavbarBrand>
                    <Input placeholder='Search' />
                    <Nav className='ml-auto' navbar>
                        <NavItem><i className="far fa-compass"></i></NavItem>
                        <NavItem><i className="far fa-heart"></i></NavItem>
                        <NavItem><i className="far fa-user"></i></NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}