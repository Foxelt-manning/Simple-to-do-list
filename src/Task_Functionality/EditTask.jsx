import { useVariable } from "../variableContext"
import { Check, X } from "lucide-react";

function EditTask(){
    
        const{task,setTask,editIndex,editText,setEditIndex,setEditText} =useVariable();

        function saveEdit(){
            if (editText.trim() === "") return;
            const updateTask =[...task]
            updateTask[editIndex].title= editText;
            setTask(updateTask);
            setEditIndex(null);
            setEditText("");
        }

        function cancelEdit(){
            setEditIndex(null);
            setEditText("");
        }

        return(
            <>
                <div>
                    <input type="text"
                        value={editText}
                        onChange={(e)=>setEditText(e.target.value)} />

                    <button
                        onClick={()=>saveEdit()}
                        className="success"
                    >
                        <Check />
                    </button>
                    <button
                    onClick={()=>cancelEdit()}
                    className="delete"><X/></button>
                </div>
            </>
        );

}
export  default EditTask