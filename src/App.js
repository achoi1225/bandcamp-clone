import React, { useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import Nav from './components/Nav';
// import ArtistPage from './components/ArtistPage';
// import ArtistSignupPage from './components/ArtistSignupPage';
import AlbumPage from './components/AlbumPage';
import LoginPage from './components/LoginPage';
import { loadToken } from './store/actions/authentication';

const App = () => {
  const needLogin = useSelector((state) => !state.authentication.token);

  // set artist of fan through role
  // const isArtist = 

  console.log("LOGIN NEEDED? ", needLogin);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoaded(true);
    dispatch(loadToken());
  }, []);

  if(!loaded) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={LoginPage} />
          <PrivateRoute 
            path="/albums/:albumId"
            exact={true}
            needLogin={needLogin}
            component={AlbumPage}
          />

        </Switch>
      </BrowserRouter>
      {/* <LoginPage /> */}
      {/* <Nav /> */}
      {/* <Route /> */}
      {/* <ArtistSignupPage /> */}
      {/* <ArtistPage /> */}
    </>
  );
}

export default App;
