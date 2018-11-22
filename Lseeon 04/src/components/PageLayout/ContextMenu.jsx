import React, { Component } from "react";

import Menu, {SubMenu, MenuItem} from 'rc-menu';
import './ContextMenu.scss';

class ContextMenu extends Component {
  render() {
    return (
      <Menu className="context-menu">
        <MenuItem>Cats</MenuItem>
          <SubMenu title="Lions"></SubMenu>
        <MenuItem>Dogs</MenuItem>
      </Menu>
    );
  }
}

export default ContextMenu;
