import React , {Component} from 'react'
import { bindActionCreators} from 'redux'
import * as todoActions from '../actions/todos'
import { connect} from 'react-redux'

class ReduxTest extends Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    state = { newTodoText:'',}

    addNewTodo = () =>{
        this.props.addTodo(this.state.newTodoText)
        this.setState({newTodoText:''})
    }

    render(){
        return(
            <div>
                <ul>
                   <li>Itens:</li>
                   {this.props.todos.map(todo => (
                       <li key= {todo.id}>{todo.text}</li>
                   ))}
                </ul>
                
                <input type="text" 
                value={this.state.newTodoText}
                onChange={(e) => 
                    this.setState(
                        {newTodoText: e.target.value})}/>
                <button onClick={this.addNewTodo}>
                    Novo todo</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos, 
})

const mapDispathToProps = dispath =>
bindActionCreators(todoActions,dispath)

export default connect(mapStateToProps,mapDispathToProps)(ReduxTest)