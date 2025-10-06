import Sidebar from "./sidebar"
import TaskInput from "./TaskInput"
import { VariableProvider } from "./variableContext"

function App(){
return(<>
  <VariableProvider>
   <Sidebar/>
   <TaskInput/>
  </VariableProvider>
</>)
}
export default App