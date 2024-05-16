import React ,{useState}from 'react'
import "./navbar.css";

const Navbar = () => {
  const [likes ,setlikes]=useState(1)
  return (
    <>
    <div className="header">
   <div className="logo" href="#home">&#9775; </div>
    <div className='navbar'>
        <ul>
            <li><a href="#" id='home'>Home</a></li>
            <li><a href="https://github.com/Usman-2302">Projects</a></li>
            <li><a href="./cv.pdf" download="Usmancv.pdf">Resume</a></li>
        </ul>
    </div>
    
    <div className="likes" onClick={()=>setlikes(likes+1)}>&#9829;<span>{likes}</span></div> 
    </div>
    </>
  )
}

export default Navbar
