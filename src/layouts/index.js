import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { primary } from '../styles/colors';
import { light } from '../styles/text';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import LeafIcon from '../img/svg-component/leaf.svg';
import './styles.scss';
import { phoneNumber } from '../data/anything.json';

/*function LeafIcon(props){
  let style =  props.style || {}
  return (<img src={leafIcon} style={{ ...style, width: "30px", padding: 0, marginBottom: '10px', height: "30px" }}/>)
}*/

const linkConfig = [ 
  [ 'Services','/services'], 
  [ 'Contact', '/contact'], 
  [ 'About Us','/about-us' ], 
  [ 'Careers', '/careers'] 
];

const NavPage = ([label, href]) => (<NavItem><NavLink href={href}>{ label }</NavLink></NavItem>)

const NavPageLinks = ({links}) => (<Nav className="ml-auto" navbar> { links.map(NavPage) } </Nav>)


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
        <NavbarBrand href="/"><LeafIcon className="leafIcon"/> Lawn and Order</NavbarBrand>
        <div style={{"color":"#FFF"}}><a id="etphonehome" href={`tel:${phoneNumber}`}>{`${phoneNumber}`}</a></div>
        <NavbarToggler onClick={ this.toggle.bind(this) } />
        <Collapse isOpen={this.state.isOpen} navbar>
          <NavPageLinks links={ linkConfig } />
        </Collapse>
      </Navbar>
    );
  }
}


const TemplateWrapper = ({ children }) => {
  return (
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
        {  children() }
      </div>
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};



export default TemplateWrapper;


