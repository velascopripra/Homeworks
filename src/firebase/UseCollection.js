import { db } from "./config"
import { useState } from "react"
import { collection, addDoc, query, where, getDocs, orderBy, updateDoc, deleteDoc, doc } from "firebase/firestore"

const useCollection = (table) => {

    const [results, setResults] = useState([])
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const getAll = async (condition) => {
        setResults([]);
        let q;
        if (condition && condition.length === 3) {
            q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
        } else {
            q = query(collection(db, table));
        }
    
        const resDoc = await getDocs(q);
        const docsArray = [];
        resDoc.forEach(doc => {
            docsArray.push({ ...doc.data(), id: doc.id });
        });
    
        setResults(docsArray);
    };

    const add = async (doc) => {
        setError(null)
        setIsPending(null);

        try{
            let resDoc = await addDoc(collection(db, table), doc)
            console.log('document ID: '+resDoc.id)
            setIsPending(false)
            return resDoc
        }catch(err){
            console.log(err.message)
            setError('could not send the message')
            setIsPending(false)
            return null
        }
    }

    const update = async(id, newData) => {
        try{
            const ref = doc(db, table, id);
            await updateDoc(ref, newData);
            return true; 
        }catch(err){
            console.log(err.message)
            setError('could not update')
            return false
        }
    }

    const deleteD = async(id) => {
        try{
            const ref = doc(db, table, id);
            await deleteDoc(ref);
            return true;
        }catch(err){
            console.log(err.message)
            setError('could not delete')
            return false
        }
    }

    return {error, isPending, results, add, getAll, update, deleteD}

}

export default useCollection