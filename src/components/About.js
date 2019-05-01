import React, { Component } from 'react'
import CardInfo from './CardInfo'

class About extends Component {

  usuario = {
    "id": 1,
    "nome": "beth",
    "email": "beth@gmail.com",
    "senha": "123"
  }

  render() {
    return (
      <div className='container'>
        <h4 className='center'>About</h4>
        lorme abcdfs dfsdfds gfgfdgdf sadsadsd fdfdfg refdfdf sdsdsad sdsdsdasda dgfgrhdfhfhfgfgdf sdsdsd sdsdsdsd sdsdsds.

        <br/>
        <CardInfo usuario={this.usuario}></CardInfo>
      

      </div>
    );
  }
}

export default About;