import React from 'react'
import styled from 'styled-components'

const Success = () => {


  const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  `
  
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const Styledimg = styled.img`
    width: 52px;
    border-radius: 50%;
    margin-bottom: 10px;
  `


  const Done = styled.div`
    background-color: teal;
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-size: 22px;
  `
  const Desc = styled.p`
    
  `


  return (
    <Container>
      <Wrapper>
        <Styledimg src="https://scontent.fccj3-1.fna.fbcdn.net/v/t39.30808-1/308746580_213237637704265_8391728342110064021_n.png?stp=dst-png_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=wlTUq-xwy5cQ7kNvgF_QRWY&_nc_ht=scontent.fccj3-1.fna&oh=00_AYBQ9bQFJETDzuiOvYZ6Z0gKKpJzG_zCJg4Ar7on13DKWg&oe=66E1C472" alt="" />
        <Done>
          Successfull.
        </Done>
        <Desc>
          Your order is being prepared. Thanks for choosing Lama Shop.
        </Desc>
      </Wrapper>
    </Container>
  )
}

export default Success
