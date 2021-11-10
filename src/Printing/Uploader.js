import React from 'react'
import './Printing.css'
import { useFileUpload } from 'use-file-upload'
import Image2 from '../images/printicon2.png';


export default function Uploader() {
  const [files, selectFiles] = useFileUpload()
  return (
    <div>
      <div className="uploader-content">
        <div className="doc-image">
          <img src={Image2} alt=" print" width="300px" height="250px" />
        </div>
        <button
          onClick={() => {
            // Single File Upload
            selectFiles({ multiple: true }, (files) => {
              // Note callback return an array
              files.map(({ source, name, size, file }) => {
                console.log({ source, name, size, file })
              })
              // Todo: Upload to cloud.
            })
          }}
        >
          Click to Upload
      </button>
        {files ? (
          files.map((file) => (
            <div>
              <img src={file.source} alt='preview' width="90px" height="80px" />
              <span> Name: {file.name} </span>
              <span> Size: {file.size} </span>
            </div>
          ))
        ) : (
            <span>No file selected</span>
          )}
      </div>
    </div>
  )
}
