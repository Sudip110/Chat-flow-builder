import React, { memo, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import chatIcon from './Assets/icons8-chat-50.png';


export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{background: '#555',height:'0.5px', width:'0.5px' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div style={{ height:'4rem', width:'7rem', borderRadius:'2px' , display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', border:'1px solid #92a0f1', color:"#92a0f1"}}>
            <img src={chatIcon} alt="" style={{objectFit:'contain', height:"2rem", color:" #92a0f1 !important"}} />
            <p>Message</p>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: '#555' , height:'0.5px', width:'0.5px'}}
        isConnectable={isConnectable}
      />
    </>
  );
});
