import React, { Component } from 'react';
const Country = (props) => {
    const {cases,todayCases,deaths,todayDeaths,critical,recovered,active,country}  = props.v;
    return ( <ul className="list-group pad-20">
    <li className="list-group-item head"><b>{country}</b></li>
    <li className="list-group-item d-flex justify-content-between align-items-center">total cases <span className="badge badge-primary badge-pill">{cases}</span></li>
    <li className="list-group-item d-flex justify-content-between align-items-center">today cases <span className="badge badge-primary badge-pill">{todayCases}</span></li>
    <li className="list-group-item d-flex justify-content-between align-items-center">total deaths<span className="badge badge-danger badge-pill">{deaths}</span></li>
    <li className="list-group-item d-flex justify-content-between align-items-center">today deaths <span className="badge badge-danger badge-pill">{todayDeaths}</span></li>                
    <li className="list-group-item d-flex justify-content-between align-items-center">critical <span className="badge badge-danger badge-pill">{critical}</span></li>  
    <li className="list-group-item d-flex justify-content-between align-items-center">recovered <span className="badge badge-success badge-pill">{recovered}</span></li>                
    <li className="list-group-item d-flex justify-content-between align-items-center">active <span className="badge badge-primary badge-pill">{active}</span></li>                

</ul> );
}
 
export default Country;
