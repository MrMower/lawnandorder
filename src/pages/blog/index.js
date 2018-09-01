import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { VertCentRow, Icon } from '../../shared';
import steven from '../../img/steven1-200.jpg';

const TinyIcon = ({ src, style }) => (
  <span className="tinyicon">
    <img style={ style } src={src} />
  </span>
)

const LilIcon = ({ src, style, text }) => (
  <span className="lilicon">
    <span>
      <img alt={text} src={src} />
    </span>
    <span style={{display:'none'}}>{ text }</span>
  </span>
)
//<div className="img" style={{ backgroundImage: `url(${steven})` }} />
const posts = [
  {title: "Time to water ur lawn boyz",
    date: "28 May 2018",
    summary: "Summer is here! Time to hose down those awesome green blades in your front yard, how much and how frequently is the question ..."},
  {title: "Time to water ur lawn boyz",
    date: "28 May 2018",
    summary: "Summer is here! Time to hose down those awesome green blades in your front yard, how much and how frequently is the question ..."},
  {title: "Time to water ur lawn boyz",
    date: "28 May 2018",
    summary: "Summer is here! Time to hose down those awesome green blades in your front yard, how much and how frequently is the question ..."}

];


const Post = ({ title, date, summary })=>(
  <div>
    <Row>
      <Col><h3>{ title }</h3></Col>
    </Row>
    <Row>
      <Col><sub>{ date }</sub></Col>
    </Row>
    <Row>
      <Col><p>{ summary }</p></Col>
    </Row>
  </div>)

const Page = ()=>(
  <main role="main" id="blog">
    <Container fluid={true}>
      <Row>
        <Col className="section1">
          <section>
            <h2 className="section-head">
              <TinyIcon src={steven}  />
              <span className="section-title">Lawn care tips by Steven Slaminka, your lawn and order specialist and ceo</span>
            </h2>
          </section>
        </Col>
      </Row>
    </Container>
    <Container>
      { posts.map( p => <Post { ...p } /> ) }
    </Container>
  </main>
)
export default Page;
