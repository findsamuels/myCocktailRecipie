import React from 'react'
import classes from './Header.module.scss'
import Link from 'next/link'
const Header = () => {
    return (
        <header className={classes.Header}>
           

           <div className={classes.logo} >

           <Link href='/'>Cocktail Recipies</Link>
           </div>
           

           <ul className={classes.Nav}>
               <li>
               <Link href='/alchoholic'>Alchoholic </Link>
               </li>
               <li>

               <Link href='/nonAlchoholic'>Non-Alchoholic </Link>
               </li>
               <li>

               <Link href='/favourites'>Favourites </Link>
               </li>
       
           </ul>
            
        </header>
    )
}

export default Header
