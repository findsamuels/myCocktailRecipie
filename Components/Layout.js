import React from 'react'
import Header from './Navigation/Header'
import classes from './Layout.module.scss'
const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Header/>
            <main>{props.children}</main>
        </div>
    )
}

export default Layout
