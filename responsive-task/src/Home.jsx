import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
                <Container >
                    <Image src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="Logo" className="d-inline-block align-top" id='logo' />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav navButtons">
                        <Nav className="me-auto d-flex justify-content-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About us</Nav.Link>
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Testimonial</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <ToggleButtonGroup type="checkbox" className='doubleButton' >
                        <ToggleButton id="tbg-btn-1" value={1} className="custom-toggle-button"  >
                            Contact
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-2" value={2} className="custom-toggle-button2"  >
                            Buy Online
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Container>
            </Navbar>
            <div className="App">
                <div className='container-fluid slogan'>
                    <h1 className='title'>Amazing furniture for <br></br>your home</h1>
                    <h4 className='title2'>We think the chair is the most important piece of
                        furniture in your home. Because if you love the chair
                        you are sitting in chances are you will love the rest
                        of the room.</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="197" height="230" viewBox="0 0 197 230" fill="none" className='arrow'>
                        <g clip-path="url(#clip0_1_59)">
                            <path d="M125.127 212.895C126.48 212.726 126.987 212.895 127.495 212.726C158.438 194.077 179.406 167.629 187.353 132.027C189.382 123.042 189.044 113.717 186.677 104.562C181.773 84.8965 165.371 71.3337 145.249 70.147C134.766 69.4688 124.62 70.6556 115.489 76.4198C114.813 81.3363 114.306 86.2528 113.291 90.8302C111.6 98.2897 107.711 104.393 100.778 108.123C95.7056 111.005 90.6328 111.005 87.9274 108.292C84.3764 104.732 84.3765 99.9851 86.5747 96.0858C89.6183 90.6607 93.3383 85.5746 97.2274 80.8276C99.7637 77.776 103.146 75.233 106.189 72.69C103.315 53.5326 85.2219 45.3949 63.5783 53.3631C62.9019 56.0756 62.2255 58.9577 61.38 61.6702C57.9982 71.6728 51.7419 79.3018 41.5964 82.8621C37.7073 84.2183 33.48 84.727 30.0982 81.1667C27.5618 78.4542 27.5618 73.7072 30.2673 68.9602C34.6637 61.5007 41.2582 56.2451 48.3601 51.6677C50.8964 50.1419 53.4328 48.6161 55.9692 47.2598C52.5873 17.5913 26.04 -3.43102 0 8.4364C0.169091 6.23245 -1.03306e-05 4.36757 0.676354 3.35036C1.52181 2.16362 3.38181 1.48549 4.90363 1.14642C19.2764 -1.56614 32.6346 0.129206 43.6255 10.6403C51.9109 18.4389 57.491 27.9329 61.211 38.7831C61.7183 40.3089 62.2255 41.8347 62.9019 43.3605C62.9019 43.5301 63.24 43.6996 63.9164 44.2082C65.4382 44.0387 67.2982 44.0387 69.1582 43.6996C91.8164 40.1394 103.653 46.2426 114.136 67.4344C116.166 66.7563 118.533 66.0781 120.731 65.2305C133.751 60.8226 146.771 60.4835 159.96 64.8914C181.435 72.0119 195.3 90.4911 196.822 113.887C197.667 126.602 195.469 138.808 190.904 150.676C179.744 179.327 161.482 201.875 134.089 216.625C132.736 217.473 131.215 218.151 129.862 218.998C129.693 219.168 129.524 219.507 129.016 220.524C134.766 221.88 140.177 221.372 145.587 221.033C150.829 220.863 156.24 220.355 161.989 220.016C161.482 224.423 159.115 226.119 156.24 227.136C152.858 228.153 149.477 229.509 146.095 229.679C136.964 230.018 127.664 230.188 118.364 229.679C111.093 229.17 109.064 225.271 112.276 219.337C119.209 206.792 126.311 194.246 133.413 181.701C134.596 179.666 136.118 177.971 137.978 175.597C141.191 179.327 139.838 182.04 138.655 184.583C133.92 193.738 129.693 202.893 125.127 212.895ZM35.1709 76.0807C46.8382 74.5549 54.1091 67.0954 54.6164 56.5842C46.8382 61.6702 39.3982 66.2477 35.1709 76.0807ZM92.3237 102.359C102.3 99.9851 107.035 93.2037 106.02 82.8621C99.5947 88.2872 94.0146 93.3732 92.3237 102.359Z" fill="#F66B0E" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_59">
                                <rect width="197" height="230" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <Image src={process.env.PUBLIC_URL + '/images/fontPhoto2.jpeg'} alt="Logo" className="d-inline-block align-top" id='fontPhoto2' />
                <InputGroup className="mb-3 inputForm">

                    <Form.Control
                        placeholder="Search your product"
                        aria-label="Username"
                        aria-describedby="basic-addon1"

                    />
                </InputGroup>


                <Container className='InfoPart'>
                    <Row>
                        <Col xs={6} className='leftSide'>
                            <h1 className='context1'>About us</h1>
                            <h4 className='context2'>Comfort is key and how you feel about your chair
                                will <br></br>affect how you feel and your mood.</h4>


                            <Row>
                                <Col xs={6}>
                                    <h4 className='number number1'>1</h4>
                                    <p className='baslik baslik1'>Mission</p>
                                    <p className='paragraph paragraph1'>It makes people at ease and feel like they want to open up.</p>
                                </Col>
                                <Col xs={6}>
                                    <h4 className='number number2'>2</h4>
                                    <p className='baslik baslik1'>Motivasyon</p>
                                    <p className='paragraph paragraph1'>The perfect mix of art that complements the room's style.</p>

                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <h4 className='number number3'>3</h4>
                                    <p className='baslik baslik1'>Vision</p>
                                    <p className='paragraph paragraph1'>Along with a healthy dose of negative space to give the eyes spots to rest.</p>
                                </Col>
                                <Col xs={6}>
                                    <h4 className='number number4'>4</h4>
                                    <p className='baslik baslik1'>Goal</p>
                                    <p className='paragraph paragraph1'>Art that has meaning to the people who live in the space,</p>

                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} className='rightSide'>
                            <Row>
                                <Col xs={6} >
                                    <Image src={process.env.PUBLIC_URL + '/images/Rectangle5.png'} alt="Logo" className="d-inline-block align-top kanape1" id='kanape ' />
                                    <Image src={process.env.PUBLIC_URL + '/images/Rectangle8.png'} alt="Logo" className="d-inline-block align-top kanape1" id='kanape' />

                                </Col>
                                <Col xs={6}>
                                    <Image src={process.env.PUBLIC_URL + '/images/Rectangle6.png'} alt="Logo" className="d-inline-block align-top" id='kanape' />
                                    <Image src={process.env.PUBLIC_URL + '/images/Rectangle7.png'} alt="Logo" className="d-inline-block align-top" id='kanape' />

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <h4 className='partProducts'>Products</h4>
                <Row>
                    <div className='butonsSeven'>
                        <Button variant="outline-secondary" className='buttonsProducts' style={{ border: 'none', backgroundColor: '' }}>All</Button>{' '}
                        <Button variant="outline-secondary" className='buttonsProducts' style={{ border: 'none' }}>Chair</Button>{' '}
                        <Button variant="outline-secondary" className='buttonsProducts' style={{ border: 'none' }}>Table</Button>{' '}
                        <Button variant="outline-secondary" className='buttonsProducts' style={{ border: 'none' }}>Bed</Button>{' '}
                        <Button variant="outline-secondary" className='buttonsProducts' style={{ border: 'none' }}>Closet</Button>{' '}
                        <Button variant="outline-secondary" className='buttonsProducts' style={{ border: 'none' }}>Sofa</Button>{' '}
                        <Button variant="outline-secondary" className='buttonsProducts' style={{ border: 'none' }}>Cabinet</Button>{' '}
                    </div>
                </Row>



                <Container className="shop mt-5">
                    <div className='container-fluid'>
                        <Row className='rowProduct1'>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>

                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture6.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Stool</p>
                                    <p className='priceFurniture'>$200</p>
                                </Container>

                            </Col>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>
                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture8.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Tea table</p>
                                    <p className='priceFurniture'>$200</p>

                                </Container>


                            </Col>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>
                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture5.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Sofa-Light</p>
                                    <p className='priceFurniture'>$200</p>

                                </Container>


                            </Col>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>
                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture4.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Sofa-Dark</p>
                                    <p className='priceFurniture'>$200</p>

                                </Container>


                            </Col>
                        </Row>
                        <Row className='rowProduct2 mt-5'>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>
                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture7.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Table lamp</p>
                                    <p className='priceFurniture'>$200</p>


                                </Container>

                            </Col>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>
                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture2.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Light chair</p>
                                    <p className='priceFurniture'>$200</p>

                                </Container>


                            </Col>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>
                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture1.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Bedside table</p>
                                    <p className='priceFurniture'>$200</p>

                                </Container>


                            </Col>
                            <Col xs={3} onClick={
                                () => { navigate("/Ebay") }}>
                                <Container className='boxProduct'>
                                    <Image src={process.env.PUBLIC_URL + '/images/furniture3.png'} alt="" className="d-inline-block align-top" id='furniture' />
                                    <Image src={process.env.PUBLIC_URL + '/images/arrow-right.png'} alt="" className="d-inline-block align-top" id='arrowProduct' />
                                    <p className='nameFurniture'>Chair </p>
                                    <p className='priceFurniture'>$200</p>

                                </Container>



                            </Col>
                        </Row>
                    </div>
                </Container>




                <div className='container-fluid customers'>
                    <h3 className='titleCustomer'>What do customers say...</h3>
                    <Row>


                        <Col xs={6} className='oneOfTwo'>
                            <Image src={process.env.PUBLIC_URL + '/images/personImage.png'} alt="Logo" className="d-inline-block align-top float-left" id='personImage' />
                            <Image src={process.env.PUBLIC_URL + '/images/Star1.png'} alt="Logo" className="d-inline-block align-top float-left" id='star' />
                        </Col>
                        <Col xs={6} className='twoOfTwo'>
                            <Image src={process.env.PUBLIC_URL + '/images/quote-up.png'} alt="Logo" className="d-inline-block align-top float-left" id='quote-up' />
                            <h2 className='servise'>Amazing servise</h2>
                            <p className='comment'>Since the online marketplace can be a scary place,<br></br> the  presence
                                of customer reviews on an online store helps<br></br> establish authenticity,
                                confidence, and trust among <br></br>shoppers. </p>
                            <p className='nameOfCustomer'>Wade Warren</p>
                            <p className='titleOfCustomer'>Doctor</p>
                        </Col>
                    </Row>


                </div>

                <div className='container-fluid contact'>
                    <Row>


                        <Col xs={6} className='oneOf2'>
                            <Image src={process.env.PUBLIC_URL + '/images/Rectangle04.png'} alt="Logo" className="d-inline-block  cImg" id='Rectangle04' />
                            <Image src={process.env.PUBLIC_URL + '/images/Rectangle03.png'} alt="Logo" className="d-inline-block   cImg" id='Rectangle03' />
                            <Image src={process.env.PUBLIC_URL + '/images/Rectangle02.png'} alt="Logo" className="d-inline-block   cImg" id='Rectangle02' />
                            <Image src={process.env.PUBLIC_URL + '/images/Rectangle01.png'} alt="Logo" className="d-inline-block  cImg" id='Rectangle01' />
                        </Col>
                        <Col xs={6} className='twoOf2'>
                            <h3 className='contactUs'>Contact us</h3>
                            <p className='commentContact'>Our team would love to hear from you! </p>


                            <Row className="g-2 form1">
                                <Col md>
                                    <FloatingLabel controlId="floatingInputGrid" label="First name" className='formLabel'>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingInputGrid" label="Last name" className='formLabel'>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </Col>
                            </Row>



                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Email"
                                className="mb-3 form2  formLabel formLabel1"

                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Message" className='formLabel'>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '250px' }}

                                />
                            </FloatingLabel>

                            <div className="d-grid gap-2 mt-3">
                                <Button size="lg" className='sendMessage'>
                                    Send message
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='container-fluid footer'>
                    <Container className='footerContainer'>
                        <Row>
                            <Col xs={{ order: 'first' }}>
                                <Image src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="Logo" className="d-inline-block" id='footerLogo' />
                                <p className='footerContext mt-4'>4517 Washington Ave. <br></br> Manchester, Kentucky 39495</p>

                            </Col>
                            <Col xs>
                                <p className='labelFooter'>Quick links</p>
                                <p className='footerContext'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                <p className='footerContext'>Galery</p>
                                <p className='footerContext'>Buy online</p>
                            </Col>
                            <Col xs={{ order: 'first' }}>
                                <p className='labelFooter'>Policy</p>
                                <p className='footerContext'>Term & conditions</p>
                                <p className='footerContext'>Privacy policy</p>
                            </Col>
                            <Col xs={{ order: 'last' }}>
                                <p className='labelFooter'>Social</p>
                                <p className='footerContext'>Facebook</p>
                                <p className='footerContext'>Instagram</p>
                                <p className='footerContext'>linkedIN</p>
                            </Col>
                        </Row>
                        <p className='infoCompany'>Copyright ©2022 Zing Inc. All right reserved.</p>
                    </Container>
                </div>
            </div>
        </div >
    )
}

export default Home