import React from "react";
import styled from "styled-components";

//* Components *//
import NewsForm from "./NewsForm";

//* Styled *//
import { MainContainer } from "../../UI/container";

const NewsLetter = () => {
  return (
    <MainContainer>
      <NewsSection>
        <NewsContent>
          <NewsTitleContainer>
            <NewsTitle>ثبت نام در خبرنامه بانی مد</NewsTitle>
            <NewsDescription>
              اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های
              ویژه ما مطلع می شوید
            </NewsDescription>
          </NewsTitleContainer>

          <NewsForm />
        </NewsContent>
      </NewsSection>
    </MainContainer>
  );
};

export default NewsLetter;

//* Styled Components *//

const NewsSection = styled.section`
  background: #f8f8f8;
  border-radius: 3px;

  position: relative;
`;

const NewsContent = styled.div`
  padding-top: 4rem;
  height: 35vh;
`;

const NewsTitleContainer = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const NewsTitle = styled.h3`
  font-size: 25px;
`;

const NewsDescription = styled.p`
  color: #222;
`;
