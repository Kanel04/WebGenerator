import React, { useEffect } from "react";
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../components/common/Buttons";
import Photo from "../../assets/images/IMG_2760.jpeg";
import WebPhoto from "../../assets/images/temps-3.jpg";
import WebPhoto2 from "../../assets/images/design-s.png";
import WebPhoto3 from "../../assets/images/free-images-pexels.png";
import PhotoOrdinateur from "../../assets/images/ordinateur.jpg";
import PhotoSocial from "../../assets/images/social.jpg";
import PhotoEntreprise from "../../assets/images/entreprise.jpg";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
}
export const HomePage = () => {

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    id="home"
    >
      <motion.div  className="bg-slate-900 h-16 w-screen  content-start fixed flex flex-row"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >

        <a href="#home" className="text-3xl  text-white ml-3 py-3   ">WebG.</a>

        <div className=" ml-80 pl-96 mt-3 flex flex-row  ">
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <a href="#about" className="text-white ml-3 ">A Prôpos</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <a href="#service" className="text-white ml-3 ">Services</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <a href="#contact" className="text-white ml-3 ">Contact</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            
          >
            <LinkButton page="/login" >Se connecter</LinkButton>
          </motion.div>

          <motion.div className="mt-2"
            whileHover={{ scale: 1.1 }}
          >
            <LinkButtonSecond page="/register">S'inscrire</LinkButtonSecond>
          </motion.div>

        </div>


      </motion.div>
      <div className='h-16'></div>
      <motion.div className="bg-white h-96 mt-3 text-center items-center grid grid-rows-3 grid-flow-col gap-4 py-20 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >

        <h1 className="text-5xl ">Bienvenue  à WebGenerator</h1>
        <motion.h1 className="text-3xl ml-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1.5 }}
        >Allons créer votre site web</motion.h1>
        <motion.div className="w-2  ml-96 pl-60 "
          whileHover={{ scale: 1.1 }}
        >
          <LinkButtonTertiaire page="/login" className="ml-5"  >Démmarer</LinkButtonTertiaire>
        </motion.div>

      </motion.div>
      <div id="service" className="bg-slate-500 h-screen  ">
        <h1 className="py-16 text-white text-4xl text-center">Services</h1>
        <div className="flex flex-row space-x-16  ">
          <motion.div className="bg-white w-96 h-96 ml-10 rounded-xl"
            whileHover={{ scale: 1.1 }}
          >
            <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Anelka</h1>
            <img src={Photo} className="w-36 h-36 ml-28 rounded-full items-center" alt="Photo" />
            <p className="text-center text-xl px-5 py-5">
              Web generator peut vous aider avoir votre prôpre site web dans votre domaine
            </p>
          </motion.div>
          <motion.div className="bg-white w-96 mr-14 h-96 ml-5 rounded-xl"
            whileHover={{ scale: 1.1 }}
          >
            <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Site Web</h1>
            <img src={WebPhoto} className=" items-center" alt="WebPhoto" />

          </motion.div>
          <motion.div className="bg-white w-96 mr-14 h-96 ml-5  rounded-xl flex flex-col"
            whileHover={{ scale: 1.1 }}
          >
            <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Construire votre site web étape par étape</h1>
            <img src={WebPhoto2} className=" items-center p-5 h-60 " alt="WebPhoto2" />
            <motion.div className="py-5 w-16 px-28 pb-8"
              whileHover={{ scale: 1.1 }}
            >
              <LinkButtonTertiaire page="/login"  >Commencer</LinkButtonTertiaire>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div id="about" className="h-screen bg-slate-900   ">

        <h1  className=" text-white text-3xl text-center py-16">à Prôpos</h1>
        <div className="flex flex-row">

          <motion.div className="bg-white w-96 mb-8 mr-14 h-60 ml-8 rounded-xl "
            
            transition={{ delay: 5, duration: 3 }}
            whileHover={{ scale: 1.1 }}
          >
            <h1 className=" text-2xl py-5 px-8 mx-9 text-center">Savoir Sur Web Generator</h1>
            <p className="text-center px-9 text-3 ">Tous les outils sont fais à partir de langague informatique et
              adapter pour être fonctionnelle et des template prè-fabriquer pour réaliser
              votre site web
            </p>
          </motion.div>
          <motion.div
          
          >
            <img src={WebPhoto3} className='h-96 rounded-xl  ' alt="Web photo" />
          </motion.div>
        </div>
      </div>
      <div id="contact" className="bg-gray-500 h-screen ">
        <h1 className="text-4xl text-white text-center py-16">Contact</h1>
        <div className="px-16 flex flex-row">
          <motion.div className=" px-5 "
           
          >
            <img src={PhotoOrdinateur} className="w-96 h-80 " alt="ordinateur" />
          </motion.div>
          <motion.div className=" px-5"
            
          >
            <img src={PhotoSocial} className="w-96 h-80 " alt="social" />
          </motion.div>
          <motion.div className=" px-5"

          >
            <img src={PhotoEntreprise} className="w-96 h-80 " alt="entreprise" />
          </motion.div>

        </div>
        <motion.div className="bg-white mt-5 py-2 ml-20 px-5 rounded-xl w-96 h-40"
          whileHover={{ scale: 1.1 }}
        >
          <p>Pour avoir une bonne évaluation , il faut toujours avoir des étape à suivre à commencer pour
            définir le point de vue de votre site web , ensuite de le réaliser et de le mètre en cadre.
            En cas de problème , contacter sur votre Email : thelegendanelka@gmail.com
          </p>
        </motion.div>
      </div>
      <div className="bg-black h-68  ">
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

    </motion.div>
  );
};
