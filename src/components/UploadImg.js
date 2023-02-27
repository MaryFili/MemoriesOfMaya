import React, { useState } from 'react'

export default function UploadImg() {
    const [selectedImg, setSelectedImg] = useState(null)




    const addImageHandler = (e) => {
        setSelectedImg(e.target.files[0])
    }

    const imgUploadHandler = () => {

    }

    return (
        <div>
            <input className="fileSelector" type="file" onChange={addImageHandler} />
            <button onClick={imgUploadHandler}>Upload</button>
        </div>
    )
}
