import React from 'react'
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
function Spotify() {
  return (
    <Container>
      <div className="spotify_body">
        <Sidebar/>
        <div className="body">
            <Navbar/>
            <div className="body_container">
                <Body/>
            </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer/>
      </div>
    </Container>
  )
}

const Container = styled.div`
    max-width: 100%;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows:85vh 15vh;
    .spotify_body{
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent,rgba(0,0,0,1));
        background-color: rgb(32, 87, 100);
        
       .body{
           height: 100%;
           width: 100%;
           overflow: auto;
           &::-webkit-scrollbar{
               width: 0.7rem;
               max-height: 2rem;
            }
        }    
    }
`


export default Spotify
