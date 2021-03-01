import React from 'react';

import './Styles/layout.css';
function Layout(props) {

  return (
    <div className="layo">
      {props.children}
    </div>
  );
}

export default Layout;