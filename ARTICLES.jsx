import React from 'react'

function ARTICLES() {
  return (
    <div>
      <>
      <h2 className = "h2">WHAT DO YOU WANT TO ASK AND SHARE</h2>
      <div className="q">Title: </div>
       <br></br>
       <input className="title" placeholder = "Enter a descriptive title"/>
        <br></br>
        <div className="q">Describe your problem: </div>
       <br></br>
       <input className = "problem" />
       <br></br>
       <div className="q">Tags: </div>
       <br></br>
       <input className = "tags" placeholder = "Please add up to 3 tags to describe what your question is about e.g., Java"/>
     
        </>
    </div>
    
  );
}

export default ARTICLES
