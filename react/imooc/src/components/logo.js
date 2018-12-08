import React from 'react'
import './main.css'
import logoImg from '../logo.jpeg'
class Logo extends React.Component{

    render(){
        return (
            <div className='logo-container'>
                <img src={logoImg} alt = '' />
            </div>
        )
    }
}

export default Logo