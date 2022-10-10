import React from 'react'
import Internet from '../Assets/Internet.svg'
import Startup from '../Assets/Startup.svg'
function Header() {
  return (
    <div>
    <div className='bg-black w-full h-96'>

<div className='flex flex-row'>
<div className='bg-white shadow-5 w-96 h-80 rounded-lg m-8 p-5 flex flex-col'>
<p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ipsa voluptatem, aut molestias voluptatum, duc</p>
<button className='bg-pink-600 w-40 text-white font-bold rounded-full mt-14 py-3 '>Commencer</button>
</div>
<div className='bg-white shadow-5 w-96 h-80 rounded-lg m-8 p-5 flex flex-col '>
  <div>
    <img src={Internet} alt="Photo" />
  </div>
<p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ipsa voluptatem, aut molestias voluptatum, duc</p>
</div>
<div className=' m-2 p-2 '>
<img src={Startup} alt="Startup" />
</div>
</div>
</div>

</div>
  )
}

export default Header