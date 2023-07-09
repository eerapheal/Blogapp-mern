import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

const modules ={
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
    
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ indent: '-1'}, { indent: '+1' }],
    
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
   
      ],
}; 

const formats = [
    'bold', 'italic', 'underline', 'strike',
    'align', 'list', 'indent',
    'size', 'header',
    'link', 'image', 'video',
    'color', 'background',
    'clean',
  ]
  
const Create = () => {
    const [title, setTitle] =useState("");
    const [summary, setsummary] =useState("");
    const [content, setContent] =useState("");

    return (
        <main>
        <form >
            <input type="title" placeholder={"Title"} />
            <input type="summary" placeholder={'Summary'} />
            <input type="file" />
            <ReactQuill value={content} modules={modules} formats={formats} />
            <button type="submit">Create post</button>
        </form>
       </main>
    )
}

export default Create