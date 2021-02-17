import React from 'react'
import './home.css'
import Slide from '../components/Slide'
import Slide2 from '../components/Slide2'
import balish1 from '../images/balish1.JPG'
import balish2 from '../images/balish2.JPG'
import Logo from '../images/Capture.JPG'
import Card from 'react-bootstrap/Card'
import Signs from '../images/sign.JPG'
import Gift from '../images/gift.JPG'
import Table from 'react-bootstrap/Table'
import Offer from '../images/offer.JPG'

const Home = () => {
  return (
    <div>
      <div className='navBar'>
        <div className='row'>
          <div className='headertopleft col-lg-7 col-md-8 col-sm-6 col-xs-4'>
            <div className='welcomeMsg'>
              <b>Welcome to Aarashi Online Store!</b> Wrap new offers / gift
              every single day on Weekends – New Coupon code: Happy2021
            </div>
          </div>
          <div className='headerRight col-lg-5 col-md-4 col-sm-6 col-xs-8'>
            <ul className='currency'>
              <li>
                <i class='fa fa-caret-down' style={{ marginRight: '5px' }}></i>
                BDT
                <span
                  style={{ borderLeft: '4px solid white', height: '5px' }}
                ></span>
              </li>
              <li>
                <i class='fa fa-user' style={{ marginRight: '5px' }}></i>User
                <span
                  style={{ borderLeft: '4px solid white', height: '5px' }}
                ></span>
              </li>
              <li>
                <i class='fa fa-users' style={{ marginRight: '5px' }}></i>Browse
                Sellers
                <span
                  style={{ borderLeft: '4px solid white', height: '5px' }}
                ></span>
              </li>
              <li>
                <i class='fa fa-caret-down' style={{ marginRight: '5px' }}></i>
                BDT
              </li>
            </ul>
          </div>

          <div className='col-md-7 firstlinks container'>
            <span>
              <img src={Logo} />
            </span>
            <ul className='links'>
              <li>
                <i class='fa fa-home'></i> HOME
              </li>
              <li>GROCERY</li>
              <li>SPECIAL</li>
              <li>BLOG</li>
              <li>SHOP</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className='col-md-5 col-sm-6 col-xs-8'>
            <ul className='links'>
              <li>
                <i class='fa fa-lock'></i>Login or Register |{' '}
              </li>
              <li>
                <i class='fa fa-phone-square'></i> |Hotline (+880)1 307 542 418{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className='inputBox'>
          <div className='row'>
            <div className='col-md-3 col-sm-3'>
              <div className='boxes'>
                <span>
                  <i class='fas fa-bars'></i>
                </span>
                <span>ALL CATAGORIES</span>
                <span>
                  <i class='fas fa-chevron-down'></i>
                </span>
              </div>
            </div>
            <div className='col-md-6 col-sm-6 inputs'>
              <select name='cars' id='cars' className='selector'>
                <option value='volvo'>All Category</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
              <input
                type='text'
                placeholder='Enter Your keyword'
                className='holder'
              ></input>

              <button type='submit' className='searchButton'>
                <i class='fa fa-search'></i>
              </button>
            </div>
            <div className='col-md-3 signin'>
              <img src={Signs} />
            </div>
          </div>
        </div>
      </div>
      <div className='carosoul'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='container'>
              <Card
                style={{
                  width: '18rem',
                  marginLeft: '150px',
                  height: '51vh',
                  position: 'sticky',
                }}
              >
                <Table className='lists'>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class='fas fa-gift'> </i>
                    </td>
                    <td>Industrial Parts & Tools</td>
                    <td>
                      <i class='fas fa-chevron-right'></i>
                    </td>
                  </tr>
                </Table>
              </Card>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 slide '>
            <Slide />
          </div>
          <div className='col-md-3 col-sm-4 col-xs-12'>
            <div className='pillow'>
              <img src={balish1} />
              <div className='overlay'></div>
            </div>
            <div className='pillow'>
              <img style={{ marginTop: '40px' }} src={balish2} />
              <div className='overlay2'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='gifts'>
        <div className='row'>
          <div className='container'>
            <div
              className='col-md-12 col-sm-12 col-xs-12 '
              style={{ marginTop: '10px', marginLeft: '69px' }}
            >
              <div className='promo'>
                <img src={Gift} />
                <div className='overlay3'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='last'>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-xs-12 '>
            <div className='offer'>
              <img src={Offer} style={{ width: '18rem' }} />
              <div className='overlay4'></div>
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-xs-12'>
            <div className='slide2' style={{ marginTop: '20px' }}>
              <Slide2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
