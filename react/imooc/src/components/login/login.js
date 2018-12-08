import React from 'react'
import Logo from '../logo'
import '../antd-mobile.css'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../reducers/user.redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
@connect(
    state => state.user,
    { login }
)
class Login extends React.Component{

    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handeleChange = this.handeleChange.bind(this)
        this.state = {
            user:'',
            pwd:''
        }
    }
    componentDidMount() {
        // axios.get('/data')
        //     .then(res => {
        //         if(res.status === 200) {
        //             console.log('axios data')
        //             console.log(res)
        //             this.setState({data:res.data})
        //             console.log(this.state.data[0].user)
        //         }
        //     })
    }
    register() {
        this.props.history.push('./register')
    }
    handleLogin() {
        this.props.login(this.state)
        console.log(this.state)
    }

    handeleChange(val,key) {
        this.setState({
            [key]: val
        })
    }
    
    render(){
        return <div>
            {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
            这是登录页
            <h1>{this.state.user?this.state.user:''}</h1>
            <Logo></Logo>
            {this.props.msg?
                <p>{this.props.msg}</p>:
                null
            }
            <List>
                <InputItem onChange = {(event) => this.handeleChange(event,'user')}>用户</InputItem>
                <WhiteSpace />
                <InputItem onChange = {(event) => this.handeleChange(event,'pwd')}>密码</InputItem>
                <WhiteSpace />
            </List>
            <WingBlank>
                <Button type='primary' onClick={this.handleLogin}>登录</Button>
                <WhiteSpace />
                <Button type='primary' onClick={this.register}>注册</Button>
            </WingBlank>
        </div>
    }
}

export default Login