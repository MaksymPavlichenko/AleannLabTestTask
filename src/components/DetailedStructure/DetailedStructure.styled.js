import styled from '@emotion/styled';

export const MainInfoWrap = styled.div`
margin-bottom: 60px;

@media screen and (min-width: 1400px) {
  width: 793px;
  margin-bottom: 86px;
}
`;

export const HeaderWrap = styled.div`
position: relative;
`;

export const HeaderTitle = styled.h2`
color: #3A4562;
font-size: 28px;
line-height: 1.22;
letter-spacing: 0.41px;
font-weight: 700;
padding-bottom: 12px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: rgba(58, 69, 98, 0.13);
margin-bottom: 24px;

@media screen and (min-width: 1400px) {
  padding-bottom: 9px;
}
`;

export const HeaderList = styled.ul`
display: flex;
align-items: center;
gap: 36px;
color: rgba(56, 65, 93, 0.82);
font-size: 16px;
line-height: 1.44;
letter-spacing: -0.5px;
margin-bottom: 32px;
  
@media screen and (min-width: 1400px) {
  position: absolute;
  top: 7px;
  right: 0;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  margin-bottom: 0;
}
`;

export const HeaderItem = styled.li`
display: flex;
align-items: center;
gap: 11px;

&:first-of-type > svg {
  fill-opacity: 0;
  stroke: rgba(56, 65, 93, 0.82);
  stroke-width: 2px;
}
`;

export const ButtonApply = styled.button`
width: 127px;
height: 52px;
display: block;
margin: 0 auto;
color: #FFFFFF;
background-color: #384564;
font-size: 12px;
line-height: 1.33;
font-weight: 600;
text-transform: uppercase;
border-radius: 8px;
border: none;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
display: none;  

&:hover {
  transform: scale(1.01);
}
  
@media screen and (min-width: 1400px) {
  margin-left: 0;
  margin-top: 39px;
  margin-bottom: 32px;
  display: block;
}
`;

export const WrapInfo = styled.div`
position: relative;
`;

export const InfoTitle = styled.h3`
width: 363px;
margin-bottom: 21px;
color: #3A4562;
font-size: 24px;
line-height: 1.25;
letter-spacing: -0.75px;
font-weight: 700;
 
@media screen and (min-width: 1400px) {
  width: 501px;
  margin-bottom: 7px;
}
`;

export const InfoSalary = styled.div`
position: absolute;
top: 110%;
right: 0;
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 4px;
  
@media screen and (min-width: 1400px) {
  top: 0px;
  flex-direction: column-reverse;
}
`;

export const InfoSalaryText = styled.p`
color: rgba(56, 65, 93, 0.82);
font-size: 18px;
line-height: 1.33;
letter-spacing: -0.56px;
`;

export const InfoSalaryValue = styled.p`
color: #3A4562;
font-size: 20px;
line-height: 1.25;
letter-spacing: -0.63px;
font-weight: 700;
`;

export const Post = styled.p`
color: rgba(56, 65, 93, 0.82);
font-size: 13px;
line-height: 1.92;
letter-spacing: 0.19px;
font-weight: 300;
margin-bottom: 26px;
  
@media screen and (min-width: 1400px) {
  opacity: 0.36;
  font-family: Roboto, serif;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  font-weight: 400;
  margin-bottom: 7px;
}
`;

export const Description = styled.p`
color: rgba(56, 65, 93, 0.82);
font-size: 18px;
line-height: 1.33;
letter-spacing: -0.56px;
  
@media screen and (min-width: 1400px) {
  font-family: Roboto, serif;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  font-weight: 400;
}
`;

export const ButtonApplyBottom = styled.button`
width: 127px;
height: 52px;
display: block;
margin: 0 auto;
margin-top: 15px;
color: #FFFFFF;
background-color: #384564;
font-size: 12px;
line-height: 1.33;
font-weight: 600;
text-transform: uppercase;
border-radius: 8px;
border: none;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
&:hover {
  transform: scale(1.01);
}
  
@media screen and (min-width: 1400px) {
  margin-left: 0;
}
`;

export const WrapSecondary = styled.div`
display: flex;
flex-direction: column;
  
@media screen and (min-width: 1400px) {
  flex-direction: column-reverse;
}
`;

export const ImgSection = styled.section`
margin-bottom: 60px;

@media screen and (min-width: 1400px) {
  width: 793px;
  margin-bottom: 86px;
}
`;

export const ImgTitle = styled.h2`
color: #3A4562;
font-size: 28px;
line-height: 1.22;
letter-spacing: 0.41px;
font-weight: 700;
padding-bottom: 12px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: rgba(58, 69, 98, 0.13);
margin-bottom: 24px;

@media screen and (min-width: 1400px) {
  padding-bottom: 9px;
}
`;

