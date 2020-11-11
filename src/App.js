import React, { useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProtectedRoute, PrivateRoute, ProtectedArtistRoute } from "./util/route-util";
import Nav from './components/Nav';
// import ArtistPage from './components/ArtistPage';
// import ArtistSignupPage from './components/ArtistSignupPage';
import Homepage from './components/Homepage';
import AlbumPageContainer from './components/AlbumPageContainer';
import DashboardContainer from './components/DashboardContainer';
import SignupPage from './components/SignupPage';
import FanEditPageContainer from './components/FanEditPageContainer';
import ArtistSignupPage from './components/ArtistSignupPage';
import { loadToken } from './store/actions/authentication';
import { USER_ID } from './store/actions/authentication';
import { USER_NAME } from './store/actions/authentication';
import { getUser } from "./store/actions/user";
import { getFollowing } from './store/actions/follows';

const App = () => {
  // const followsList = useSelector((state) => state.follows.list)
  // const user = useSelector((state) => state.user.data);
  // const userId = localStorage.getItem(USER_ID);
  const userName = localStorage.getItem(USER_NAME);
  
  const needLogin = useSelector((state) => !state.authentication.token);
  // const user = useSelector((state) => state.user.data);
  const [loaded, setLoaded] = useState(false);
  let isArtist = false;

  const dispatch = useDispatch();
  
  console.log("NEED LOGIN? ", needLogin);
  // console.log("USER ID", userId);
  useEffect(() => {
      (async () => {
        dispatch(loadToken());
        setLoaded(true);
      })();

  },[]);
  
  useEffect(() => {   
      if(!needLogin) {
        console.log("DISPATCHING GET USER IN APP!!!")
        dispatch(getUser());
      }
  },[needLogin]);

  if(!loaded) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/login" component={SignupPage} />
          <Route exact={true} path="/artist-signup" component={ArtistSignupPage} />
          <PrivateRoute 
            path="/"
            exact={true}
            needLogin={needLogin}
            component={Homepage}
          />
          <PrivateRoute 
            path="/albums/:id"
            exact={true}
            needLogin={needLogin}
            component={AlbumPageContainer}
          />
          <PrivateRoute 
            path={`/${userName}`}
            exact={true}
            needLogin={needLogin}
            component={FanEditPageContainer}
          />
          <PrivateRoute 
            path="/dashboard/"
            exact={true}
            needLogin={needLogin}
            component={DashboardContainer}
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
