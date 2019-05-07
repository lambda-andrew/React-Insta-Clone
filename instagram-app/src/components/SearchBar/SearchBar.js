import React from 'react';
import Styled from 'styled-components';

const SearchBar = () => {
    return(
        <SearchContainer>
             <SearchHome>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <div>|</div>
                <h3>Instagram</h3>
             </SearchHome>

             <SearchInput>
                <input type="text" placeholder="Search"/>
             </SearchInput>

             <SearchIcons>
                  <a href=""><i class="far fa-dot-circle"></i></a>
                  <a href=""> <i class="far fa-heart"></i></a>
                  <a href=""><i class="far fa-user"></i></a>
             </SearchIcons>
        </SearchContainer>
    )
}

const SearchContainer = Styled.div `
  display: flex;
  justify-content: space-between;

  align-items: center;
  height: 60px;

`
const SearchHome = Styled.div `
    display: flex;

    a {
        font-size: 1.5rem;
    }
     div {
         font-size: 1.3rem;
         font-weight: 300;
         padding: 0 8px;
         margin-top: 3px;
     }
     h3 {
        font-family: 'Quintessential', cursive;
     }

     .fab {
         color: #333;
         margin-top: 4px;
     }
`
const SearchInput = Styled.div `
     input {
         width: 200px;
         font-size: 1.3rem;
         border-radius: 5px;
         border: 1px solid #ccc;
         text-align: center;
     }

`

const SearchIcons = Styled.div `
    display: flex;

    .far {
        font-size: 1.3rem;
        color: #333;
    }
    .fa-heart {
        padding: 0 10px;
    }
`

export default SearchBar;