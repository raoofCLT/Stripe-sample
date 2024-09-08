import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import dotenv from "dotenv"

dotenv.config();

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
           "http://localhost:3000/api/checkout/payment",
         {
           tokenId: stripeToken.id,
           amount: 2000,
         })
         console.log(res.data);
         navigate.push("/success")
       }catch(err){
         console.log(err);
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
            name= "Lama Shop" 
            image="https://scontent.fccj3-1.fna.fbcdn.net/v/t39.30808-1/308746580_213237637704265_8391728342110064021_n.png?stp=dst-png_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=wlTUq-xwy5cQ7kNvgF_QRWY&_nc_ht=scontent.fccj3-1.fna&oh=00_AYBQ9bQFJETDzuiOvYZ6Z0gKKpJzG_zCJg4Ar7on13DKWg&oe=66E1C472"
            billingAddress
            shippingAddress
            description="Your total is &20"
            amount={2000}
            token={onToken}
            stripeKey={process.env.KEY}
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