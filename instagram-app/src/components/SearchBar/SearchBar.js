import React, {Component} from 'react';
import Styled from 'styled-components';

class SearchBar extends Component {

    render(){

        return(
            <Search>
                <SearchIcons>
                    <SearchIcon href="https://instagram.com"><i className="fab fa-instagram"></i></SearchIcon>
                    <SearchBreak>|</SearchBreak>
                    <SearchTitle>Instagram</SearchTitle>
                </SearchIcons>
                <div>
                    <SearchInput onChange={this.props.handleSearch} type="text" placeholder="Search"/>
                </div>
                <SearchIcons>
                    <SearchIcon href="http://google.com"><i className="far fa-dot-circle"></i></SearchIcon>
                    <SearchIcon href="http://google.com"><i className="far fa-heart"></i></SearchIcon>
                    <SearchIcon href="http://google.com"><i className="far fa-user"></i></SearchIcon>
                </SearchIcons>
            </Search>
        )
    }
}


const Search = Styled.div `
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    z-index: 10;
    background: white;
    border-bottom: 1px solid lightgray;
    align-items: center;
`
const SearchIcons = Styled.div `
    display: flex;
`
const SearchIcon = Styled.a `
    font-size: 2.4rem;
    color: #333;

    .fa-heart {
        padding: 0 10px;
    }
`
const SearchTitle = Styled.h2 `
    font-family: 'Statisfy', cursive;
`
const SearchInput = Styled.input `
    width: 300px;
    font-size: 2rem;
    border-radius: 5px;
    border: 1px solid lightgray;
    text-align: center;
    &:focus {
        outline: none;
    }
`
const SearchBreak = Styled.p `
    font-size: 2rem;
    padding: 0px 10px;
`
export default SearchBar;

