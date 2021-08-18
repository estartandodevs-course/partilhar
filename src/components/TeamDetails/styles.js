import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.palette.primary};

  @media (max-width: 375px) {
    font-size: 22px;
  }
`;
export const Titles = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.palette.secondary};
  margin-bottom: 32px;
  @media (max-width: 375px) {
    font-size: 18px;
    margin-bottom: 25px;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-top: 8px;
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const TitleCompany = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.palette.tertiary.tertiary_10};
  margin: 20px 0;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const ContainerImg = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  gap: 35px;

  @media (max-width: 375px) {
    width: 375px;
    gap: 22px;
  }
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 69px;
  @media (max-width: 375px) {
    padding: 23px 0 48px;
  }
`;

export const PhotoImg = styled.img`
  cursor: pointer;
  @media (max-width: 375px) {
    width: 70px;
    height: 70px;
  }
`;

export const PhotoImgs = styled.img`
  cursor: pointer;
  @media (max-width: 375px) {
    width: 89px;
    height: 96px;
  }
`;

export const PhotoImgSocial = styled.img`
  cursor: pointer;
  @media (max-width: 375px) {
    width: 18px;
    height: 18px;
  }
`;

export const TitleImg = styled.p`
  width: 60px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 5px;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
export const BoxSocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 128px;
  cursor: pointer;
  @media (max-width: 375px) {
    padding-bottom: 25px;
  }
`;
