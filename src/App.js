import React, { useState, useRef, useCallback, useEffect } from 'react';
import TextNode from './TextNode';
import MessageNode from './MessageNode';
import ButtonEdge from './ButtonEdge';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';

import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import './App.css';
import {
  nodes as initialNodes,
} from './initial-elements';
import Header from './Header';


const nodeTypes = {
  textNode: TextNode,
  messageNode:MessageNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

let id = 1;
let nodeCount=1;
const getId = () => `dndnode_${id++}`;
const getNodeCount = () => ++nodeCount;

// This is the flow component that will be responsible for the flow chart functionalities by using reactflow
const DnDFlow = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode,setSelectedNode]=useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const nodeRef =useRef();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
 

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `test message ${getNodeCount()}` },
      };
      
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  const onNodeClick=(event,node)=>{
    nodeRef.current=true;
    setSelectedNode(node)
    console.log(node);
  }
 
  //This function is responsible to find any nodes in the flow that are unconnected
  const findUnconnectedNodes = useCallback((nodes,edges)=>
    {
      const nodeIds= new Set(nodes.map(node=>node.id))
      //console.log(nodeIds)
      const connectedNodeIds = new Set();
      edges.forEach(edge=>{
        connectedNodeIds.add(edge.source);
        connectedNodeIds.add(edge.target);
      })
      const unconnectedNodes = [...nodeIds].filter(id => !connectedNodeIds.has(id));
      return unconnectedNodes.length;
    },[])
    
    //This function is will change the data inside the selected node from the sidebar component by mutating the nodes state
    const handleNodeDataChange = (newData) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id ? { ...node, data: { label: newData } } : node
        )
      );
    };

  //to detect any clicks outside the node so that the selectedNode state can be reset
  useEffect(() => {
    const handleWindowClick = (event) => {
      if (!nodeRef.current && !(Array.from(event.target.classList).includes('settings__input'))
          ) {
          setSelectedNode(null);
      }
      nodeRef.current = null; // Reset ref after handling click
      
    };
    
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div className="App">
        
        <ReactFlowProvider>
         <Header findUnconnectedNodes={findUnconnectedNodes} nodes={nodes} edges={edges}/>
          <div className="reactflow-wrapper" style={{height:'1200px',width:'1200px',display:'flex'}}>
           
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              elementsSelectable={true}
              onNodeClick={onNodeClick}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
            >
              {/* <Controls /> */}
            </ReactFlow>
            <Sidebar selectedNode={selectedNode} setNodeData={handleNodeDataChange}/>
          </div>
          
        </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
