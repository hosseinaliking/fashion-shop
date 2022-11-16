import React from "react";
import styled from "styled-components";

//* Components *//
import Hero from "../Components/Hero/Hero";
import Category from "../Components/Category/Category";
import DailyWonder from "../Components/DailyWonder/DailyWonder";
import TopProduct from "../Components/TopProduct/TopProduct";
import Feature from "../Components/Feature/Feature";
import BestBrand from "../Components/BestBrand/BestBrand";
import Mag from "../Components/Mag/Mag";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <HomePage>
      <Hero />
      <Category />
      <DailyWonder />
      <TopProduct />
      <Feature />
      <BestBrand />
      <Mag />
      <NewsLetter />
      <Footer />
    </HomePage>
  );
};

export default Home;

//* Styled Components *//

const HomePage = styled.div` 
  isolation: isolate;
`