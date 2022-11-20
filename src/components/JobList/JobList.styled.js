import styled from '@emotion/styled';

export const JobsList = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const JobsItem = styled.li`
min-height: 206px;
border-radius: 8px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
overflow: hidden;
background-color: #EFF0F5;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);

&:hover {
  transform: scale(1.01);
}

@media screen and (min-width: 1400px) {
  min-height: 0;
  height: 164px;
  background-color: #FFFFFF;
  box-shadow: '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)';
}
`;