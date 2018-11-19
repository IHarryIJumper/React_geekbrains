import React, { Component } from "react";

import Menu, {SubMenu, MenuItem} from 'rc-menu';
//import './Menu.css';

class ContextMenu extends Component {
  render() {
    return (
      <Menu>
        <MenuItem>Cats</MenuItem>
        <SubMenu title="Lions">
          <MenuItem></MenuItem>
        </SubMenu>
        <MenuItem>Dogs</MenuItem>
      </Menu>
    );
  }
}

export default ContextMenu;
