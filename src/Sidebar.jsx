import chatIcon from './Assets/icons8-chat-50.png';
import chatSvg from './Assets/chat.svg';
import whatsappIcon from './Assets/icons8-whatsapp-48.png';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default ({selectedNode,setNodeData}) => {
 //  
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
 
  const handleInputChange = (event)=>
    {
        setNodeData(event.target.value);
    }

  return (
    <div style={{borderLeft:"2px solid #ebebeb",borderTop:"2px solid #ebebeb",height:'92%',width:'15%',position:"fixed",right:"0",bottom:"0",display:"flex", flexDirection:"column",  alignItems:"center", gap:"1rem"}}>

            {selectedNode?(<div className="settings__panel" style={{height:"fit-content", width:"100%",color:"#bcc0c1"}}>
                <div style={{ border:"0.5px solid #ebebeb"}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem"}}>
                        <ArrowBackOutlinedIcon/>
                        <p>Message</p>
                    </div>
                    <div style={{border:"0.5px solid #ebebeb", padding:"1rem"}}>
                        <p>Text</p>
                        <textarea onChange={handleInputChange} className='settings__input' type="text" style={{border:"0.5px solid #ebebeb", borderRadius:"2px", height:"50%,", background:"none", color:"#bcc0c1"}}/>
                    </div>
                </div>
            </div>):(
            <>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'textNode')} draggable style={{height:"max-content"}} 
            >
            <div className='text_node_' style={{ marginTop:"1rem", height:'2.2rem', width:'7rem', boxShadow:'-2px 2px 2px 2px #dcdcdc', borderRadius:'2px' }}>
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
                        <span style={{fontSize:'0.5rem'}}>test message </span>
                    </div>
                </div>
            </div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'messageNode')} draggable style={{}}>
                <div style={{ height:'4rem', width:'7rem', borderRadius:'2px' , display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', border:'1px solid #92a0f1', color:"#92a0f1"}}>
                    <img src={chatSvg} alt="" style={{objectFit:'contain', height:"2rem", color:" #92a0f1 !important"}} />
                    <p>Message</p>
                </div>
            </div>
        </>
        )}
    </div>
  );
};
