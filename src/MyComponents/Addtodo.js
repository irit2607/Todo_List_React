import React, { useState } from 'react';

export const Addtodo =({addTodo})  => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=> {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank")
    }
    else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
    
  }

  return (
    <div className="container my-3">
      <h3 style={{ color: '#00ffff',paddingTop: '50px',fontFamily:'sans-serif' }}>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" style={{ color: '#00ffff' }}>Todo Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label" style={{ color: '#00ffff' }}>Todo Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" rows="3" />
        </div>
        
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
          
        
      </form>
    </div>

  )
}

export default Addtodo
