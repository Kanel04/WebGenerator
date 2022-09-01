import React, { Component } from 'react'
import dropzone from 'react-dropzone'

class DropZoneComponent extends Component{
 handleOnDrop = (files, rejectedFiles) =>{
console.log(files);
 }
    render () {
        return (
            <div>

            </div>
        )
    }

}
 export default DropZoneComponent
