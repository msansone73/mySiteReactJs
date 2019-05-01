import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Advanced
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" to="/ReduxTest">Reduxtest</NavLink>
                  <NavLink className="dropdown-item" to="/AxiosTest">Axios</NavLink>
                  </div>
              </li>
              <li></li>
              <li>total de Todos: {this.props.todos.length}</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(Navbar);