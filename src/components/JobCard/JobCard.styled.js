import styled from '@emotion/styled';

export const CardWraper = styled.div`
height: 100%;
display: flex;
flex-direction: column-reverse;
align-items: center;
padding: 16px 16px 24px;
color: #878D9D;
cursor: pointer;

@media screen and (min-width: 1400px) {
  height: 164px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}
`;

export const CardInfo = styled.div`
display: flex;
justify-content: start;
align-items: start;
height: 100%;
gap: 19px;
}
`;

export const CardLogo = styled.img`
flex-shrink: 0;
display: block;
width: 66px;
height: 66px;
border-radius: 50%;

@media screen and (min-width: 1400px) {
  width: 85px;
  height: 85px;
}
`;

export const CardDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 5px;
  
@media screen and (min-width: 1400px) {
  justify-content: space-between;
  gap: 8px;
  width: 959px;
}
`;

export const CardTitle = styled.h2`
color: #3A4562';
font-size: 18px;
line-height: 1.33;
letter-spacing: -0.56px;
font-weight: 400;

@media screen and (min-width: 1400px) {
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: -0.63px;
  font-weight: 700;
}
`;

export const CardDepartment = styled.h3`
font-size: 16px;
line-height: 1.56;
letter-spacing: 0.24px;
`;

export const CardAddress = styled.div`
font-size: 16px;
line-height: 1.56;
letter-spacing: 0.24px;
display: flex;
align-items: center;
gap: 8px;
`;

export const CardFeature = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
height: 100%;
margin-left: 85px;
margin-bottom: 14px;

@media screen and (min-width: 1400px) {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-bottom: 0;
}
`;

export const WrapRaiting = styled.div`
& svg {
  @media screen and (min-width: 1400px) {
    width: 22px;
    height: 21px;
    margin-right: 0;
  }
}
`;

export const CardNote = styled.div`
margin-left: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
height: 100%;

@media screen and (min-width: 1400px) {
  margin-left: 32px;
}
  
& > svg {
  @media screen and (max-width: 1399px) {
    display: none;
  }
}
`;

export const CardPost = styled.p`
font-weight: 300;
font-size: 14px;
line-height: 1.22;
letter-spacing: 0.21px;
margin-left: auto;
  
@media screen and (min-width: 1400px) {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.56;
  letter-spacing: 0.24px;
}
`;