import styled from 'styled-components';
export const AboutMeWrapper = styled.section`
  display:flex;
 flex-wrap: wrap;
  align-items:center;
  justify-content:space-around;
  width: 80%;
  margin:1rem auto;
  @media screen and (width<768px){width:100%;}
  `;
  export const AboutMeText=styled.article`
  width:50%;
  @media screen and (width<768px){width:95%;}
  @media screen and (width<992px){padding:.5rem;}
  `;
  export const AboutMePic =styled.div`
  width:50%;
  display: flex;
  justify-content:end;
  align-items:center;
  @media screen and (width<768px){width:95%;order:-1;justify-content:center;}
  `;