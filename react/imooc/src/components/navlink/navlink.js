import React from 'react'
import PropTypes from 'prop-types'
import '../antd-mobile.css'
import { TabBar, Icon, InputItem, TextareaItem, Button } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
class NavLinkBar extends React.Component{
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    render() {
        console.log(this.props)
        const navList = this.props.data.filter(v => !v.hide)
        const { pathname } = this.props.location
        console.log(navList)
        return (
            <div style={{ position: 'fixed',  width: '100%', bottom: 0 }}>
                <TabBar>
                    {navList.map(v => (
                        <TabBar.Item
                            key = {v.path}
                            title = {v.text}
                            icon  = {{uri : require(`./img/${v.icon}.jpeg`)}}
                            selectedIcon = {{
                                uri: require('./img/img2.jpeg')
                            }}
                            selected = {
                                pathname == v.path
                            }
                            onPress = {() => 
                                this.props.history.push(v.path)
                            }
                        >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>   
        )
    }
}

export default NavLinkBar