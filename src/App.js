import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import ArtistPage from './components/ArtistPage';

const App = () => {
  return (
    <>
      <Nav />
      <ArtistPage />
    </>
  );
}

export default App;
