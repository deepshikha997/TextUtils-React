import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick=()=>{
    // console.log("Uppercase was clicked:", + text); 
    // to check in website through right click inspect (console tells errors in it)
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
  }
  
  const handleLoClick=()=>{
   let newText=text.toLowerCase();
   setText(newText)
   props.showAlert("Converted to Lowercase","success");
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("On Change")
    setText(event.target.value);
  }

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copies to Clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const [text, setText] =useState('');
  //text = "new text";//wrong way to chnage the state
  // setText("new text");//correct way to change the state
  return (
    <>
    <div className ="container" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
      <h1>{props.heading} - {text}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
     </div>
     <button disables={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
     <button disables={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower case</button>
     <button disables={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text</button>
     <button disables={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy the text</button>
     <button disables={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
     </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'#042743'}}>
      <h1> Your text summary</h1>
      <p>{text.split(" ").length} words and  {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>    
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the above to preview it here"}</p>
    </div>
    </>
  )
}
