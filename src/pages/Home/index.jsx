import React, { useEffect } from "react";
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../components/common/Buttons";
import Photo from "../../assets/images/IMG_2760.jpeg";
import WebPhoto from "../../assets/images/temps-3.jpg";
import WebPhoto2 from "../../assets/images/design-s.png";
import WebPhoto3 from "../../assets/images/free-images-pexels.png";
import PhotoOrdinateur from "../../assets/images/ordinateur.jpg";
import PhotoSocial from "../../assets/images/social.jpg";
import PhotoEntreprise from "../../assets/images/entreprise.jpg";

export const HomePage = () => {
  return (
    <>
      <div className="bg-slate-900 h-16 w-screen  content-start fixed flex flex-row">
        
          <h1 className="text-3xl  text-white ml-3 py-3   ">WebG.</h1>
          
        <div className=" ml-80 pl-96 mt-2  ">
          <LinkButton page="/">A Prôpos</LinkButton>
          <LinkButton page="/">Services</LinkButton>
          <LinkButton page="/">Contact</LinkButton>
            <LinkButton page="/login">Se connecter</LinkButton>
            <LinkButtonSecond page="/register">S'inscrire</LinkButtonSecond>
          </div>
        

      </div>
      <div className='h-16'></div>
      <div className="bg-white h-96 mt-3 text-center items-center grid grid-rows-3 grid-flow-col gap-4 py-20 ">

        <h1 className="text-5xl ">Bienvenue  à WebGenerator</h1>
        <h1 className="text-3xl ">Allons créer votre site web</h1>
        <LinkButtonTertiaire page="/login"  >Démmarer</LinkButtonTertiaire>
      </div>
      <div className="bg-slate-500 h-screen ">
        <h1 className="py-9 text-white text-4xl text-center">Services</h1>
        <div className="flex flex-row space-x-16  ">
        <div className="bg-white w-96 h-96 ml-8 rounded-xl">
          <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Anelka</h1>
         <img src={Photo} className="w-36 h-36 ml-28 rounded-full items-center" alt="Photo" />
            <p className="text-center text-xl px-5 py-5"> 
            Web generator peut vous aider avoir votre prôpre site web dans votre domaine     
              </p>
        </div>
        <div className="bg-white w-96 mr-14 h-96 ml-8 rounded-xl">
          <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Site Web</h1>
            <img src={WebPhoto} className=" items-center" alt="WebPhoto" />

        </div>
          <div className="bg-white w-96 mr-14 h-96 ml-8 rounded-xl flex flex-col">
            <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Construire votre site web étape par étape</h1>
            <img src={WebPhoto2} className=" items-center p-5 h-60 " alt="WebPhoto2" />
            <div className="py-5 px-32 pb-8">
              <LinkButtonTertiaire page="/login"  >Commencer</LinkButtonTertiaire>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-slate-900  ">
        
        <h1 className=" text-white text-3xl text-center py-5">à Prôpos</h1>
        <div className="flex flex-row"> 
        
        <div className="bg-white w-96 mb-8 mr-14 h-60 ml-8 rounded-xl ">
          <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Savoir Sur Web Generator</h1>
          <p className="text-center px-9 text-3 ">Tous les outils sont fais à partir de langague informatique et
            adapter pour être fonctionnelle et des template prè-fabriquer pour réaliser 
            votre site web 
          </p>
        </div>  
        <div>
            <img src={WebPhoto3} className='h-96 rounded-xl hover:translate-y-16 ' alt="Web photo" />
        </div>
      </div>
      </div>
      <div className="bg-gray-500 h-screen">
       <h1 className="text-4xl text-white text-center py-8">Contact</h1>
<div className="px-16 flex flex-row">
  <div className=" px-5 ">
            <img src={PhotoOrdinateur} className="w-96 h-80 rounded-xl" alt="ordinateur" />
  </div>
  <div className=" px-5">
    <img src={PhotoSocial} className="w-96 h-80 rounded-xl" alt="social" />
  </div>
  <div className=" px-5">
    <img src={PhotoEntreprise} className="w-96 h-80 rounded-xl" alt="entreprise" />
  </div>

</div>
<div className="bg-white mt-4 py-2 ml-20 px-5 rounded-xl w-96 h-40">
<p>Pour avoir une bonne évaluation , il faut toujours avoir des étape à suivre à commencer pour 
  définir le point de vue de votre site web , ensuite de le réaliser et de le mètre en cadre.
  En cas de problème , contacter sur votre Email : thelegendanelka@gmail.com
</p>
</div>
      </div>
      <div className="bg-black h-68 ">
        <div className="text-white flex flex-row ">
          <h1 className="py-28 px-14 text-2xl">WebG.</h1>
         
        <div className="flex flex-col px-28 py-14">
        <LinkButton page="/">Acceuil</LinkButton>
        <LinkButton page="/login" >Se connecter</LinkButton>
        <LinkButton page="/register">S'inscrire</LinkButton>
        </div>
          <p className="px-28 py-28 ">Copyright &copy; 2022</p>
      </div>
      </div>

    </>
  );
};
