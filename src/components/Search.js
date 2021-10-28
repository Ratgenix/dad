import React, {useState} from 'react'
import './components.css'
import {AiOutlineSearch} from "react-icons/ai";

function Search({placeholder, data}) {
    const [filData,setFilData]=useState([]);
    var hi=''

    const handleFilter=(event)=>{
        const searchW=event.target.value;
        hi=searchW;
        const newFilter=data.filter((value)=>{
            return value.title.toLowerCase().includes(searchW.toLowerCase());
        });

        
        if (searchW === "") {
            setFilData([]);
          } else {
            setFilData(newFilter);
          }
        console.log(event.target.value, hi)
    }

    return (
        <div className='search'><span>
            <div className="search-input">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className="search-icon"><AiOutlineSearch/></div>
            </div>
            {filData.length !=0  &&
            <div className='data-result'>
                {filData.map((value,key)=>{
                    return <a href={value.link} className='dataItem' target='_blank'>
                        {""}
                        {value.title}
                        {""}
                        </a>
                }
                )}
            </div>
}</span>
{console.log(filData.length)}
        </div>

    )
}

export default Search
