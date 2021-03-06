import React, {  useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Navebar/Navebar';
// import './AllCountries.css'

const AllCountries = () => {
    const history = useHistory()
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const handleClick = (country) =>{
        history.push(`/details/${country}`)
        console.log(country)
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className='container'>
            <div className=' row'>
        
                {
                    countries.map(country=> country &&
                        <div className='col-lg-3 col-md-4  col-sm-1'onClick={()=>handleClick(country.name.common)} style={{cursor:'pointer'}}>
                            <div className='pb-3 mb-3 shadow rounded' style={{height:'240px', width:'190px'}}>
                            <div>
                                <img style={{height:'120px', width:'190px'}} className='rounded' src={country.flags[1]} alt="" />
                            </div>
                            <div>
                            <h6 className='px-2 py-1 m-0'>{country.name.common}</h6>
                            <p className='px-2 py-1 m-0'>Area: {country.area}sqm</p>
                            <p className='px-2 py-1 m-0'>Region: {country.region}</p>
                            </div>
                        </div>
                        </div>
                        )
                } 
                  
                


            </div>
        </div>
        </div>
    );
};

export default AllCountries;