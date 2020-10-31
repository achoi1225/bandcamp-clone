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
import { USER_ID } from './store/actions/authentication';
import { getUser } from "./store/actions/user";

const App = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  // const userData = useSelector((state) => state.user.data);
  const userId = localStorage.getItem(USER_ID);
  // set artist of fan through role
  // const isArtist = 

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  
  // console.log("USER ID", userId);
  useEffect(() => {
    setLoaded(true);
    dispatch(loadToken());
    dispatch(getUser(userId));
  }, []);
  
  if(!loaded) {
    return null;
  }
  // console.log("USER DATA", userData);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute 
            path="/albums/:id"
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
