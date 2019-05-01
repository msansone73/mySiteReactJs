import React , {Component} from 'react'

class ContactBox extends Component{
    render(){
        return(
            <div>
                <h1>Usuarios:</h1>
                <h2>Usuario: {this.props.login}</h2>
                <h2>senha: {this.props.senha} </h2>
            </div>
        )
    }
}

export default ContactBox