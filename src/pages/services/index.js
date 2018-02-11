import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { VertCentRow, Icon } from '../../shared';
import lawn from '../../img/manicured-lawn1.jpg';
import leaves from '../../img/leaves.svg';
import grass from '../../img/grass.svg';
import thumb from '../../img/thumbsup.svg';
import flowers from '../../img/flowers.svg';

const LilIcon = ({ src, style, text }) => (
  <span className="lilicon">
    <span>
      <img alt={text} src={src} />
    </span>
    <span style={{display:'none'}}>{ text }</span>
  </span>
)

module.exports = ()=>(
  <main role="main" id="services">
    <Container className="hero" fluid style={{ background: `url(${lawn})`, backgroundSize: 'cover' }}>
      <VertCentRow style={{ paddingTop: '50px' }}>
        <h1 className="hero-title">
          Meet Our <nobr>5-Star</nobr> Services
        </h1>
      </VertCentRow>
      <VertCentRow style={{ marginTop: 0}}>
        <div className="lil-icons">
            <LilIcon src={flowers} text="flower bedding" />
            <LilIcon src={grass} text="mowing" />
          <nobr>
            <LilIcon src={leaves} text="leaf pickup" />
            <LilIcon src={thumb} text="green thumbery" />
          </nobr>
        </div>
      </VertCentRow>
      <VertCentRow>
        <h2 className="hero-subtitle"> We provide a range of services for your commercial and residential needs, no job is too big or too small</h2>
      </VertCentRow>
    </Container>
    <Container fluid={true}>
      <Row>
        <Col className="section1" xs={12} sm={12} md={6}>
          <section>
            <h3>
              We specialize in
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ullamcorper eros. Quisque hendrerit, magna a condimentum dignissim, arcu nulla malesuada nulla, dignissim euismod utrum orci. Ut vel massa ut nulla pulvinar tincidunt at ut ante.</p>
            <p>
              Duis accumsan vestibulum ex, quis venenatis dolor semper nec. Quisque suscipit ex eu varius cursus. am lectus. Aenean sagittis efficitur ligula nec malesuada. Morbi vel ex odio. Suspendisse imperdiet quis quam eu mattis.

            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ligula id magna laoreet dictum ac eu arcu. Nunc vitae ex purus. Maecenas posuere scelerisque lacus sit amet interdum. Curabitur congue suscipit t interdum sem elit, sed tincidunt tortor maximus nec.

            </p>
          </section>
        </Col>
        <Col xs={12} sm={12} md={6}>
          2.
        </Col>
      </Row>
    </Container>
  </main>
)
