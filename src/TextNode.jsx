import React, { memo, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import chatIcon from './Assets/icons8-chat-50.png';
import whatsappIcon from './Assets/icons8-whatsapp-48.png';


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
      <div className='text_node_' style={{ height:'2.2rem', width:'7rem', boxShadow:'-2px 2px 2px 2px #dcdcdc', borderRadius:'2px' }}>
            <div className='row-top ' style={{display:"flex",alignItems:'center',justifyItems:"center",justifyContent:'space-between',height:'1.2rem', backgroundColor:'#b1f1e3',padding:'5px',borderTopLeftRadius:'2px',borderTopRightRadius:'2px'}}>
                <div style={{display:'flex'}}>
                 <img className='' src={chatIcon} alt="" style={{height:'0.75rem', objectFit:'contain',marginRight:'2px'}}/>
                 <span style={{fontSize:'0.5rem',fontWeight:'bold'}}>Send Message</span>
                </div>
                <div className='whatsappIcon' style={{background:'white', borderRadius:"50%", padding:'0.8px'}}>
                    <img src={whatsappIcon} alt="" style={{height:'0.75rem', objectFit:'contain'}}/>
                </div>
            </div>
            <div className='row-bottom' style={{display:'flex',alignItems:'center', justifyContent:'center',padding:'2px', backgroundColor:'#ffffff',borderBottomLeftRadius:'2px',borderBottomRightRadius:'2px'}}>
                <span style={{fontSize:'0.5rem'}}>{data.label}</span>
            </div>
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
