import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../lib/firebase-config'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound';
import { Navigate, useNavigate } from "react-router-dom";
import '../markdown.styles.scss'
import MarkdownPreviewer from '../components/markdownPreviewer';




function Main() {
    const {customLink}= useParams();
    const  [input, setInput] = useState(``)
    const [exist, setExist] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    let navigate=useNavigate()
    useEffect(() => {
      getData();
    }, [])
    
    function editClickHandler(e) {
        e.preventDefault();
        navigate('./edit')
    }
    async function getData () {
        let temp;
        const dataCollectionRef=collection(db,'data');
        let que = query(dataCollectionRef,where("docData.customLink","==",customLink));
        let querySnapshot= await getDocs(que);
        if(querySnapshot.docs.length!=0) {
          setExist(true)
          querySnapshot.forEach((doc) =>
            {
               temp=doc.data();
            }
          );
          setInput(temp.docData.body)
        }
        setIsLoading(false) 

    }
    return isLoading?(<Loading/>):(exist?(
      <>
      <div className='text-area-container'>
         <MarkdownPreviewer input={input}/>
      </div>
      <center><button type="submit" className='edit-button' onClick={editClickHandler}>Edit</button></center><br/>
      </>
      ):(<center><NotFound/></center>) )
        
}

export default Main 