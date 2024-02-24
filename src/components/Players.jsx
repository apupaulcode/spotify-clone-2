import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

function Players() {
    const [{token,Playlists},dispatch] = useStateProvider();
    useEffect(()=>{
        const getPlayerListData = async ()=>{
            const response = await axios.get('https://api.spotify.com/v1/me/playlists',
                            {
                                headers:{
                                    Authorization: "Bearer "+ token,
                                    "Content-Type":"application/json",
                                }
                            })
                            console.log(response)
                            const {items} =response.data;
                            const Playlists = items.map((name,id)=> {return{name,id}});
                            console.log(Playlists);
                            dispatch({type:reducerCases.SET_PLAYLISTS,Playlists:Playlists})
                        };
        getPlayerListData();
    },[token,dispatch])
  return (
    <div>
      {
        Playlists.map((name,id)=>{
          return(
            <li key={id}>{name}</li>
          )
        })
      }
    </div>
  )
}

export default Players
