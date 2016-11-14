import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/lib/paper';

// const style = {
//   height: 300,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

// const PaperExampleSimple = () => (
//   <div>
//     <Paper zDepth={2} className="main"/>
//   </div>
// );

// export default PaperExampleSimple;

const MainLayout = React.createClass({
  render: function() {
    return (

      <div className="app">
        <Paper zDepth={2}>
          <Paper zDepth={3} className="left-panel">
            <div className="logo">
              <img src = "public/img/logo-white.png" width="200" align="center" />
              <div>Community for learning and sharing skills</div>
            </div>
            
            <ul>
              <li><Link to="/" activeClassName="active">Главная</Link></li>
              <li><Link to="/users" activeClassName="active">Мои друзья</Link></li>
              <li><Link to="widgets" activeClassName="active">Мои сообщения</Link></li>
              <li><Link to="login" activeClassName="active">Выход</Link></li>
            </ul>
          </Paper>
          <Paper zDepth={3} className="center-panel">
            {this.props.children}
          </Paper>
        </Paper>
      </div>
    );
  }
});

export default MainLayout;
