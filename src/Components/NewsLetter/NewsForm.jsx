import React from "react";
import styled from "styled-components";

//* Icons *//
import { MdKeyboardArrowLeft } from "react-icons/md";

const NewsForm = () => {
  return (
    <FormContainer>
      <Form>
        <FormInput placeholder="آدرس ایمیل شما " />
        <FormButton>
          <ButtonText>ارسال</ButtonText>

          <FormIcon>
            <MdKeyboardArrowLeft />
          </FormIcon>
        </FormButton>
      </Form>
    </FormContainer>
  );
};

export default NewsForm;

//* Styled Components *//

const FormContainer = styled.div`
  width: min(650px, 100% - 2rem);
  margin-inline: auto;
  margin-top: 2rem;
  /* transform: translateY(40px) */

  position: absolute;
  bottom: -15%;
  left: 50%;
  z-index: 11;
  transform: translateX(-50%);
`;

const Form = styled.form`
  background-color: #fff;
  padding: 15px 25px;
  border-radius: 110px;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FormInput = styled.input`
  background-color: #EFEFEF;
  border-radius: 110px;
  border: none;
  outline: none;

  flex: 1;
  padding: 10px 15px;
`;

const FormButton = styled.button`
  background: none;
  border: none;
  background-color: #00bf6f;
  color: #fff;
  border-radius: 30px;
  padding: 10px;
  padding-right: 15px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 3rem;
`;

const FormIcon = styled.span`
  font-size: 30px;
`;

const ButtonText = styled.p``;
