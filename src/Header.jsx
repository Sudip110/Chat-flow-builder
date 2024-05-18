import React, { useState } from 'react'

function Header({findUnconnectedNodes,nodes,edges}) {
    const [showErrorMessage, setShowErrorMessage] = useState(false);
  const handleClickSave =()=>
    {
        findUnconnectedNodes(nodes,edges) ? setShowErrorMessage(true) : setShowErrorMessage(false);
        console.log(showErrorMessage);
    }
  return (
    <div style={{display:'flex', position:"fixed", top:"0", zIndex:"100", alignItems:'center', justifyContent:"flex-end", backgroundColor:'#f3f3f3', height:'8%', width:"100%",padding:'2px'}}>
        {showErrorMessage && (<div style={{backgroundColor:'#fbcbcb',height:'2rem',width:"max-content",padding:'5px',marginRight:"40rem",borderRadius:"2px"}}><p>Cannot Save Flow</p></div>)}
        <button onClick={()=>handleClickSave()} style={{background:"#ffffff", border:'2px solid #888c92', borderRadius:'5px', padding:'5px'}}>Save Changes</button>
    </div>
  )
}

export default Header