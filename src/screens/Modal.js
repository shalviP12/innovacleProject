import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const MODAL_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#fff',
    padding:'50px',
    zIndex:1000
}
const OVERLAY_STYLES={
position:'fixed',
top:0,
left:0,
right:0,
bottom:0,
backgroundColor:'rgba(0,0,0,.7)',
zIndex:1000

}
const Modal=({open,onClose,bio})=>{
    if(open==='false')
    return null
return <div style={OVERLAY_STYLES}>
<div  style={MODAL_STYLES}>
    <div>{bio}</div>
    <div style={{'marginTop':'5px',"display":'flex','justifyContent':'center'}}>
    <CopyToClipboard text={bio}><button>Copy</button></CopyToClipboard>
    <button onClick={onClose}>Close Modal</button>
    </div>
    </div>
    </div>
}

export default Modal;