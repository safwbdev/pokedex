import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
                    <div className="container">
                        <a 
                            href="/" 
                            className="navbar-brand xol-sm-3 col-md-1 col-sm-6 mr-0 align-items-center">
                            {/* PokeDex */}
                            <svg height="50" width="50">
                                <circle cx="25" cy="25" r="20" stroke="white" stroke-width="2" fill="blue"></circle>
                            </svg>
                            <svg height="50" width="30">
                                <circle cx="15" cy="15" r="10" stroke="#ef5350" stroke-width="1" fill="#ef5350"></circle>
                            </svg>
                            <svg height="50" width="30">
                                <circle cx="15" cy="15" r="10" stroke="yellow" stroke-width="1" fill="yellow"></circle>
                            </svg>
                            <svg height="50" width="30">
                                <circle cx="15" cy="15" r="10" stroke="green" stroke-width="1" fill="green"></circle>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}
