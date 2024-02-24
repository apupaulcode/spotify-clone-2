import React from 'react'
import styled from 'styled-components'
// import {ioLibrary} from 'react-icons/io'
import {MdHomeFilled, MdSearch,MdLibraryMusic} from 'react-icons/md'
import Players from './Players'
function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />
        </div>
        <ul>
          <li>
            <MdHomeFilled/>
            <span>Home</span>
          </li>
          <li>
            <MdSearch/>
            <span>Search</span>
          </li>
          <li>
            <MdLibraryMusic/>
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Players/>
    </Container>
  )
}
const Container = styled.div`
    background: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top__links{
      display: flex;
      flex-direction: column;
      .logo{
        text-align: center;
        margin: 1rem 0;
        img{
          max-inline-size: 80%;
          block-size: auto;
      }
    }
    ul{
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li{
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
            color: white;
        }
      }
    }
  }
`

export default Sidebar
