import { motion } from 'framer-motion';
import * as FcIcons from "react-icons/fc";
export const CardProject = (props) => {
    return (
        <div>
            <motion.div className='bg-white flex flex-row w-96 h-16 ml-2 mt-5 rounded-2xl'
                initial={{ x: -40 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            >

<FcIcons.FcFolder className="w-16 h-16 cursor-pointer"></FcIcons.FcFolder>
                <h1 className='text-xl text-center py-5'>Nom du project</h1>
       <button className='bg-red-700  ml-8 w-36 h-14 mt-1 text-white rounded-xl'>supprimer</button>
            </motion.div>
        </div>
    )
}