import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, val: 'aa' },
        { id: 2, val: 'bb' },
        { id: 3, val: 'cc' }]
    }
  }
  click() {
    this.setState({
      list: this.state.list.reverse()
    })
  }

  render() {
    return (
      <ul>
        <div onClick={this.click.bind(this)}>reverse</div>
        {
          this.state.list.map(function (item, index) {
            return (
              //绑定·index，index是不变的
              // <Li key={index}
              //  val={item.val}>
              // </Li>
              //key绑定的id是可变的，react会认为key发生了变化,通常用index就可以，碰到reverse用id
              <Li key={item.id}
               val={item.val}>
              </Li>
            )
          }.bind(this))
        }
      </ul>
    )
  }
}

class Li extends React.Component {
  render() {
    return (
      <li>
        {this.props.val}
        <input type="text"></input>
      </li>
    )
  }
}

export default App;