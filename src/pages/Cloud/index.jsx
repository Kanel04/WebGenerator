import React from 'react'
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../components/common/Buttons";
import { CardProject } from "../../components/ProjectCard";
import Avatar from "../../assets/images/Avatar.png";

function CloudPage() {
  return (
    <div className='flex flex-col'>
          <div className="bg-slate-900 h-16 w-screen fixed flex flex-row">

              <h1 className="text-3xl  text-white ml-3 py-3">WebG.</h1>
              <div className='ml-60 pl-80'>
                  <input type="text" className='w-96 h-9 mt-4 py-2  px-6 rounded-full' placeholder='Recherche' />
              </div>
              <div className=" ml-5 pl-1 mt-3  ">

                  <LinkButton page="/primary">Retour</LinkButton>

              </div>
              <div className=" ml-1 pl-1 mt-3  ">

                  <LinkButton page="/">Se déconnecter</LinkButton>

              </div>
              <LinkButton page="/profile">
                  <div className='bg-white rounded-full w-9 h-9 mt-2 cursor-pointer'>
                      <label >
                          <img src={Avatar} className="rounded-full cursor-pointer" alt="Avatar" />
                      </label>
                  </div>
              </LinkButton>
          </div>
          <div className='bg-black h-screen flex flex-row' >
    <CardProject></CardProject>
    <CardProject></CardProject>
    <CardProject></CardProject>
              <CardProject></CardProject>
              <CardProject></CardProject>
              <CardProject></CardProject>

          </div>
    </div>
  )
}

export default CloudPage