import React from 'react'
import Logo from '../logo'
import '../antd-mobile.css'
import { NavBar, Icon, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../AvatarSelector'
import { connect } from 'react-redux'
import { updata } from '../../reducers/user.redux'

import { Redirect } from 'react-router-dom'
import axios from 'axios'

@connect(
    state => state.user,
    {updata}
)
class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.selectAvator = this.selectAvator.bind(this)
        this.save = this.save.bind(this)
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: '',
            text: ''
        }
    }
    onChange (name,v){
        console.log(name,v)
        this.setState({
            [name]: v
        })
    }

    selectAvator (image) {
        console.log(image)
        this.setState({
            text: image
        })
    }
    save() {
        this.props.updata(this.state)
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return <div>

            {this.props.redirectTo && path != redirect?<Redirect to={this.props.redirectTo} />:null}
            <NavBar mode="dark">BOSS完善信息页</NavBar>
            <AvatarSelector selectAvator = {this.selectAvator}
            ></AvatarSelector>
            <InputItem onChange = {(e) => this.onChange('title',e)} >
                招聘职位
            </InputItem>
            <InputItem onChange = {(e) => this.onChange('company',e)} >
                公司名称
            </InputItem>
            <InputItem onChange = {(e) => this.onChange('money',e)} >
                职位薪资
            </InputItem>
            {/* <InputItem onChange = {(e) => this.onChange('desc',e)} >
                招聘简介
            </InputItem> */}
            <TextareaItem
                title="招聘简介"
                rows = {3}
                onChange = {(e) => this.onChange('desc',e)}
                autoHeight
            />
            <Button type='primary' onClick = {this.save}>保存</Button>
        </div>
    }
}

export default BossInfo