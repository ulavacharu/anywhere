import React,{useState} from 'react'
import { nanoid } from 'nanoid';
import { db } from '../lib/firebase-config';
import { addDoc,collection } from 'firebase/firestore';
import '../markdown.styles.scss'
import Loading from '../components/Loading';
import MarkdownPreviewer from '../components/markdownPreviewer';
import { Navigate, useNavigate } from "react-router-dom";


function New() {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const [editCode, setEditCode] = useState(nanoid(6))
    const [customLink, setCustomLink] = useState(nanoid(8))
    const  [docData, setDocData] = useState({
      body:'',
      customLink:'',
      editCode:''
      
    })
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate();
    function customHandler(e) {
      setCustomLink(e.target.value);
    }
    function editHandler(e) {
      setEditCode(e.target.value);
    }
    async function submitDoc(e) {
        e.preventDefault();
        if(docData.body===""){return}
        let temp=FormData
        setDocData({...docData,customLink:temp,editCode})
        //console.log(docData,customLink,editCode)
        const dataCollectionRef=collection(db,'data');
        addDoc(dataCollectionRef,{docData}).then(resp=>{console.log(resp.id)}).catch(error=>{console.log(error.message)})
        //setIsLoading(true);
        // await sleep(2000);
        // setIsLoading(false)
        //navigate(`/${customLink}`)

    }
    return (
      isLoading?(<Loading/>):(<>
        <div className='text-area-container'>
            {/* Taking input and setting it to input state */}
                <textarea name="left-ta " id="new-text-area" cols="47" rows="45" defaultValue='' placeholder='Enter Here...'
                    onChange={(e)=>{
                            setDocData({...docData,body:e.target.value})
                    }}>
                </textarea>
                <MarkdownPreviewer input={docData.body}/>

        </div>
        <center>
          <form onSubmit={submitDoc}>
                <label htmlFor="custom-link">Custom link: </label>
                <input type="text" id="custom-link" onChange={customHandler}  name='customLink' className='input-field' /><br/><br/>
                <label htmlFor="edit-code">Edit Code: </label>
                <input type="text" id="edit-code" onChange={editHandler} name='editCode' className='input-field' />
                <br/><br/>
                <button type="submit">Go</button>
          </form> 
        </center>
      </>)
      
        
    )
}

export default New
