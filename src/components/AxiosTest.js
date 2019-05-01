import React, {Component} from 'react'
import Axios from 'axios';

class AxiosTest extends Component {

    state = {usuarios:[]}

    componentDidMount(){
        Axios.get('http://localhost:8080/mysite/usuario')
        .then(res=>{
            const usuarios=res.data
            this.setState({usuarios})
        })
    }

    delete = (e)=>{
        const id = parseInt(e.target.getAttribute("dado"));
        console.log("delete: "+id)
    }

    render() {
        return (
        <div>
            <h1>Axio Teste</h1>
            <ul>
                <li>Nomes</li>
            {this.state.usuarios.map((usuario) => <li key={usuario.id} >{usuario.nome} <button dado={usuario.id} onClick={this.delete}>deletar</button></li>)}
          </ul>
        </div>
        );
    }
}

export default AxiosTest;