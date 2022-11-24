import React,{useState,useRef} from 'react'
import { nanoid } from 'nanoid';
import { db } from '../lib/firebase-config';
import { addDoc,collection,getDocs, query, where } from 'firebase/firestore';
import '../markdown.styles.scss'
import Loading from '../components/Loading';
import MarkdownPreviewer from '../components/markdownPreviewer';
import { Navigate, useNavigate } from "react-router-dom";
import Error from '../components/Error'

function New() {
    const [body, setBody] = useState('')
    const [wantPreview, setWantPreview] = useState(false)
    const customLinkRef = useRef(null)
    const editCodeRef = useRef('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    let navigate = useNavigate();
    let prevGenCustom,prevGenEdit;
    const dataCollectionRef=collection(db,'data');

    
    async function checkCustomUrl(val) {
      let que = query(dataCollectionRef,where("docData.customLink","==",val));
      let querySnapshot= await getDocs(que);
      if(querySnapshot.docs.length!=0) {
          console.log('Custom url already exists')
          return false;
      }
      else {
        return true;
      }
    }
    async function submitDoc(e) {
        e.preventDefault();
        if(body===""){
          alert('empty body'+'Need to add warning thingies bye')
          return
        }
        if(customLinkRef.current.value===""||customLinkRef.current.value===prevGenCustom){customLinkRef.current.value=nanoid(6);prevGenCustom=customLinkRef.current.value;}
        if(editCodeRef.current.value===""||editCodeRef.current.value===prevGenEdit){editCodeRef.current.value=nanoid(8);prevGenEdit=editCodeRef.current.value;}
        let temp1=customLinkRef.current.value,temp2=editCodeRef.current.value;
        if(await checkCustomUrl(temp1)==true) {
            const docData={
              body,customLink:temp1,editCode:temp2
            }
            addDoc(dataCollectionRef,{docData}).then(resp=>{}).catch(error=>{console.log(error.message)})
            navigate(`/${customLinkRef.current.value}`)
        }
        else {
          alert('url already exists '+'Need to add warning thingies bye')
          //need to show error here
        }

    }
    return (
      isLoading?(<Loading/>):(
        <>
        <div className='text-area-container'>
          <div id="tab-container"><button className="preview-tab " onClick={(e)=>{wantPreview?(e.target.classList.remove("active")):(e.target.classList.add("active"));setWantPreview(!wantPreview)}}>Preview</button></div>
          {wantPreview?
          (<MarkdownPreviewer input={body}/>):
          ( 
                <textarea className="preview-ta " id="new-text-area" cols="47" rows="45" defaultValue={body} placeholder='Enter Here...'
                    onChange={(e)=>{
                            setBody(e.target.value)
                    }}>
                </textarea>
          )}
        </div>
        <center>
          <form id="new-form" onSubmit={submitDoc}>
            <div className="form-elements"> 
              <div>
                <label htmlFor="custom-link">Custom link: </label>
                <input type="text" id="custom-link"  name='customLink' pattern="^[^-\s]*$" title="No spaces" className='input-field' ref={customLinkRef}/><br/><br/>
              </div>
              <div >
                <label htmlFor="edit-code">Edit Code: </label>
                <input type="text" id="edit-code"  name='editCode' pattern="^[^-\s]*$" title="No spaces" ref={editCodeRef} className='input-field'  />
              </div>
            </div>
                <div><button type="submit">Go</button></div>
          </form> 
        </center>
        
      </>))
}
export default New
