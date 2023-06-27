import React from "react";
import axios from "axios";

export default class AxiosRequest extends React.Component{

    getRequest  = () =>{
        axios.get('xxxapi')
        .then(){

        }
    }
    
    render(){
        return(
            <div>
                <h1>Hi，我真的AxiosRequest</h1>
            </div>
        )
    }


}