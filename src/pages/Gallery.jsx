import React, {useEffect} from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

import Subtitle from "../shared/Subtitle";

import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      {/* ========Gallery section======= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>


      {/* ========Testimonial section======= */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/>
    </>
  );
}

export default Gallery;
