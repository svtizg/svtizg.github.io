import React from 'react';
import { Link } from 'react-router';

const UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li><Link to="users/2">Михаил Яндимиров</Link></li>
        <li><Link to="users/1">Михаил Фалалеев</Link></li>
        <li><Link to="users/3">Света Изгарева</Link></li>
        <li><Link to="users/4">Дмитрий Ничик</Link></li>
        <li><Link to="users/5">Павел Губин</Link></li>
      </ul>
    );
  }
});

export default UserList;
