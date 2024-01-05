import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import List from './components/List/List';



const Ebay = () => {

  const [data,setData] = useState([]);

  useEffect(()=>{
    const getData = ()=>{
      fetch('https://dummyjson.com/carts')
.then(res => res.json())
.then(data => setData[data.results])
.catch(error => console.log(error));
    }
getData();
  }, [])
  console.log(data)
  return (
    <div>
<List data = {data}/>



      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" className='toggle' />
          <Navbar.Collapse id="navbarScroll">
            <Image src={process.env.PUBLIC_URL + '/images/Frame.png'} alt="" className=" align-top" id='logoEbay' />

            {/* searchInput */}
            <InputGroup className=" searchInput">
              <DropdownButton
                variant="outline-secondary"
                title="All catagories"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Form.Control aria-label="Text input with dropdown button" />
              <Button variant="primary">Search</Button>{' '}
            </InputGroup>



            <Image src={process.env.PUBLIC_URL + '/images/heart.png'} alt="" className=" align-top" id='iconNav' />
            <Image src={process.env.PUBLIC_URL + '/images/Ellipse.png'} alt="" className=" align-top" id='dartNav1' />
            <p className='nameNav'>Wishlist</p>
            <Image src={process.env.PUBLIC_URL + '/images/shopping.png'} alt="" className=" align-top" id='iconNav' />
            <Image src={process.env.PUBLIC_URL + '/images/Ellipse.png'} alt="" className=" align-top" id='dartNav2' />
            <p className='nameNav' >My cart</p>
            <p className='nameNavPrice' >$21</p>

            <Image src={process.env.PUBLIC_URL + '/images/PhotoNav.png'} alt="" className=" align-top" id='PhotoNav' />

            <NavDropdown title="" className='DropNav' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Button variant="primary" className='butonCatagories'>Brown all catagories</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>











      <Container fluid className='likeHeader'>
        <Row>
          <Col xs lg="2" > </Col>

          <Col md="auto" className='colHeader'>
            <div style={{ position: 'relative' }}>
              <Image src={process.env.PUBLIC_URL + '/images/Group25.png'} alt="" className="align-top " id='imgHeader imgHeader1' />
              <Image src={process.env.PUBLIC_URL + '/images/arrowblue.png'} alt="" className="align-top" id='imgHeader imgHeader2' style={{ position: 'absolute', top: '6px', left: '8px' }} />
            </div>
            <p className='textHeader textHeader1'>Back to previous page | Listed in category: </p>
            <p className='textHeader textHeader2'>Cell Phones & Accessories</p>
            <p className='textHeader textHeader3'>Cell Phones & Smartphones</p>
          </Col>
        </Row>
      </Container>
      <hr className='hrHeader'></hr>










      <Container fluid>
        <Row className='rowApple mt-5'>
          <Col>
            <Image src={process.env.PUBLIC_URL + '/images/Rectangle23.png'} alt="" className="align-top" id='backgroudBox' style={{ position: 'absolute', top: '', left: '7%' }} />
          </Col>


          <Col className='iphone'>
            <Row className='align-items-center'>
              <Col>
                <p className='infoIphone'>Apple iPhone 13 (128GB)</p>
              </Col>
              <Col>
                <Button className='Starlight' style={{ width: '100px', backgroundColor: 'light-blue', color: 'white' }}>Starlight</Button>
              </Col>
            </Row>

            <Row>
              <p className='shortInfo'>Free 2 Days Shipping | 1 Year Warranty</p>
            </Row>




            <Row className='d-flex'>
              <Col>
                <Image src={process.env.PUBLIC_URL + '/images/Star01.png'} alt="" className="align-top" id='star01' style={{ position: '', top: '', left: '%', height: '25px', width: '45px' }} />
                <Image src={process.env.PUBLIC_URL + '/images/Star01.png'} alt="" className="align-top" id='star01' style={{ position: '', top: '', left: '%', height: '25px', width: '45px' }} />
                <Image src={process.env.PUBLIC_URL + '/images/Star01.png'} alt="" className="align-top" id='star01' style={{ position: '', top: '', left: '%', height: '25px', width: '45px' }} />
                <Image src={process.env.PUBLIC_URL + '/images/Star01.png'} alt="" className="align-top" id='star01' style={{ position: '', top: '', left: '%', height: '25px', width: '45px' }} />
                <Image src={process.env.PUBLIC_URL + '/images/Star5.png'} alt="" className="align-top" id='star01' style={{ position: '', top: '', left: '%', height: '25px', width: '45px' }} />
              </Col>
              <Col className='point '> <p>4.5 </p></Col>
              <Col className='reviews ' style={{ maxWidth: '100%' }}> <p className='textReviews'>from 392 Reviews</p> </Col>
            </Row>




            <Row >
              <Col><p className='dollar'>$</p></Col>
              <Col><p className='five100'>500</p></Col>
            </Row>



            <Row>
              <Col>
                <Image src={process.env.PUBLIC_URL + '/images/check.png'} alt="" className="align-top" id='' style={{ position: '', top: '', left: '%', height: '', width: '' }} />
              </Col>
              <Col>
                <p className='freeReturn'>Free Return</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={process.env.PUBLIC_URL + '/images/check.png'} alt="" className="align-top" id='' style={{ position: '', top: '', left: '%', height: '', width: '' }} />
              </Col>
              <Col>
                <p className='freeReturn'>Chat with us 24 hours</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={process.env.PUBLIC_URL + '/images/check.png'} alt="" className="align-top" id='' style={{ position: '', top: '', left: '%', height: '', width: '' }} />
              </Col>
              <Col>
                <p className='freeReturn'>Comes with a Package</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={process.env.PUBLIC_URL + '/images/check.png'} alt="" className="align-top" id='' style={{ position: '', top: '', left: '%', height: '', width: '' }} />
              </Col>
              <Col>
                <p className='freeReturn'>Comes with a Package</p>
              </Col>
            </Row>




            <Row>
              <p className='commentIphone'>1,241 Sold in the last 24 hours</p>
            </Row>


            <Row className='rowLast mt-5'>
              <Col>
                <Button variant="primary" size="lg" active style={{ backgroundColor: '', width: '65%', height: '70%' }}>
                  <p> Buy it now</p>
                </Button>
              </Col>
              <Col>
                <Button className='addToCard' size="lg" active style={{ backgroundColor: 'lightblue', width: '65%', height: '70%', border: 'none' }}>
                  <p>Add to Cart</p>
                </Button>
              </Col>
            </Row>


          </Col>
        </Row>
      </Container>








      <Container fluid className=''>
        <div className='d-flex buttonsHorizontal'>
          <p className='buttonH'>About</p>
          <p className='buttonH'>Shipping</p>
          <p className='buttonH'>Reviews</p>
          <p className='buttonH'>Returns</p>
        </div>
      </Container>








      <Container fluid className='mt-5 fontIphone'>
        <Row>
          <Col>
          <Container className='backIphone ml-auto d-flex align-items-center' style={{ height: '300px', width: '300px' }}>
  <Image src={process.env.PUBLIC_URL + '/images/camera.png'} alt="" className="align-top" id='camera' 
    style={{ position: 'relative', top: '25%', left: '54%', transform: 'translate(-50%, -50%)', height: 'auto', width: '100%' }} />
</Container>

          </Col>
          <Col xs={6}>
            <p>
              15 cm (6.1-inch) Super Retina XDR display <br></br>
              Cinematic mode adds shallow depth of field and shifts focus automatically in your videos <br></br>
              Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, <br></br> Night mode, 4K Dolby Vision HDR recording<br></br>
              12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording<br></br>
              A15 Bionic chip for lightning-fast performance<br></br>
              Up to 19 hours of video playback<br></br>
              Durable design with Ceramic Shield<br></br>
              Industry-leading IP68 water resistance<br></br>
              iOS 15 packs new features to do more with iPhone than ever before<br></br>
              Supports MagSafe accessories for easy attachment and faster wireless charging<br></br>
            </p>
          </Col>
          <Col></Col>
        </Row>

<h1 className='itemsS'>Smiliar sponsored items</h1>
      </Container>











<Container fluid className='mt-5'>
  <Row className='belowArray'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Row>
</Container>















<Container fluid className='Footer'>
  <Row className="justify-content-center">
    <hr className='lineBelow w-80'></hr>
  </Row>
  <Row>
    <Col className="text-center">
      <Image src={process.env.PUBLIC_URL + '/images/Frame.png'} alt="" className="align-top" id='logoFooter' />
    </Col>
    <Col>
    <p className='titleFooterOne'>Account</p>
    <p className='titleFooterBelow'>Wishlist</p>
    <p className='titleFooterBelow'>Cart</p>
    <p className='titleFooterBelow'>Track Order</p>
    <p className='titleFooterBelow'>Shipping Details</p>
    </Col>
    <Col>
    <p className='titleFooterOne'>Useful links</p>
    <p className='titleFooterBelow'>About Us</p>
    <p className='titleFooterBelow'>Conact</p>
    <p className='titleFooterBelow'>Hot deals</p>
    <p className='titleFooterBelow'>Promotions</p>
    <p className='titleFooterBelow'>New products</p>
    </Col>
    <Col>
    <p className='titleFooterOne'>Help Center</p>
    <p className='titleFooterBelow'>Payments</p>
    <p className='titleFooterBelow'>Refund</p>
    <p className='titleFooterBelow'>Checkout</p>
    <p className='titleFooterBelow'>Shipping</p>
    <p className='titleFooterBelow'>Q&A</p>
    <p className='titleFooterBelow'>Privacy Policy</p>
    </Col>
  </Row>
  <hr></hr>
  <Row>
        <Col md={4}>
          <p className='lastFooterBelow' >© 2022, All rights reserved</p>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
        <Image src={process.env.PUBLIC_URL + '/images/Payment.png'} alt="" className="align-top" id='' />

        </Col>
      </Row>
</Container>





    </div>
  )
}

export default Ebay