import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Modal from './Modal'
import { NavLink } from 'react-router-dom';


const Authors = () => {
    const limit=20;
    const [pagination,setPagination]=useState({
        start:0,
        end:limit
    })
    const [open,setOpen]=useState('false')
    const [dataList, setDataList] = useState([])
    const [sort,setSort]=useState('name')
    const [order,setOrder]=useState(typeof sort ==='string'? 'asc':'desc')
    
    useEffect(() => {
        const dataget = async () => {
            const response = await fetch(`https://api.quotable.io/authors?sortBy=${sort}&order=${order}`)
            const jsonData = await response.json()

            setDataList(jsonData.results);
        }
        dataget();
        
    }, [sort,order]);
    
    const onPaginationChange=(start,end)=>{
        setPagination({start,end})
                }
    const clicked=(e,sort,order)=>{
        console.log('clicked')
setSort(sort);
setOrder(order);

    }
    const ListItems = () => {
        console.log(dataList)
        const arrayData = dataList.slice(pagination.start,pagination.end).map((data) =>

            <tr>
                <td >
                   <NavLink to="#" onClick={()=>setOpen('true')}> {data.name}</NavLink>
                   
                </td>
                <Modal open={open} onClose={()=>setOpen('false')} bio={data.bio}/>
                <td>{data.link}</td>
                <td>{data.bio}</td>
                <td>{data.dateAdded}</td>
                <td>{data.dateModified}</td>
                <td>{data.description}</td>
                <td>{data.quoteCount}</td>
                <td>{data.slug}</td>
            </tr>)
            
        return arrayData
    }
    return (
        <div>
    <table border="1">
        <th>
            Name
            <button onClick={(e)=>clicked(e,'name','asc')}>▲</button>
            <button onClick={(e)=>clicked(e,'name','desc')}>▼</button>
        </th>
        <th>Link</th>
        <th>Bio</th>
        <th>Date Added
        <button onClick={(e)=>clicked(e,'dateAdded','asc')}>▲</button>
        <button onClick={(e)=>clicked(e,'dateAdded','desc')}>▼</button>
        </th>
        <th>Date Modified
        <button onClick={(e)=>clicked(e,'dateModified','asc')}>▲</button>
        <button onClick={(e)=>clicked(e,'dateModified','desc')}>▼</button>
        </th>
        <th>Description</th>
        <th>Quote Count
        <button onClick={(e)=>clicked(e,'quoteCount','asc')}>▲</button>
        <button onClick={(e)=>clicked(e,'quoteCount','desc')}>▼</button>  
        </th>
        <th>Slug</th>

        {ListItems()}
        
    </table>
    
    <Pagination length={dataList.length} limit={limit} onPaginationChange={onPaginationChange}/>
    
    </div>
    )
}
export default Authors;
