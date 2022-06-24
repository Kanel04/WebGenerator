import React from 'react'
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../../../components/common/Buttons";
import Avatar from "../../../../assets/images/Avatar.png";
function navbar() {
  return (
    <div >    
      <div className="bg-slate-900 h-16 fixed w-screen flex flex-row">

      <h1 className="text-3xl  text-white ml-3 py-3">WebG.</h1>
      <div className='ml-60 pl-60'></div>
      <div className=" ml-60 pl-10 mt-3  ">

        <LinkButton page="/cloud">Mes projects</LinkButton>

      </div>
      <div className=" ml-1 pl-1 mt-5  ">

        <button className='text-white'>enregistrer</button>

      </div>
      <div className=" ml-1 pl-1 mt-3  ">

        <LinkButton page="/">Se déconnecter</LinkButton>

      </div>

      <LinkButton page="/profile">
        <div className='bg-white rounded-full w-9 h-9 mt-2 ml-14 cursor-pointer'>
          <label >
            <img src={Avatar} className="rounded-full cursor-pointer" alt="Avatar" />
          </label>
        </div>
      </LinkButton>
    </div>
 </div>
  )
}

export default navbar