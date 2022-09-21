import {Link} from 'react-router-dom';
export default function ErrorPage() {
    return (
        <div className="flex justify-center items-center text-center h-screen">
            <h1 className="text-2xl sm:text-3xl font-extrabold ">
                404
            </h1>
            <h2 className="mt-2 text-lg ml-2 sm:mt-0">
               Page Non Trouvé revenez en arrière
            </h2>
            <Link to="/" className="text-2xl text-red-500 cursor-pointer ml-2">Page d'acceuil</Link>
        </div>
    )
}

ErrorPage.layoutProps = {
    meta: {
        title: '404',
    },
}
