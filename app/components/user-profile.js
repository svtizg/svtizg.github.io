import React from 'react';

const UserProfile = React.createClass({
  render: function() {
    return (<h1>Профиль друга for ID: {this.props.params.userId}</h1>);
  }
});

export default UserProfile;