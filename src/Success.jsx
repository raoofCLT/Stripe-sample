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
        <Styledimg src="https://img.freepik.com/free-vector/y-letter-colorful-logo-gradient-vector-designs_343694-1188.jpg?t=st=1726119366~exp=1726122966~hmac=93b8e8b0bdb37d5337bb1f6965d1fc80a596e67b76d411bddae6e012264e93c8&w=740" alt="" />
        <Done>
          Successfull.
        </Done>
        <Desc>
          Your order is being prepared. Thanks for choosing Yara.
        </Desc>
      </Wrapper>
    </Container>
  )
}

export default Success
