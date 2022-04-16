import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
const Pagination =({length,limit,onPaginationChange})=>
{
const [counter,setCounter]=useState(1);
  
    const noOfButtons= Math.ceil(length/limit)
  
    useEffect(()=>{
const start=(counter-1)*limit;
const end=(counter)*limit;
console.log('start',start,'end',end)
onPaginationChange(start,end)
    },[counter])
    const onButtonclick=(type)=>{
        
        if(type==='Previous'){
            if(counter===1)
            setCounter(1)
            else
            setCounter(counter-1)
        }
        else if(type==='Next'){
            if(counter===noOfButtons)
            setCounter(counter)
            else
            setCounter(counter+1);
        }
    }
    if(length!==0)
    return (<div id="FlexPage">
        <nav >
        <button className="btn" onClick={() => onButtonclick("Previous")}>Previous</button> 
       <ul id='uiFlex'>     
        
        {new Array(noOfButtons).fill("").map((data,index)=>{
           return <NavLink to="#" activeClassName= {(index+1)===counter ? "active_class" : null} onClick={()=>setCounter(index+1)}>{index+1}</NavLink>
        })}
        </ul>
        <button className="btn" onClick={() => onButtonclick("Next")}>Next</button>    
       
        </nav>
    </div>)
   

}

export default Pagination