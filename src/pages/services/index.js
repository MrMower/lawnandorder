import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { VertCentRow, Icon } from '../../shared';
import mower from '../../img/mower.svg';
import leaf from '../../img/leaf.svg';
import lawn from '../../img/manicured-lawn1.jpg';
import leaves from '../../img/leaves-mono.svg';
import grass from '../../img/grass-mono.svg';
import thumb from '../../img/thumbsup-mono.svg';
import flowers from '../../img/flowers-mono.svg';
import star from '../../img/star.svg';

const TinyIcon = ({ src, style }) => (
  <span className="tinyicon">
    <img style={ style } src={src} />
  </span>
)

const serviceCardData = [
  { text:"Mowing" , subtext:"Weekly, Bi-Weekly & Monthly scheduling available"  },
  { text:"Landscaping" , subtext:"Let us add the nice touch" },
  { text:"Spring & Fall cleanup" , subtext:"Leaves and such" },
  { text:"Tree trimming and Pruning" , subtext:"Branches mannnn...."  },
  { text:"Call now!"  }];

const ServiceCard  = ({ style, text, subtext }) =>(

  <div style={style} className="service-card">
    <h4>{ text }</h4>
    <br/>
    <span>{ subtext }</span>
  </div>
)
const LilIcon = ({ src, style, text }) => (
  <span className="lilicon">
    <span>
      <img alt={text} src={src} />
    </span>
    <span style={{display:'none'}}>{ text }</span>
  </span>
)

const Page = ()=>(
  <main role="main" id="services">
    <Container className="hero" fluid style={{}}>
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
        <h2 className="hero-subtitle"> We provide a range of services for your commercial and residential needs. <br /> <i>No job is too big or too small!</i></h2>
      </VertCentRow>
    </Container>
    <Container fluid={true}>
      <Row>
        <Col className="section1">
          <section>
            <h3 className="section-head">
              <TinyIcon src={grass}  />
              <span className="section-title"><nobr>We specialize in ...</nobr> </span>
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
      </Row>
      <Row>
        <Col className="column2 section2">
          <section>
            <h3 className="section-head">
              <TinyIcon src={thumb}  />
              <span className="section-title" >Our services include ...</span>
            </h3>

            <div className="service-cards">
              { serviceCardData.map(ServiceCard) } 
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  </main>
)
export default Page;
