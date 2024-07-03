import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

// useParams
function SingleView() {

    const [view,setView] = useState()

    const Params=useParams()
    console.log(Params.id);

    const singleData= async()=>{
        const result = await axios.get(`https://fakestoreapi.com/products/${Params.id}`)
        setView(result.data)
    }
    useEffect(()=>{
        singleData()
    },[])

    console.log(view);


    
  return (
    <div>
      {           // For spinner
      view?.id?   // For spinner

          <Row>
            
            <Col lg={6}>
              <img src={view?.image} alt="" className='w-100 p-5' />
            </Col> 

            <Col lg={6}>
              <ListGroup className='mt-5 me-5'>
                <ListGroup.Item><h2><b>{view?.title}</b></h2></ListGroup.Item>
                <ListGroup.Item>{view?.category}</ListGroup.Item>
                <ListGroup.Item><h4>${view?.price}</h4></ListGroup.Item>
                <ListGroup.Item>Discription : {view?.description}</ListGroup.Item>
                <ListGroup.Item>Rating : {view?.rating.rate}<br/>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          :    // For spinner
          <div className='text-center m-4'>
          <i class="fa-solid fa-spinner fa-spin-pulse fa-4x "></i>                            
          </div>

      }  
    </div>
  )
}

export default SingleView
