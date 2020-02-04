import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    return (
      <>
        <Toolbar clicked={this.sideDrawerToggler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          opened={this.sideDrawerOpenHandler}
          closed={this.sideDrawerClosedHandler}
        />

        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