export const ImgList = styled.ul`
display: flex;
align-items: center;
gap: 10px;
`;

export const ImgItem = styled.li`
width: 209px;
height: 115px;
border-radius: 8px;
overflow: hidden;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

export const AddInfoSection = styled.section`
margin-bottom: 60px;
  
@media screen and (min-width: 1400px) {
  width: 793px;
  margin-bottom: 86px;
}
`;

export const AddInfoTitle = styled.h2`
color: #3A4562;
font-size: 28px;
line-height: 1.22;
letter-spacing: 0.41px;
font-weight: 700;
padding-bottom: 12px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: rgba(58, 69, 98, 0.13);
margin-bottom: 24px;
  
@media screen and (min-width: 1400px) {
  padding-bottom: 9px;
}
`;

export const AddInfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 22px;
`;

export const AddInfoSubTitle = styled.h3`
color: rgba(56, 65, 93, 0.82);
font-size: 18px;
line-height: 1.33;
letter-spacing: -0.56px;
font-weight: 400;
margin-bottom: 10px;
`;

export const AddInfoList = styled.ul`
display: flex;
align-items: center;
gap: 8px;
`;

export const AddInfoItemType = styled.li`
font-size: 16px;
line-height: 1;
letter-spacing: -0.46px;
font-weight: 700;
padding: 17px 13px;
color: #55699E;
background-color: rgba(161, 177, 219, 0.317343);
border: 1px solid rgba(85, 105, 158, 0.3);
border-radius: 8px;
cursor: pointer;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
&:hover {
  transform: scale(1.01);
}
  
@media screen and (min-width: 1400px) {
  padding: 0;
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

export const AddInfoItemBenefits = styled(AddInfoItemType)`
color: #988B49;
background-color: rgba(255, 207, 0, 0.15);
border: 1px solid #ffcf00;
`;

export const ContactsTitle = styled.h2`
color: #3A4562;
font-size: 28px;
line-height: 1.22;
letter-spacing: 0.41px;
font-weight: 700;
padding-bottom: 12px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: rgba(58, 69, 98, 0.13);
margin-bottom: 24px;

@media screen and (min-width: 1400px) {
  display: none;
}
`;

export const ContactsWrap = styled.div`
margin: 0 auto;
border-radius: 8px;
overflow: hidden;

@media screen and (min-width: 1400px) {
  position: absolute;
  top: 56px;
  right: 0px;
  width: 402px;
}
`;

export const ContactsText = styled.div`
overflow: hidden;
position: relative;
height: 210px;
padding: 31px 60px;
color: #E7EAF0;
background-color: #2A3047;
`;

export const Circle = styled.div`
display: none;
position: absolute;
z-index: 0;
height: 273px;
width: 273px;
background-color: #202336;
left: -20%;
top: -20%;
border-radius: 50%;
  
@media screen and (min-width: 1400px) {
  display: block;
}
`;

export const ContactsMap = styled.div`
height: 222px;
width: 100%;
`;

export const ContactsName = styled.div`
z-index: 1;
position: relative;
font-size: 16px;
line-height: 1.22;
letter-spacing: 0.24px;
font-weight: 700;
margin-bottom: 17px;
  
@media screen and (min-width: 1400px) {
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: -0.63px;
  margin-bottom: 8px;
}
`;

export const ContactsAddress = styled.div`
z-index: 1;
position: relative;
display: flex;
align-items: center;
gap: 8px;
font-size: 16px;
line-height: 1.442;
letter-spacing: -0.5px;
margin-bottom: 6px;
  
@media screen and (min-width: 1400px) {
  font-family: Roboto, serif;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  margin-bottom: 7px;
  color: #E8EBF3;
}
  
& > svg {
  opacity: 0.56;
}
`;

export const ContactsConnect = styled.div`
z-index: 1;
position: relative;
font-size: 16px;
line-height: 1.442;
letter-spacing: -0.5px;
color: rgba(255, 255, 255, 0.669635)
  
@media screen and (min-width: 1400px) {
  font-family: Roboto, serif;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  color: #E8EBF3;
}
`;

export const BackLink = styled.a`
width: 213px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
gap: 19px;
background-color: rgba(56, 69, 100, 0.14);
border-radius: 8px;
  
& > svg {
  color: black;
}
  
@media screen and (max-width: 1399px) {
  margin-top: 50px;
}
`;

export const BackText = styled.p`
color: #3A4562;
font-size: 12px;
line-height: 1.33;
font-weight: 600;
text-transform: uppercase;
`;