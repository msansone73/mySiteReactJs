import React,{Component} from 'react'

class CardInfo extends Component {

    render(){
        return (
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{this.props.usuario.nome}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.usuario.email}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
            </div>
        )
    }
}

export default CardInfo