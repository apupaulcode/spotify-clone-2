import React from 'react'
import styled from 'styled-components'
function Footer() {
  return (
    <Container>
      footer
    </Container>
  )
}
const Container = styled.div`
    height: 100%;
    width: 100%;
    background: #181818;
    border-top: 1px solid #282828;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

`
export default Footer
