import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

//* Components *//
import Search from "../Header/Search";

//* Icons *//
import { AiOutlineClose } from "react-icons/ai";

const SearchModal = ({ showModal, setShowModal }) => {

  const closeModalHandler = () => {
    setShowModal(false);
  }

  if (!showModal) return;

  return createPortal(
    <Container>
      <HeaderModal>
        <HeaderSearchContainer>
          <ClsoeModalIconContainer onClick={closeModalHandler} >
            <AiOutlineClose size={'30px'} />
          </ClsoeModalIconContainer>
          <Search />
        </HeaderSearchContainer>
      </HeaderModal>
    </Container>,
    document.getElementById("search-modal")
  );
};

export default SearchModal;

//* Styled Components *//

const Container = styled.div`
  position: absolute;
  z-index: 99999;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const HeaderModal = styled.header`
  width: 100vw;
  height: 25vh;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderSearchContainer = styled.div`
  width: 90%;
  margin-inline: auto;

  position: relative;
`;

const ClsoeModalIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;
