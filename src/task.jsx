import React, { Component } from 'react';
import { Draggable } from "react-beautiful-dnd";

class Task extends Component {

    

    render() { 
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index} >
                {
                    (provided) => {
                        const taskStyle = {
                            border: "1px solid lightgrey",
                            borderRadius: "2px",
                            padding: "4px",
                            marginBottom: "8px",
                            backgroundColor: "white",
                            ...provided.draggableProps.style
                        };

                        return (
                            <div 
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={taskStyle}
                            
                        >
                            {this.props.task.content}
                        </div>
                        )
                    }
                }
                 
            </Draggable>
            
            
            );
    }
}
 
export default Task;