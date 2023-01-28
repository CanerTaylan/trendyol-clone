import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsHeart } from "react-icons/bs";


function ProductContents(props) {
  return (
    <div>

      <Card className='product-card'>
        <div className="image-container">
          <div className="image-top">
            <div className="kargo"><img src={props.kargo} alt="..." />
            </div>
            
          </div>
          <div className="product-stamp"><img src={props.stamp} alt="..." /></div>
          <div className="like"><BsHeart /></div>
          <Card.Img className='product-img' variant="top" src={props.productimg} alt="" />
        </div>
        <Card.Body>
          <Card.Title className='product-name'>{props.pname}</Card.Title>
          <Card.Text className='product-price'><span className='orginal-price'>{props.orgPrice}</span> <span className='discount-price'>{props.pprice}</span>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}
ProductContents.defaultProps = {
  kargo: "./img/p/bos.png",
  stamp: "./img/p/bos.png"

}

export default ProductContents