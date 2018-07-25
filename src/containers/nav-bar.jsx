import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../assets/img/bi-logo.svg";
import FacebookLink from "../components/facebook-link";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar expand="md" className="dark-blue-bg">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" width="auto" height="50px" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} color="white" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="pix-white pix-nav-link" href="/privacy/">
                Privacy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="pix-white pix-nav-link" href="/blog/">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="pix-white pix-nav-link" href="/contacts/">
                Contacts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="pix-white pix-nav-link small-social"
                href="#facebook"
              >
                <FacebookLink />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
