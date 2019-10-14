import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import AdminNavbar from '../components/Navbars/AdminNavbar';
import Footer from '../components/footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
// import FixedPlugin from '../components/FixedPlugin/FixedPlugin.jsx';

import { style } from '../components/variables';

import routes from '../routes';

// import image from 'assets/img/sidebar-3.jpg';
const image = 'assets/img/sidebar-3.jpg';

/**
 * Layout from https://github.com/creativetimofficial/light-bootstrap-dashboard-react
 */
class AdminLayout extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image,
      color: 'black',
      hasImage: true,
      fixedClasses: 'dropdown show-dropdown open',
    };
  }
  handleNotificationClick = position => {
    const color = Math.floor(Math.random() * 4 + 1);
    let level;
    switch (color) {
      case 1:
        level = 'success';
        break;
      case 2:
        level = 'warning';
        break;
      case 3:
        level = 'error';
        break;
      case 4:
        level = 'info';
        break;
      default:
        break;
    }
    this.state._notificationSystem.addNotification({
      title: <span data-notify='icon' className='pe-7s-gift' />,
      message: (
        <div>
          Bạn đã đăng nhập <b>Hệ thống xếp hàng, đặt chỗ từ xa</b> - sử dụng Smart QMS.
        </div>
      ),
      level,
      position,
      autoDismiss: 15,
    });
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  }
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path,
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  }
  handleImageClick = image => {
    this.setState({ image });
  }
  handleColorClick = color => {
    this.setState({ color });
  }
  handleHasImage = hasImage => {
    this.setState({ hasImage });
  }
  handleFixedClick = () => {
    if (this.state.fixedClasses === 'dropdown') {
      this.setState({ fixedClasses: 'dropdown show-dropdown open' });
    } else {
      this.setState({ fixedClasses: 'dropdown' });
    }
  }
  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    const _notificationSystem = this.refs.notificationSystem as any;
    const color = Math.floor(Math.random() * 4 + 1);
    let level;
    switch (color) {
      case 1:
        level = 'success';
        break;
      case 2:
        level = 'warning';
        break;
      case 3:
        level = 'error';
        break;
      case 4:
        level = 'info';
        break;
      default:
        break;
    }
    _notificationSystem.addNotification({
      title: <span data-notify='icon' className='pe-7s-gift' />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level,
      position: 'tr',
      autoDismiss: 15,
    });
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
    }
    if (e.history.action === 'PUSH') {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      (this.refs.mainPanel as any).scrollTop = 0;
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <NotificationSystem ref='notificationSystem' style={style} />
        <Sidebar {...this.props} routes={routes} image={this.state.image}
          color={this.state.color}
          hasImage={this.state.hasImage} />
        <div id='main-panel' className='main-panel' ref='mainPanel'>
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Footer />
          {/* <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleHasImage={this.handleHasImage}
            bgColor={this.state['color']}
            bgImage={this.state['image']}
            mini={this.state['mini']}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          /> */}
        </div>
      </div>
    );
  }
}

export default AdminLayout;
