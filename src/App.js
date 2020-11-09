import React, { useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import Nav from './components/Nav';
// import ArtistPage from './components/ArtistPage';
// import ArtistSignupPage from './components/ArtistSignupPage';
import AlbumPageContainer from './components/AlbumPageContainer';
import LoginPage from './components/LoginPage';
// import FanEditPage from './components/FanEditPage';
import FanEditPageContainer from './components/FanEditPageContainer';
import { loadToken } from './store/actions/authentication';
import { USER_ID } from './store/actions/authentication';
import { USER_NAME } from './store/actions/authentication';
import { getUser } from "./store/actions/user";
import { getFollowing } from './store/actions/follows';

const App = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  // const followsList = useSelector((state) => state.follows.list)
  // const user = useSelector((state) => state.user.data);
  const userId = localStorage.getItem(USER_ID);
  const userName = localStorage.getItem(USER_NAME);
  
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  
  // console.log("USER ID", userId);
  useEffect(() => {   
        (async () => {
          await dispatch(loadToken());
          setLoaded(true);
        })();
  },[]);
  
//   useEffect(() => {
//     console.log("DISPATCHING GET USER!!!")
//     dispatch(getUser(userId));
// }, [userId]);

//   useEffect(() => {
//     console.log("DISPATCHING GET FOLLOWING!!!")
//     dispatch(getFollowing(userId));
// }, [userId]);
 


  if(!loaded) {
    return null;
  }
  console.log("IN APP!!!");

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
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
