import axios from 'axios'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Draggable from "react-draggable";
import { motion } from 'framer-motion';
import DropZoneComponent from './components/DropZone/DropZoneComponent';
import Navbar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';
import SideBarRight from './components/sideBarRight/sideBarRight';
const PrimaryPage = () => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <Navbar></Navbar>
            <div>
                <div className='bg-white h-screen flex flex-col'>
                        <div className='flex flex-row'>
                        <SideBar></SideBar>
                        <DropZoneComponent></DropZoneComponent>
                        <SideBarRight></SideBarRight>
                        </div>

                </div>
            </div>
        </motion.div>
    )
}

export default PrimaryPage