import React, { Component } from 'react'
import styled from 'styled-components'
import spinner from './spinner.gif'
import { Link } from 'react-router-dom';

const Sprite = styled.img`
    width: 5em !important;
    height: 5em;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.12)
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    }
`;
const StyledLink = styled(Link)`
text-decoration:none;
    color:#000000;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active{

    }
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imgUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        tooManyRequests: false
    }
    componentDidMount(){
        const {name, url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length -2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        this.setState({
            name,
            imageUrl,
            pokemonIndex
     });
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                <Card className="card">
                    <h5 className="card-header">{this.state.pokemonIndex}</h5>
                    {this.state.imageLoading ? 
                    <img src={spinner} className="card-img-top rounded mx-auto mt-2" style={{width: 5 + 'em', height: 5 +'em'}} alt=""/>
                    : null}
                    <Sprite 
                        className="card-img-top rounded mx-auto mt-2" 
                        src={this.state.imageUrl}
                        onLoad={() => this.setState({imageLoading: false})}
                        onError={() => this.setState({tooManyRequests: true})}
                        style={
                            this.state.tooManyRequests ? {display: "none" } : {display: "block"}
                        }
                        />
                        {this.state.tooManyRequests ? 
                            (
                                <h6 className="mx-auto">
                                    <span className="badge badge-danger mt-2">Too Many Requests</span>
                                </h6>
                            ) 
                        : null}
                    <div className="card-body mx-auto">
                        <h6 className="card-title">{this.state.name}</h6>
                    </div>
                </Card>
                </StyledLink>
            </div>
        )
    }
}
