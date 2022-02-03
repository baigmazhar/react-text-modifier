import React,{useState} from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ToggleButton } from '@mui/material';
import { SaveAs } from '@mui/icons-material';

function MinHeightTextarea() {
  const [textarea,setTextArea]=useState("")

      const handleInput = (event) => 
      {
        setTextArea(event.target.value)
      }

      const changeToUpperCase=()=>
      {
        setTextArea(textarea.toUpperCase())
      }

      const changeToLowerCase=()=>
      {
        setTextArea(textarea.toLowerCase())
      }

      const changeToClear=()=>
      {
        setTextArea(textarea.replace(textarea,""))
      }

      const copyToClipboard=()=>
      {
        navigator.clipboard.writeText(textarea)
        alert("Selected text copied to clipboard succesfully")
      }

      const removeExtraSpace=()=>
      {
        setTextArea(textarea.trim())
        alert("Extra spaces removed from Text")
      }


      const downloadText=(e)=>
            {
        const element = document.createElement("");
        const file = new Blob("abcdefg", {type: 'text/plain; charset =utf-8'});
        saveAs(file, "imp.txt")
        // element.href = URL.createObjectURL(file);
        // element.download = "myFile.txt";
        // document.body.appendChild(element);
        // element.click();

      }
      
  return (
    <div>
    <h1>Enter the text to analyze below</h1>
       <TextareaAutosize
       type = "text"
       value={textarea}
       name="textarea"
       id = "textarea"
       onChange={handleInput}
      aria-label="minimum height"
      minRows={11}
      placeholder=""
      style={{ width: 1000 }}
      />

      <Stack spacing={2} direction="row" container justifyContent="center" >
      <Button variant="contained" onClick={changeToUpperCase}>convert to uppercase</Button>
      <Button variant="contained" onClick={changeToLowerCase}>convert to Lowercase</Button>
      <Button variant="contained" onClick={changeToClear}>Clear</Button>
      <Button variant="contained" onClick={copyToClipboard}>Copy to clipboard</Button>
      <Button variant="contained" onClick={downloadText}>Download text</Button>
      <Button variant="contained" onClick= {removeExtraSpace}>Remove extra space</Button>
    </Stack>
    <h1>Text summary 
      <br />
    {textarea}
    </h1>
    <h2>Word count
      <br /> 
      {textarea.length}
      </h2>

</div>
  );
};
export default MinHeightTextarea;
