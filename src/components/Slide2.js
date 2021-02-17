import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Osudh1 from '../images/osudh1.JPG'
import Osudh2 from '../images/osudh2.JPG'


const Slide2 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '40vh', width: '70%' }}
            className='d-block w-100'
            src={Osudh1}
            alt='First slide'
          />

          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '50vh', width: '100%' }}
            className='d-block w-100'
            src={Osudh2}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '50vh', width: '100%' }}
            className='d-block w-100'
            src={Osudh1}
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

export default Slide2
