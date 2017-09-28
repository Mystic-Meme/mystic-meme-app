import React, {Component} from 'react';

import Hand from './Hand';
import Head from './Head';
import CrystalBall from './CrystalBall';

export default class FortuneTeller extends Component{
    constructor(){
        super();
        this.state = {
            questions: [], 
            responses: []
        }
    }
    
    
        render(){
            return(
                <div className="fortune-teller"> 
                    <img src ="" alt="larry david fortune teller image" />
                    <img src ="" alt="zordon fortune teller image" />    
                <Head />
                <Hand />
                <CrystalBall 
                
                
                />
                </div>
            )
        }
    }