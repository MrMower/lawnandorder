import React from 'react';
import PropTypes from 'prop-types';
//import Link from 'gatsby-link';
import Helmet from 'react-helmet';
//import { primary } from '../styles/colors';
//import { light } from '../styles/text';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import LeafIcon from '../img/svg-component/leaf.svg';
import './styles.scss';
import { phoneNumber } from '../data/anything.json';

/* function LeafIcon(props){
  let style =  props.style || {}
  return (<img src={leafIcon} 
  style={{ ...style, width: "30px", padding: 0, marginBottom: '10px', height: "30px" }}/>)
}*/

const linkConfig = [['Contact Us',"#contact-us"]];

const NavPage = ([label, href]) => (<NavItem><NavLink href={href}>{ label }</NavLink></NavItem>);

const NavPageLinks = ({ links }) => (<Nav className="ml-auto" navbar> { links.map(NavPage) } </Nav>);


class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  /*
        <NavbarToggler onClick={ this.toggle.bind(this) } />
        <Collapse isOpen={this.state.isOpen} navbar>
          <NavPageLinks links={ linkConfig } />
        </Collapse>

*/

  render() {
    return (
      <Navbar dark expand="md" fixed="top" className="bg-dark">
        <NavbarBrand href="/"><LeafIcon className="leafIcon" /> Lawn and Order</NavbarBrand>
        <div style={{ 'color': '#FFF' }}><a id="etphonehome" href={`tel:${phoneNumber}`}>{`${phoneNumber}`}</a></div>
        <NavPageLinks links={ linkConfig } />
      </Navbar>
    );
  }
}

const title = "Lawn and Order Landscaping";
const description = 'Your neighborhood lawn care specialist providing you with a solution to all of your business or residential lawn care and landscaping needs. We provide fast, friendly, dependable and affordable service. Proudly serving Mentor, Lake Country and all of North Eastern Ohio';
const TemplateWrapper = ({ children }) => (<div>
  <Helmet
    title={title}
    meta={[
      {
        name: 'google-site-verification', 
        content:'jMLMhA1MsaE7dX3YIFJpWNjgfiT8dYetAydAcAgvAzY'
      },
      { name: 'description', content: description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'og:title', content: title },
      { name: 'og:image', content: 'https://lawn-and-order.com/lawn-and-order-ohio.jpg' },
      { name: 'og:description', content: description },
      { name: 'og:type', content: 'website' },
    ]}
  />
  <Navigation />
  <div
    style={{
    }}
  >
    { children() }
  </div>
</div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};


export default TemplateWrapper;

