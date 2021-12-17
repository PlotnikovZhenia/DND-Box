import React, {useState} from'react';
import './changeNumber.css';

const ChangeNumber=({addNumber})=>{
    const [newNumber,setNewNumber]=useState(10);
    const [erorrNumber,setErrorNumber]=useState(false);
    let classNameError='';
    const numberInput=(event)=>{
        if(event.target.value>9){
            setNewNumber(event.target.value);
            setErrorNumber(false)
        }else {
            setErrorNumber(true);
        }
    }
    if (erorrNumber) {
        classNameError='inputError';
    }
    else{
        classNameError='';
    }
    return(
    <>
        <p>For example, 10 10*10 tiles</p>
        <p>WARNING ! You can't change size less 10 !</p>
        {erorrNumber?<p style={{color:'red'}}>You can't use this size</p>:null}
        <input type="number" className={classNameError} onChange={numberInput}/>
        <button onClick={()=>addNumber(newNumber)} >
            Add my size
        </button>
    </>
    )
}


export default ChangeNumber;