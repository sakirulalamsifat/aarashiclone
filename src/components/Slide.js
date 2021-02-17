import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide from '../images/slide.PNG'
import slide2 from '../images/slide2.JPG'
import slide3 from '../images/slide3.JPG'

const Slide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '50vh', width:'100%' }}
            className='d-block w-100'
            src={slide}
            alt='First slide'
          />

          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '50vh', width:'100%' }}
            className='d-block w-100'
            src={slide2}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '50vh', width:'100%'  }}
            className='d-block w-100'
            src={slide3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slide
