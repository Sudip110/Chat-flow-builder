# Chat Flow Builder Application

## Overview

This React application leverages the `reactflow` library to create an interactive flow diagram editor. Users can drag and drop nodes onto the canvas, connect them with edges, and manage node data through a sidebar interface. The application includes functionality to identify unconnected nodes and handle node selection.

## Features

- **Node Drag and Drop**: Users can drag nodes from the sidebar and drop them onto the canvas.
- **Dynamic Node Creation**: Nodes are dynamically created with unique IDs and labels.
- **Node Selection**: Clicking on a node highlights it and allows data modification through the sidebar.
- **Edge Creation**: Nodes can be connected with edges.
- **Unconnected Node Detection**: Functionality to find nodes that are not connected to any other node.
- **Data Handling**: Modify node data through a sidebar input, with real-time updates to the node's label.
- **Click Detection**: Clicks outside of nodes reset the selected node state.

## Dependencies

- React
- ReactFlow
- Material-UI (for icons)
- Custom Components: `TextNode`, `MessageNode`, `ButtonEdge`, `Header`, `Sidebar`
- Custom CSS

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Code Structure

### `App.js`

This is the main component that sets up the React Flow environment. It handles the state for nodes, edges, and the selected node. It also manages the drag-and-drop functionality, node data updates, and click detection.

#### Key Functions

- **onConnect**: Adds edges between nodes.
- **onDrop**: Handles the dropping of nodes onto the canvas.
- **onNodeClick**: Sets the selected node when a node is clicked.
- **findUnconnectedNodes**: Finds nodes that are not connected to any other node.
- **handleNodeDataChange**: Updates the data of the selected node.

### `Sidebar.js`

The sidebar component allows users to drag nodes onto the canvas and modify the data of the selected node.

#### Key Functions

- **onDragStart**: Prepares the node for dragging.
- **handleInputChange**: Updates the node data when the input changes.

### `Header.js`

Displays a header that includes functionality for checking unconnected nodes.

### Custom Components

- **TextNode**: Custom node component for text nodes.
- **MessageNode**: Custom node component for message nodes.
- **ButtonEdge**: Custom edge component with a button.

## Example Usage

1. Drag a node from the sidebar and drop it onto the canvas.
2. Click on a node to select it.
3. Modify the node data using the input field in the sidebar.
4. Connect nodes by dragging edges between them.
5. Click outside the nodes to reset the selection.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License



## Acknowledgments

This project uses the `reactflow` library for creating flow diagrams. Special thanks to the React Flow team for their work.

---
