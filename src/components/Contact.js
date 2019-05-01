import React, { Component } from 'react'
import ContactBox from './ContactBox'


class Contact extends Component {

  state = {
    usuario: {login: 'msansone', senha: '123'},
    usuarios: [
      {login: 'msansone', senha: '123'},
      {login: 'm.sansone', senha: '456'},
      {login: 'marcioe', senha: '789'}
    ]

  }

  handleClick = (e) => {
    console.log(this.state)
    this.setState({
      usuario: {
        login: 'jose'
      }
    })
  }

  handlerSubmit = (e) =>{
    e.preventDefault()

  }

  render() {
    return (
      <div className='container'>
        <h4 className='center'>Contact</h4>
        lorme abcdfs dfsdfds gfgfdgdf sadsadsd fdfdfg refdfdf sdsdsad sdsdsdasda dgfgrhdfhfhfgfgdf sdsdsd sdsdsdsd sdsdsds.
        <form onSubmit={this.handlerSubmit}> 
          <input />
          <button onClick={this.handleClick}>
          Click me!
          </button>
        </form>
        <h2>my name is { this.state.usuario.login } and my pass is {this.state.usuario.senha}</h2>

        <br></br>
        <ContactBox login={ this.state.usuario.login } senha={ this.state.usuario.senha } />

        

      </div>
    );
  }
}


export default Contact;