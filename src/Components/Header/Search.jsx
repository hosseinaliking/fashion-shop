import React from "react";
import styled, { css } from "styled-components";

//* ICONS *//
import { BiSearch } from "react-icons/bi";

const Search = (props) => {

  const modalHandler = () => {
    props.setShowModal(true);
  }


  return (
    <SearchContainer position={`${props.searchHome ? 'searchHome' : null}`}>
      <Icon>
        <BiSearch size={"22px"} />
      </Icon>

      <SearchInputContainer>
        <SearchInput
          type={"text"}
          placeholder="جستجو در میان بیش از 500 برند معتبر"
          onClick={modalHandler}
        />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default Search;

//* Styled Components *//

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  background: #f5f5f5;
  border-radius: 50px;
  overflow: hidden;

  ${(props) =>
    props.position === 'searchHome' ?
    css`
      flex: 0.75;
    ` : css` 
      width: 90%;
    ` }
`;

const SearchInputContainer = styled.div`
  flex: 1;
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%auto;
  border: none;
  background: transparent;
  border-radius: 50px;
  outline: none;
  padding: 0.75rem 0.5rem;
`;

const Icon = styled.span`
  cursor: pointer;

  margin: 10px;
  margin-left: 0;
`;
