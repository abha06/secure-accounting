import React, { useEffect, useState} from 'react'
import styled ,{keyframes} from "styled-components";
//import { FaArrowAltCircleUp } from "react-icons/fa";
import { isVisible } from '@testing-library/user-event/dist/utils';

const Modal = () => {
  const [isVisible ,setIsVisible] = useState(false);
  
  
 const setOpenModal = () =>{
  setIsVisible(false);
  };
 
  const ListenToScroll = () =>{
   
    let heightToHidden = 700;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(winScroll > heightToHidden ){
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }
    
  
  };
  

  useEffect(() => {
    window.addEventListener('scroll' , ListenToScroll);
    return () => window.removeEventListener("scroll" ,ListenToScroll);
  }, [])
  
  return (
    <Wraper1>
      {isVisible && (
        <>
         
      <div className='container1 '>
      <h3 className=' text-center mb-0 mt-2'>Get Free Live Demo</h3>
       <div className='row'>
        
        <div className='col-md-6'>
          <img src="assets/img/modal-img.webp" height="300px" alt="/"/>
        </div>
        <div className='col-md-6'>
          <form className='p-2'>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name here"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Phone</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Your Phone Number"/>
          </div>
          
                    <button type="button" className='btn btn-secondary rounded ms-3 mb-4 ms-md-1 p-md-2 ps-md-3 pe-md-3'>Send Message</button>
                    <button type="button" class="btn btn-primary ms-3 mb-4" data-dismiss="modal" id="cancelBtn" onClick={() => {
                        setOpenModal()
                    }}>Close</button>
          </form>
        </div>
       </div>
        
      </div>
      </>
      )}

    </Wraper1>
    
  )};

  const slideAnim = (top, left) => keyframes`
  100% {
    top: ${ top };
    left: ${ left };
  }  
`;
const Wraper1 = styled.section`

  .container1 {
    font-size: 1.2rem;
    height:400px;
    width:650px;
    font-weight:700;
    border:7px solid deeppink;
    color: black;
    position: fixed;
    bottom: 10rem;
    right: 30rem;
    z-index: 999;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(to bottom, #ace8fc 0%, #f3aed0 100%);
    &.slide {

      animation: ${slideAnim('20px', '30px')} 0.4s ease-in-out forwards;
  
      @media (max-width: ${600}px) {
        .container1{
          height:200px;
          width:300px;
        }
      }  
   }
  
  }
  
    }
  }
  
`;

export default Modal
