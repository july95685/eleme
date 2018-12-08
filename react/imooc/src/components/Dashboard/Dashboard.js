import React from 'react'
import '../antd-mobile.css'
import { NavBar, Icon, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import NavLinkBar from '../navlink/navlink.js'

function Boss() {
    return <h1>Boss</h1>
}
function Genius() {
    return <h1>Genius</h1>
}
function User() {
    return <h1>User</h1>
}
function Msg() {
    return <h1>Msg</h1>
}
@connect(
    state => state.user,
    {

    }
)
class Dashboard extends React.Component{
    render() {
        const { user } = this.props
        console.log(this.props)
        console.log('this.props')
        const { pathname } = this.props.location
        console.log(pathname)
        const navlist = [{
            path: '/boss',
            text: 'boss',
            icon: 'img1',
            title: 'boss列表1',
            component: Boss,
            hide: pathname == '/genius'
        },{
            path: '/genius',
            text: '牛人',
            icon: 'img1',
            title: '牛人列表',
            component: Genius,
            hide: pathname == '/boss'
        },{
            path: '/msg',
            text: '消息',
            icon: 'img1',
            title: '消息列表',
            component: Msg
        },{
            path: '/user',
            text: '个人',
            icon: 'img1',
            title: '个人中心',
            component: User
        }]
        return (
            <div>
                <NavBar mode='dard'>
                    {navlist.find(v => v.path == pathname)?
                        navlist.find(v => v.path == pathname).title:'未知'}
                </NavBar>
                <h2>content</h2>
                <NavLinkBar data = {navlist}/>
            </div>
        )
    }
}

export default Dashboard