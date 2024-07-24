import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import Dropzone from 'react-dropzone';

const StandardMessagesForm = ({props,activeChat}) => {
  const {message,setMessage} = useState("");
  const {attachment,setAttachament} = useState("");
  const {preview, setPreview} = useState("");

  const handleChange = (e)=> setMessage(e.target.value)

  const handleSubmit = async () =>{
      
  }


  return (
    <div className="message-form-container">
      
      {preview && (
        <div className='message-form-preview'>
        <img alt='message-form-prevew' 
        className='message-form-preview-img' src={preview} 
        onLoad={
          ()=> URL.revokeObjectURL(preview)}
        />
        <XMarkIcon
        className="message-form-icon-x"
        onClick={()=>{
          setPreview("")
          setAttachament("")
        }}
        />
          </div>
      )}
      <div className='message-form'>
        <div className='message-form-input-container'>
          <input className='message-form-input'
            type = "text"
            value = {message}
            placeholder='Send a Message....'
            onChange = {handleChange}>
            
          </input>  
        </div>
        <div className='message-form-icons'>
          <Dropzone 
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          noClick={true}
          onDrop={(acceptedFiles) =>{
            setAttachament(acceptedFiles)
            setPreview(URL.createObjectURL(acceptedFiles[0]))
          }}
          >
            {({getRootProps,getInputProps,open})=> (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                className='message-form-icon-clip'
                onClick={open}/>
              </div>
            )}

          </Dropzone>
          <hr className='vertical-line'/>
          <PaperAirplaneIcon
          className='message-form-icon-airplane'
          onClick={()=>{
            setPreview("");
            handleSubmit();
          }}
          />
        </div>
        </div>
    </div>
  )
}



export default StandardMessagesForm