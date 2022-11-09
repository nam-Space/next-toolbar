import React from 'react'
import Home from './home'
import Blog from './blog'
import About from './about'

const Layout = ({children}) => {
    return (
        <ul>
            <Home />
            <Blog />
            <About />
            {children}
        </ul>
    )
}

export default Layout