import React from 'react';

const WidgetList = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Сообщение от пользователя 1</li>
        <li>Сообщение от пользователя 2</li>
        <li>Сообщение от пользователя 3</li>
      </ul>
    );
  }
});

export default WidgetList;
