import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../lib/firebase-config'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound';


function Main() {
    const {customLink}= useParams();
    const  [input, setInput] = useState(``)
    const [exist, setExist] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getData();
    }, [])
    
    async function getData () {
        let temp
        const dataCollectionRef=collection(db,'data');
        let que = query(dataCollectionRef,where("docData.customLink","==",customLink));
        let querySnapshot= await getDocs(que);
        console.log(querySnapshot)
        if(querySnapshot.docs.length!=0) {
          setExist(true)
          querySnapshot.forEach((doc) =>
            {
               temp=doc.data();
            }
          );
          console.log(temp)
          setInput(temp.docData.body)
        }
        console.log(input)
        setIsLoading(false) 

    }
    return isLoading?(<Loading/>):(exist?(<><div className='text-area-container'>  
      <div className='preview-ta' id="main-preview-ta">
              <ReactMarkdown style={{ whiteSpace: 'pre-wrap' }}>{input}</ReactMarkdown>
      </div>
      </div>
      </>
        
      ):(<center>{input}</center>) )
        
}

export default Main