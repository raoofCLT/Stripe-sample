import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const KEY = process.env.REACT_APP_STRIPE_KEY

const Pay = () => {
  const [stripeToken,setStripeToken] = useState(null)
  const navigate = useNavigate()

  const onToken = (token)=>{
    setStripeToken(token)
  }

   useEffect(()=>{
     const makeRequest = async () =>{
       try{
         
         const res = await axios.post(
           "http://localhost:5000/api/checkout/payment",
           {
             tokenId: stripeToken.id,
             amount: 2000,
            })
         console.log(res.data);
         navigate("/success")
       }catch(err){
         console.log(`Your error is ${err}`);
       }
     }
     stripeToken && makeRequest()
   },[stripeToken,navigate])


    return(
        <div
         style ={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent:"center"
         }}
        >
          {stripeToken ? (
            <span>Processing. Please wait...</span>) : (

            <StripeCheckout 
            name= "Yara" 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IZMRqXYifzEbxPBggvkYO9MmJrOltETmlg&s"
            billingAddress
            shippingAddress
            description="Your total is &20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
            <button
              style={{
                border:"none",
                width: 120,
                borderRadius:5,
                padding:"20px",
                backgroundColor:"black",
                color: "white",
                fontWeight:"600",
                cursor:"pointer"
              }}
              >
                Pay Now
            </button>
           </StripeCheckout>
          )}

        </div>
    )
}

export default Pay;