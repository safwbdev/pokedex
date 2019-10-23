import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
                    <div className="container">
                        <a 
                            href="/" 
                            className="navbar-brand xol-sm-3 col-md-1 mr-0 align-items-center">
                            PokeDex
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}
