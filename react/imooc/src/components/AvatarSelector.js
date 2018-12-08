import React from 'react'
import { Grid, List, InputItem, WhiteSpace, WingBlank, Button, Radio} from 'antd-mobile';
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
    static PropTypes = {
        selectAvator: PropTypes.func
    }

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const avatorList = 'img1,img2'.split(',').map(v=>({
            icon: require(`./img/${v}.jpeg`),
            text: v
        }))
        const gridHeader = this.state.text?(<div>
            <span>已选择头像</span>
            <img src={this.state.icon} style={{width:20}} />
        </div>):(<div>
            <span>请选择头像</span>
        </div>)
        console.log(avatorList)
        return <div>avator
            {gridHeader}
            <Grid data={avatorList} onClick = {(ele) => {
                    this.setState(ele)
                    this.props.selectAvator(ele.text)
                }
            }/>
        </div>
    }
}

export default AvatarSelector