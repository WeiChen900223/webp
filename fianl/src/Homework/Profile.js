import React, { Component } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import BookIcon from '@mui/icons-material/Book';
import UpgradeIcon from '@mui/icons-material/Upgrade';

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            name: null,
            login:null,
            location:null,
            id:null,
            url:null,
            public_repos:null,
            updated_at:null
        }
    }
    
    componentDidMount(){
        fetch("https://api.github.com/users/cjwu",{method:"GET"})
        .then(res =>res.json())
        .then(data =>{
            this.setState({name:data.name})
            this.setState({login:data.login})
            this.setState({location:data.location})
            this.setState({id:data.id})
            this.setState({url:data.url})
            this.setState({public_repos:data.public_repos})
            this.setState({updated_at:data.updated_at})
        })
        .catch(e =>{
            console.log("error")
        })
    }

    render(){
        return(
            <div style={{textAlign:'center'}}>
                <br/>
                <br/>
                <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 100, height: 100 }}
                    style={{margin:"auto"}}
                />
                <div >
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.login}</h2><p><PersonOutlineIcon />id: {this.state.id} <LocationOnIcon />{this.state.location}</p>
                    <p><BookIcon /> public_repos: {this.state.public_repos}</p>
                    <p><LinkIcon />{this.state.url}</p>
                    <p><UpgradeIcon />updated_at:{this.state.updated_at}</p>
                </div>
            </div>
        )
    }
}

export default User