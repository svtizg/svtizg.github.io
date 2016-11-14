import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Home from './components/home';
import UserList from './components/user-list';
import UserProfile from './components/user-profile';
import WidgetList from './components/widget-list';
import LoginForm from './components/LoginForm';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="users">
        <Route component={SearchLayout}>
          <IndexRoute component={UserList} />
        </Route>
        <Route path=":userId" component={UserProfile} />
      </Route>

      <Route path="widgets">
        <Route component={SearchLayout}>
          <IndexRoute component={WidgetList} />
        </Route>
      </Route>
    </Route>
    <Route path="login" component={LoginForm}>
      // <Route path="/" component={LoginForm} />
    </Route>
  </Router>


  // <Router history={browserHistory}>
  //       <Route path="/" component={App}>
  //           <IndexRoute component={UserInfo} />
  //           <Route path="/photo" component={Photo}/>
  //           <Route path="/profile" component={UserInfo}/>
  //           <Route path="/info" component={Info}/>
  //           <Route path="/login" component={Login}/>
  //       </Route>
  //   </Router>,
);
