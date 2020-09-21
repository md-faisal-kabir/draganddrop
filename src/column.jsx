import React, { Component } from 'react';
import Task from "./task";

import { Droppable } from "react-beautiful-dnd";

class Column extends Component {
    containerStyle = {
        margin: "8px",
        border: "1px solid lightgrey",
        borderRadius: "2px",
        fontFamily: "sans-serif",
        fontSize: "14px"
    }

    titleStyle = {
        padding: "8px"
    }

    taskListStyle = {
        padding: "8px",
        
    }

    render() { 
        return (
            <div style={this.containerStyle}>
                <h3 style={this.titleStyle}>{this.props.column.title}</h3>
                
                <Droppable droppableId={this.props.column.id}>
                    {
                        (provided) => (
                            <div style={this.taskListStyle}
                            ref = {provided.innerRef}
                            {...provided.droppableProps}
                            >
                                {this.props.tasks.map((task, index) => <Task key="task.id" task={task} index={index}/>)}
                                {provided.placeholder}
                            </div>
                        )
                    }
                    
                </Droppable>
                
            </div>
        )
    }
}
 
export default Column;