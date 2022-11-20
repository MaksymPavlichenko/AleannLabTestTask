import React from 'react';
import RotateLoader from 'react-spinners/RotateLoader';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <RotateLoader
        color={'#3A4562'}
        size={15}
        speedMultiplier={0.4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoaderWrap>
  );
};

export default Loader;
