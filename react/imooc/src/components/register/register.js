import React from 'react'
import '../antd-mobile.css'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio} from 'antd-mobile';
import Logo from '../logo'
import { connect } from 'react-redux'
import { register } from '../../reducers/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
    state => state.user,
    { register }
)

class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            replace: '',
            type:'boss'
        }


        this.handeleChange = this.handeleChange.bind(this)
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    handeleChange(val,key) {
        this.setState({
            [key]: val
        })
    }
    login() {
        this.props.history.push('./login')
    }
    register() {
        console.log(this.props.register)
        this.props.register(this.state)
        console.log(this.state)

    }
    render() {
        const RadioItem = Radio.RadioItem;
        return <div>
            注册页
            {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
            <Logo></Logo>
            {this.props.msg?
                <p>{this.props.msg}</p>:
                null
            }
            <List>
                <InputItem onChange={(event) => this.handeleChange(event,'user')}>用户</InputItem>
                <WhiteSpace />
                <InputItem type='password' onChange={(event) => this.handeleChange(event,'pwd')}>密码</InputItem>
                <WhiteSpace />
                <InputItem type='password' onChange={(event) => this.handeleChange(event,'replace')}>确认密码</InputItem>
                <WhiteSpace />
                <RadioItem checked={this.state.type==='gennis'}
                    onChange={() => this.handeleChange('gennis','type')}>
                    牛人
                </RadioItem>
                <RadioItem checked={this.state.type==='boss'}
                    onChange={() => this.handeleChange('boss','type')}>
                    BOSS
                </RadioItem>
            </List>
            <WhiteSpace />
            <WingBlank>
                <Button type='primary' onClick={this.login}>登录</Button>
                <WhiteSpace />
                <Button type='primary' onClick={this.register}>注册</Button>
            </WingBlank>
        </div>
    }
}

export default Register