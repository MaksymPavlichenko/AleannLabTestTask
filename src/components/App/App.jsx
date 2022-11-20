import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import Layout from 'components/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import DetailedJob from 'pages/DetailedJob/DetailedJob';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
          <Route path="details" element={<DetailedJob />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
