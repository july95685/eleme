import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addGUN, removeGun } from './index.redux'
@connect(state => ({num:s}),
  {addGUN, removeGun})
class App extends Component {
  render (){
    const num = this.props.num
    const addGun = this.props.addGUN
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        现在有机枪{num}
        <button onClick={addGun} >申请武器</button>
        <button onClick={addGunAsync} >拖两天再给</button>
      </div>
    )
  }
}

// const mapStatetoProps = (s) => {
//   return {num:s}
// }
// const actionCreators = {addGUN, removeGun}
// App = connect(mapStatetoProps,actionCreators)(App)

export default App;
