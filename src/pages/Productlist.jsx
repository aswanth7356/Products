import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productlist() {

    const[product,setProduct]=useState([])                                         // argument ayi array [] koduthath --> output il consolil kittya datas array [] ayitanu so ivde array [] koduthu . Object ayitanel ivde {} ingane kodukkum . Like that ...

    const fetchData= async ()=>{
    const data = await fetch("https://fakestoreapi.com/products")               // api Link --> fake store api
          data.json().then(data=>setProduct(data))
        
    }
        useEffect(()=>{
            fetchData()                                                               
        },[])                                                                          // [] --> empty array used to  consolil continous data varathirikkan
        console.log(product);

    return (
        <div>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col lg={6}>
                    <img src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1" className='border border-danger rounded-circle' alt="" width="400"
                    height="300" />
                    </Col>

                    <Col lg={6} style={{marginTop:"70px"}}>
                    <h1 className='mt-5' >WELCOME TO THE SHOPPING WORLD<span className='text-warning'> E-CART</span></h1>
                    </Col>
                </Row>
            </Container>

            { product.length>0?    // For spinner  (font awesome)

            <div>        
                <Container>
                    <Row>
                        {
                            product.map(i=>(                                                          // map use cheythath array il lla motham datas edkan
                                <Col lg={3} md={4} sm={6}>
                                    <Card style={{ width: '18rem', backgroundColor: 'black' }} className='border rounded mb-5 '>
                                    <Card.Img variant="top" src={i.image} style={{height:'300px'}} className='p-3' />
                                    <Card.Body>
                                        <Card.Title>{i.title.length > 35 ? i.title.slice(0,35)+'...' : i.title}</Card.Title>                   
                                        <Card.Text>{i.category}</Card.Text>
                                        <h5><Card.Text>${i.price}</Card.Text></h5>
                                        <Card.Text>Rating : <span className={i.rating.rate > 4 ? 'text-success' : i.rating.rate > 3 ? 'text-warning' : 'text-danger'}> {i.rating.rate} <br />
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        </span> 
                    
                                        </Card.Text>
            
                                        <Button variant="primary">BUY</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            
            :    // For spinner
            <div className='text-center m-4'>
            {/* font awesome --> spinner + animation add */}
            <i class="fa-solid fa-spinner fa-spin-pulse fa-4x "></i>                            
            </div>

                //  Spinner closed bracelet
           }       

        </div>
    )
}

export default Productlist
