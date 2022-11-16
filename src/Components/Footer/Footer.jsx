import React from "react";
import styled, { css } from "styled-components";

//* Style *//
import { MainContainer } from "../../UI/container";

//* Image *//
import Logo from "../../asset/Image/Logo/Main-Logo.png";
import NamadImageOne from "../../asset/Image/Namad/Anjoman.png";
import NamadImageTwo from "../../asset/Image/Namad/Etehad.png";
import NamadImageThree from "../../asset/Image/Namad/Samandehi.png";

//* Icons *//
import { BsDownload } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiAparat } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        {/* Top Footer */}
        <TopFooter>
          <MenuFooter>
            <MenuItem>
              <ItemHeader>
                <ItemHeaderText>خرید</ItemHeaderText>
              </ItemHeader>

              <ItemBody>
                <ItemLinkContainer>
                  <ItemLink>خرید لباس</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>لباس مردانه</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>لباس زنانه</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>لباس بچگانه</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>خرید لوازم آرایشی</ItemLink>
                </ItemLinkContainer>
              </ItemBody>
            </MenuItem>

            <MenuItem>
              <ItemHeader>
                <ItemHeaderText>خدمات مشتریان</ItemHeaderText>
              </ItemHeader>

              <ItemBody>
                <ItemLinkContainer>
                  <ItemLink>پرسش های متداول</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>شرایط بازگشت</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>راهنمای خرید</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>فروش B2B</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>سنجش رضایت مندی</ItemLink>
                </ItemLinkContainer>
              </ItemBody>
            </MenuItem>

            <MenuItem>
              <ItemHeader>
                <ItemHeaderText>اطلاعات بانی مد</ItemHeaderText>
              </ItemHeader>

              <ItemBody>
                <ItemLinkContainer>
                  <ItemLink>درباره ما </ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>قوانین و مقررات</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>تماس با ما</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>فرصت های شغلی</ItemLink>
                </ItemLinkContainer>
                <ItemLinkContainer>
                  <ItemLink>همکاری تجاری</ItemLink>
                </ItemLinkContainer>
              </ItemBody>
            </MenuItem>

            <MenuItem contact={"contact-info"}>
              <Support>
                <SupportText>میزبان صدای گرمتان هستیم</SupportText>
                <SupportText smallSize={"small"}>
                  7 روز هفته - 24 ساعته
                </SupportText>
              </Support>

              <Support>
                <SupportText>تلفن: 021 49542</SupportText>
              </Support>

              <Support>
                <SupportText>ایمیل: fashion@gmail.com</SupportText>
              </Support>
            </MenuItem>
          </MenuFooter>

          <SocialFooter>
            <SocialItem>
              <img src={Logo} alt="Logo of website" />
            </SocialItem>

            <SocialItem>
              <AppLink>
                دانلود اپلیکیشن <BsDownload />
              </AppLink>
            </SocialItem>

            <SocialItem>
              <SocialIcons>
                <BsInstagram />
                <FaTelegramPlane />
                <SiAparat />
                <AiOutlineTwitter />
              </SocialIcons>
            </SocialItem>
          </SocialFooter>
        </TopFooter>

        {/* Bottom Footer */}
        <BottomFooter>
          <ContentFooter>
            <ItemHeaderText>فروشگاه پوشاک بانی مد</ItemHeaderText>
            <ContentText>
              مرکز خرید آنلاین بانی ‌مد فعالیت خود را در زمینه پوشاک به ‌صورت
              تخصصی از سال 1393 آغاز نمود و طی این سال‌ها توانسته ضمن همکاری با
              بیش از 400 برند ایرانی و بین‌المللی، در مسیر بهبود تجربه خرید
              آنلاین پوشاک در ایران گام بردارد. مهم‌ترین رسالت بانی ‌مد بهبود
              کیفیت سبک زندگی است که رضایت اکثریت مشتریان گرامی از این فروشگاه
              اینترنتی گواهی بر این ادعاست؛ رضایتی که پشتوانه‌ای استوار برای
              تحقق
            </ContentText>
          </ContentFooter>

          <BrandsFooter>
            <ImageBrandsContainer>
              <ImageBrand src={NamadImageOne} alt="Namad image" />
              <ImageBrand src={NamadImageTwo} alt="Namad image" />
              <ImageBrand src={NamadImageThree} alt="Namad image" />
            </ImageBrandsContainer>
          </BrandsFooter>
        </BottomFooter>

        {/* Copyright Text */}
        <CopyContainer>
          <CopyText>
            کلیه حقوق این وبسایت متعلق به فشیون باکالا است
          </CopyText>
          
          <CopyBrand>
            Copyright 2022 FashionBakala
          </CopyBrand>
        </CopyContainer>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;

//* Styled Components *//

const FooterContainer = styled.footer`
  margin-top: 4rem;
  border-top: 4px solid #f8f8f8;
`;

const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuFooter = styled.ul`
  list-style: none;
  padding: 0;
  margin-block: 2rem;

  flex: 0.85;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${(props) =>
    props.contact &&
    css`
      gap: 0.75rem;
    `}
`;

const ItemHeader = styled.div``;

const ItemHeaderText = styled.p`
  color: #8a8a8a;
`;

const ItemBody = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style: none;
  padding: 0;
`;

const ItemLinkContainer = styled.li``;

const ItemLink = styled.a`
  text-transform: none;
  color: #414141;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  position: relative;

  &:hover {
    color: #01bf70;
  }

  &:after {
    content: "";
    width: 0;
    height: 2px;
    background: #01bf70;

    transition: all 0.2s ease-in-out;

    position: absolute;
    bottom: 0;
    left: 50%;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const Support = styled.div`
  margin-bottom: 8px;
`;

const SupportText = styled.p`
  ${(props) =>
    props.smallSize &&
    css`
      font-size: 13px;
    `}
`;

const SocialFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-block: 2rem;
`;

const SocialItem = styled.div`
  display: flex;
  justify-content: center;
`;

const AppLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  color: #01bf70;
  text-decoration: none;
  border-radius: 30px;
  border: 1px solid #01bf70;
  padding: 10px 20px;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > * {
    font-size: 28px;
    cursor: pointer;
  }
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentFooter = styled.div`
  flex: 0.55;
`;

const ContentText = styled.p`
  margin-top: 1rem;
  line-height: 1.8;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const BrandsFooter = styled.div`
  flex: 0.25;
`;

const ImageBrandsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const ImageBrand = styled.img`
  width: 90px;
`;

const CopyContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

const CopyText = styled.p` 
  font-size: 13px;
`

const CopyBrand = styled.p` 
  font-weight: 600;
`
