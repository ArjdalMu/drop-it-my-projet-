import {React, useContext, useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter,
    useNavigate
  } from "react-router-dom";

import {useDispatch} from 'react-redux';
import authSlice, { authActions } from '../Compenent/Account/Store/auto-slice';
import './Navbar.css'
import { Home } from './Home/Home'
import { Categorie } from '../Compenent/Categories/Categorie'
import { Explore } from './ExploreCard'
import { Login } from './Login/Login';
import { Signin  } from './SignIn/Signin'
import { Account } from './Account/Account';
import logo from '../images/white.png'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';



export const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [Mobile, setMobile] = useState(false);
    const navigate = useNavigate('');
    const location = useLocation('');
    const dispatch = useDispatch('');
    const handleClick = ()=>{
        dispatch(authActions.logout())
        navigate('/');
    }
    

  return (
    
    <nav className="nav-bar">
        
        <img src={logo} alt="" className="logo" />
        <ul  className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={()=>{setMobile(false)}}>
            

            {
                isLoggedIn &&  
                
                
            <>
            
            
            
            <li className='user-item-logo'>
                <a><Link to='profile'>A</Link></a>
            </li>
            
            <li>
                <Link to='Addproduct'>ADD PRODUCT</Link>
            </li>
            <li>
                <a to='' className='btn first' onClick={handleClick} >
                <i class="fa-solid fa-right-from-bracket"></i>
                </a>
            </li>
            
            </>
}
{
            
             !isLoggedIn && (


                <>
             <li>
                <Link to ='' >home</Link>
            </li>
            <li>
                <Link to='/categorie'>categorie</Link>
            </li>
            <li>
                <Link to='/explore'>explore</Link>
            </li>
            <li>
                <Link className='btn first' to='/login'>login</Link>
            </li>
            <li>
                <Link className='btn second' to='/signin'>sign in</Link>
            </li>
            
            </>
            )
                
            

            

             
            
            }
           
            
            
            
            
            
            
            
            

            
            
        </ul>
        <button className='mobile-menu-icon' onClick={()=>{setMobile(!Mobile)}}>
                {Mobile ? <ImCross/> : <FaBars/>}
                
        </button>
    </nav>






    
    
  )
}
