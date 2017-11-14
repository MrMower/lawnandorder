import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { primary } from '../styles/colors';
import { light } from '../styles/text';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import leafIcon from '../img/leaf.svg';
import './bootstrap.scss';

function LeafIcon(props){
  let style =  props.style || {}
  return (<img src={leafIcon} style={{ ...style, width: "30px", padding: 0, marginBottom: '10px', height: "30px" }}/>)
}

class Navigation extends React.Component {

  constructor(props) {
    super(props);

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
      <Navbar dark expand="md" fixed="top" className="bg-dark">
        <NavbarBrand href="#"><LeafIcon /> Lawn and Order</NavbarBrand>
        <div style={{"color":"#FFF"}}><a href="tel:440-476-3275">440-476-3275</a></div>
        <NavbarToggler onClick={ this.toggle.bind(this) } />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Lawn and Order"
      meta={[
        { name: 'description', content: 'north-east ohio landscaping services and lawn-care' },
        {/* name: 'keywords', content: 'sample, something' */},
      ]}
    />
    <Navigation />
    <div
      style={{
      }}
    >
      {children()}
    </div>
  </div>
);


TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
