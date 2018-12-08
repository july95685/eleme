import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userinfo } from '../../reducers/user.redux'
@withRouter
@connect(
    state => state.user,
    { userinfo }
)
class AuthRouter extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            pwd:''
        }
    }

    componentDidMount() {
        // 获取用户信息
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname) != -1) {
            return null
        }

        // console.log('/user/info')
        // this.props.userinfo()
        axios.get('/user/info')
            .then(res => {
                console.log('/user/info')
                if(res.status === 200) {
                    if(res.data.code === 0) {
                        console.log(res.data)
                        // is login
                        this.props.userinfo(res.data.data)
                        // dispatch(loadData(res.data.data))
                    } else {
                        console.log(this.props)
                        this.props.history.push('/login')
                        // this.props.userinfo({
                        //     user:'data'
                        // })
                    }
                }
            })
    }

    render(){
        // return <span>{this.props.user}123</span>
        return null
    }
}

export default AuthRouter