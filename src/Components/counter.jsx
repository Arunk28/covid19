import React, { Component } from 'react';
import axios from "axios";
import './counter.css'

class counter extends Component {
    state = { count:0 ,data:[],country:'India'}    
    render() { 
        this.getUser();
        return ( 
            <div className="width-ul">
                <h2 className="center-align">Affected Countries : {this.state.data.length}</h2>
                
                <pre > {this.state.data.filter(covid => covid.country.includes(this.state.country)). map(y=>
                <ul className="list-group pad-20">
                    <li className="list-group-item head"><b>{y.country}</b></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">total cases <span class="badge badge-primary badge-pill">{y.cases}</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">today cases <span class="badge badge-primary badge-pill">{y.todayCases}</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">total deaths<span class="badge badge-danger badge-pill">{y.deaths}</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">today deaths <span class="badge badge-danger badge-pill">{y.todayDeaths}</span></li>                
                    <li className="list-group-item d-flex justify-content-between align-items-center">critical <span class="badge badge-danger badge-pill">{y.critical}</span></li>  
                    <li className="list-group-item d-flex justify-content-between align-items-center">recovered <span class="badge badge-success badge-pill">{y.recovered}</span></li>                
                    <li className="list-group-item d-flex justify-content-between align-items-center">active <span class="badge badge-primary badge-pill">{y.active}</span></li>                

                </ul>)}       

                {this.state.data.filter(covid => covid.country != this.state.country). map(y=>
                <ul className="list-group pad-20">
                    <li className="list-group-item head"><b>{y.country}</b></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">total cases <span class="badge badge-primary badge-pill">{y.cases}</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">today cases <span class="badge badge-primary badge-pill">{y.todayCases}</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">total deaths<span class="badge badge-danger badge-pill">{y.deaths}</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">today deaths <span class="badge badge-danger badge-pill">{y.todayDeaths}</span></li>                
                    <li className="list-group-item d-flex justify-content-between align-items-center">critical <span class="badge badge-danger badge-pill">{y.critical}</span></li>  
                    <li className="list-group-item d-flex justify-content-between align-items-center">recovered <span class="badge badge-success badge-pill">{y.recovered}</span></li>                
                    <li className="list-group-item d-flex justify-content-between align-items-center">active <span class="badge badge-primary badge-pill">{y.active}</span></li>                

                </ul>)}  
                </pre>
            </div>

         );
    }

//      covid = ()=>{      
//         var self = this;
//         console.log(self)
//         axios.get('http://www.geoplugin.net/json.gp')
//         .then(function (response) {   
//             console.log(response.data)     
// ;        self.setState({country: response.data.geoplugin_countryName});
//         self.getUser();
//         })
//         .catch(function (error) {
//         console.log(error);
//         });
//      }
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