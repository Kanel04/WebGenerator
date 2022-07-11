import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Button = (props) => {
    return <button {...props} className="px-4 py-3 bg-slate-600  shadow-2xl rounded-full w-96 mt-5 mb-16 cursor-pointer  text-white ml-8">{props.children}</button>
}

export const Input = (props) => {
    return <input {...props} className="border  shadow-2xl mt-5  ml-8 w-96 h-10 text-center rounded-full" />
}

export const LinkButton = (props) => {
    return <Link to={props.page}>
        <span className="px-4 py-2   text-white inline-block">{props.children}</span>
    </Link>
}

export const LinkButtonSecond = (props) => {
    return <Link to={props.page}>
        <span className="px-9 py-3 bg-white rounded-full  text-black ">{props.children}</span>
    </Link>
}

export const LinkButtonTertiaire = (props) => {
    return <Link to={props.page}>
        
            <span className="px-9 py-3   bg-slate-900  rounded-full mt-9 text-white">{props.children}</span>
        
      
    </Link>
}

export const ButtonSecond = (props) => {
    return <button {...props} className="bg-slate-900 w-28 h-12 rounded-full mt-9 text-white">{props.children}</button>
}

