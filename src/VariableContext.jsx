/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";

const VariableContext =createContext();

export const VariableProvider =({children})=>{


    const [visible,setVisible] =useState(true)

const [task,setTask]=useState(()=>{
    const savedData =localStorage.getItem('Current tasks');
    return savedData ? JSON.parse(savedData) : [];
})

const [completedTasks,setCompletedTasks]= useState(()=>{
    const savedData =localStorage.getItem('Current tasks');
    return savedData ? JSON.parse(savedData) : [];
})
const [editIndex,setEditIndex] = useState(null);
const [editText,setEditText] = useState("");




useEffect(()=>{
    localStorage.setItem('Current tasks',JSON.stringify(task))
},[task])




 return(
        <VariableContext.Provider
        value={{
            task,
            setTask,
            completedTasks,
            setCompletedTasks,
            visible,
            setVisible,
            editIndex,
            setEditIndex,
            editText,
            setEditText,
            }}>
            {children}
        </VariableContext.Provider>
    )
}
export const useVariable = () => {
    const context = useContext(VariableContext)
  
    if (context) return context
  
    throw new Error('The context cannot be used outside the VariableProvider')
  }
