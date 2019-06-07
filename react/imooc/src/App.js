import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from "./actions"

console.log(actions)
// import { addGUN, addGunAsync } from './index.redux'
// @connect(state => ({num:state}),
//   {addGUN, addGunAsync}
// )
class App extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
    const { 
      showLoadLayer,
      closeLoadLayer,
      fetchUserInfo
     } = this.props.actions
    console.log(showLoadLayer)

    fetchUserInfo()

    
    this.clickTabHandle = this.clickTabHandle.bind(this);
    this.clickhideLayer = this.clickhideLayer.bind(this);
    this.clickshowLayer = this.clickshowLayer.bind(this);
  }

  clickTabHandle() {
    console.log('clickTabHandle')
  }
  clickshowLayer() {
    console.log('clickshowLayer')
    this.props.actions.closeLoadLayer()
  }
  clickhideLayer() {
    console.log('clickhideLayer')
    this.props.actions.showLoadLayer()
  }
  render (){
    
    // const num = this.props.num
    // const addGun = this.props.addGUN
    // const addGunAsync = this.props.addGunAsync
    const showLayer = this.props.showLayer
    let content = null
    if (showLayer) {
      content = <div onClick={this.clickshowLayer}>showLayer</div>
    } else {
      content = <div onClick={this.clickhideLayer}>hideLayer</div>
    }

    return (
      <div>
        App content
        userType:
        {this.props.initData.userType}
        {content}
        <div onClick={this.clickTabHandle}>clickTab</div>
        {/* 现在有机枪{num}
        <button onClick={addGun} >申请武器</button>
        <button onClick={addGunAsync} >拖两天再给</button> */}
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    initData: state.initData,
    showLayer: state.showLayer
  }
}
// const actionCreators = dispatch => ({ actions: bindActionCreators(actions, dispatch) })
// const actionCreators = {addGUN, addGunAsync}

App = connect(mapStatetoProps,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(App)

export default App;
