import React, { useEffect, useState } from 'react'
import './MenuRow.css';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addFoodCart, getAFood, getAllCategories, getAllfoods } from '../Services/allAPI';
import AllFoodData from '../allFoodData.json'
import CategoryFoodData from '../categoryData.json'


function MenuRow() {

  // const [allfoods,setAllFoods] = useState([])
  // const [allCategoris,setAllCategories] = useState([])
  const [food,setFood] = useState({})

  // modal 1
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // get all foods from foods.jsx
  const viewAllFooods = async()=>{
    // const {data} = await getAllfoods() 
    // setAllFoods(data);
  }

  // get all foods from foods.jsx
  const viewAllCategories = async()=>{
    // const {data} = await getAllCategories()
    // setAllCategories(data)
  }

  // get a food from foods.jsx
  const viewDetails = async(foodId)=>{
    setShow(true)
    // const {data} = await getAFood(foodId)
    let data = AllFoodData.find((ele)=>ele.id==foodId)
    setFood(data);
  }

  // add to cart
  // const addToCart = async()=>{
  //   const{name,imageUrl,rate} = food
  //   // cartItems
  //   const cartItems = {
  //     name,imageUrl,rate
  //   }
  //   // const response = await addFoodCart(cartItems);
  //   if (response.status>=200 && response.status<300) {
  //     // toast
  //     toast.success("added")
  //     // close modal
  //     setShow(false)
  //   } else {
  //     toast.error("network error")
  //   }
  // }


  // useEffect
  useEffect(()=>{
    // viewAllFooods()
    // viewAllCategories()
    console.log('first',AllFoodData)
    console.log('ss',CategoryFoodData)
  },[])

  return (
    <div className='scroll-smooth'>
      <div className='ms-4 mb-5'>
          <h1>All Foods</h1>
          <div className="flex overflow-x-scroll mt-3">
            {
              AllFoodData.length>0?
              AllFoodData.map((foods)=>(
                <img className={`movie hover:border-[3px] border-white-400 cursor-pointer
                hover:scale-110 transition-all duration-150 ease-in`} onClick={()=>viewDetails(foods.id)} src={foods.imageUrl} alt="no image" />
              )):null            
            }
          </div>
      </div>
      {
        CategoryFoodData.length>0?
        CategoryFoodData.map((cat)=>(
          <div className='ms-4 mb-5'>
            <h1>{cat.categoryName}</h1>
            <div className="flex overflow-x-scroll mt-3">
              {
                cat.allfoods.map((foods)=>(
                  <img className={`movie hover:border-[3px] border-white-400 cursor-pointer
                  hover:scale-110 transition-all duration-150 ease-in`} onClick={()=>viewDetails(foods.id)} src={foods.imageUrl} alt="no image" />
                ))            
              }
            </div>
          </div>
        )):null
      }

      {/* modal */}
      <Modal size='lg' show={show} onHide={handleClose}>
            <Modal.Body className=' bg-gray-900'>
                <Row>
                    <Col className='h-80'>
                        <img src={food?.imageUrl} alt="" />
                    </Col>
                    <Col>
                        <h2>{food?.name}</h2>
                        <p>{food?.description}</p>
                        <p>Rate : ${food?.rate}</p>
                        {/* <div className='w-100'>
                          <Button variant='outline-dark' onClick={()=>addToCart()} style={{outline:'none'}}><i className='fa-solid fa-cart-shopping text-white pt-1'></i></Button>
                        </div> */}
                    </Col>
                </Row>
            </Modal.Body>
      </Modal>

    </div>
  )
}

export default MenuRow