import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { VertCentRow, Icon } from '../../shared';
import leaves from '../../img/leaves.svg';
import grass from '../../img/grass.svg';
import thumb from '../../img/thumbsup.svg';
import flowers from '../../img/flowers.svg';

const LilIcon = ({ src, style, text }) => (
  <span className="lilicon" style={{ fontSize: "1.25em" }}>
    <span>
      <img alt={text} style={{ ...style
        , borderRadius: "50%"
        , padding: "5px"
        , marginLeft: "1em"
        , background: "#FFF"
        , marginRight: "1em"
        , boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.19)'
        , width: '8em'
        , height: '8em' }} src={src} />
    </span>
    <span style={{display:'none'}}>{ text }</span>
  </span>
)

module.exports = ()=>(
  <main role="main">
    <div style={{ paddingTop: '1rem' }}>
      <Container fluid style={{ background: "linear-gradient(110deg,#79BB3B, #52B775)", color: "#FFF", paddingTop: '1rem', paddingBottom: '5rem', textShadow: "2px 2px green" }}>
        <VertCentRow>
          <h1 style={{ fontWeight: 100, fontSize: '6em' }}>
            Meet Our 5-Star Services
          </h1>
        </VertCentRow>
        <VertCentRow>
          <h2 style={{ fontWeight: 250, fontSize: '1.75em', paddingLeft:'0.75em', lineHeight: '1.5em', paddingRight:'0.75em'  }}> We provide a range of services for your commercial and residential needs, no job is too big or too small</h2>
        </VertCentRow>
        <VertCentRow>
          <div style={{ width: '100%' }}>
            <LilIcon src={flowers} text="flower bedding" />
            <LilIcon src={grass} text="mowing" />
            <LilIcon src={leaves} text="leaf pickup" />
            <LilIcon src={thumb} text="green thumbery" />
          </div>
        </VertCentRow>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col style={{ background: "linear-gradient(to right, mintcream , white)" }} xs={12} sm={12} md={6}>
            <section style={{ padding: '10%' }}>
              <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                We specialize in
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ullamcorper eros. Quisque hendrerit, magna a condimentum dignissim, arcu nulla malesuada nulla, dignissim euismod urna quam quis ipsum. Aenean vulputate magna finibus, tincidunt mi vel, suscipit eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ut sollicitudin massa. Fusce tempor sagittis nibh, nec scelerisque ipsum malesuada eu. Donec et finibus nisi, a rutrum orci. Ut vel massa ut nulla pulvinar tincidunt at ut ante.</p>
              <p>
                Duis accumsan vestibulum ex, quis venenatis dolor semper nec. Quisque suscipit ex eu varius cursus. Integer egestas metus ac pellentesque dictum. Sed odio mauris, dictum ut felis ac, condimentum aliquam lectus. Aenean sagittis efficitur ligula nec malesuada. Morbi vel ex odio. Suspendisse imperdiet quis quam eu mattis.

              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ligula id magna laoreet dictum ac eu arcu. Nunc vitae ex purus. Maecenas posuere scelerisque lacus sit amet interdum. Curabitur congue suscipit arcu eget dignissim. Aliquam dolor nisl, interdum eu ante sed, cursus blandit nunc. Ut interdum sem elit, sed tincidunt tortor maximus nec.

              </p>
            </section>
          </Col>
          <Col xs={12} sm={12} md={6}>
            2.
          </Col>
        </Row>
      </Container>
    </div>
  </main>
)
