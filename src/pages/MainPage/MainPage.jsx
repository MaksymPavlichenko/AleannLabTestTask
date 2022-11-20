import React from 'react';
import JobList from 'components/JobList/JobList';
import { Main } from './MainPage.styled';

const MainPage = () => {
  return (
    <Main>
      <JobList />
    </Main>
  );
};

export default MainPage;