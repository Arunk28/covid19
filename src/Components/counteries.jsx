import React, {  PureComponent } from 'react';
import axios from "axios";
import './counter.css'
import Country from './country';



class counter extends PureComponent {
    
    state = { count:0 ,data:[],country:'India'}    
    componentDidMount(){
        this.getUser();
    }
    render() { 
        
        return ( 
            <div className="width-ul">
                <h4 className="center-align">{this.state.data.length>200?'Mostly all Countries affected over all the world' : this.state.data.length + ' Countries affected'}</h4>
                
                <pre > {this.state.data.filter(covid => covid.country.includes(this.state.country)). map(y=>
                    <Country key={this.state.country} v={y} />
                )}       

                {this.state.data.filter(covid => covid.country != this.state.country && covid.country !="Total:"). map(y=>
                <Country key={y.country} v={y} />
                )}  
                </pre>
            </div>

         );
    }

      getUser =()=> {        
        var self = this;
        
        console.log(self)
        console.log(this.state);
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
        .then(function (response) {        
        self.setState({data: response.data})
        })
        .catch(function (error) {
        console.log(error);
        });

      }


      
      

}
 
export default counter;