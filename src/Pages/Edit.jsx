import React from 'react'
import { Navigate, useParams,useNavigate } from 'react-router-dom'
import {useState,useEffect,} from 'react'
import {db} from '../lib/firebase-config'
import { updateDoc,collection, getDocs, query, where, doc } from 'firebase/firestore';
import '../markdown.styles.scss'
import MarkdownPreviewer from '../components/markdownPreviewer';


function Edit() {
    const {customLink}= useParams();
    const [input, setInput] = useState('')
    const [editCode, setEditCode] = useState('')
    const [wantPreview, setWantPreview] = useState(false)
    let docId,updateForm;
    let navigate = useNavigate();
    useEffect(() => {
      getData();
    }, [])
    async function getData () {
      let temp;
      const dataCollectionRef=collection(db,'data');
      let que = query(dataCollectionRef,where("docData.customLink","==",customLink));
      let querySnapshot= await getDocs(que);
      if(querySnapshot.docs.length!=0) {
        //setExist(true)
        querySnapshot.forEach((doc) =>
          {
             temp=doc.data();
             docId=doc.id
          }
        );
        localStorage.setItem("docId",docId);
        setEditCode(temp.docData.editCode);
        setInput(temp.docData.body)
      }
    }
    updateForm=document.getElementById('update-form')
    
    function updootDoc(e){
      e.preventDefault()
      let enteredCode=document.getElementById('edit-code').value;
      if(editCode===enteredCode) {
         let docRef=doc(db,'data',localStorage.getItem("docId"))
         updateDoc(docRef,{'docData.body':input}).then(()=>{console.log("")})
         navigate(`/${customLink}`)
      }
      else {
        alert('wrong editcode'+'Need to add warning thingies bye')
        //need to add error of not matching 

      }
  }
    return (<>
    <div className='text-area-container edit-area'>
      <div id="tab-container">
        <button className="preview-tab" onClick={(e)=>{wantPreview?(e.target.classList.remove("active")):(e.target.classList.add("active"));setWantPreview(!wantPreview)}}>preview &nbsp;</button>
      </div>
      {wantPreview?
      (<MarkdownPreviewer input={input}/>):
      (
             <textarea className="preview-ta " id="new-text-area" cols="47" rows="45" defaultValue={input} placeholder='Enter Here...'
                onChange={(e)=>{
                        setInput(e.target.value)
                }}>
            </textarea>
      )}
    </div>
      <center>
        <form onSubmit={updootDoc}>
              <label htmlFor="edit-code">Enter Edit Code: </label>
              <input type="text" id="edit-code" pattern="^[^-\s]*$" title="No spaces" name='editCode' className='input-field'  />
              <br/><br/>
              <button type='submit'>Edit</button>
        </form> 
      </center>
        </>  
    )
}

export default Edit