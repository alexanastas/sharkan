import { useState } from "react";
import axios from "axios"

import { sharksData } from "./endpoints";

import { type IShark } from "./types";

//components
import Header from "./components/Header";
import SharksList from "./components/SharksList";
import Sidebar from "./components/Sidebar";


function App() {

  const [sharks,setSharks] = useState<IShark[]>([])
  const [sidebar,setSidebar] = useState<boolean>(false)


  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }


  const loadSharks = async () => {

    const request  = await axios.get(sharksData)
    const response = await request.data


    if(request.status == 200) {
      setSharks(response)
      console.log(request.data)
    }




  

  }






  return (
    <>
     
     <Header results={sharks.length} refresh={loadSharks} sidebar={toggleSidebar}/>
     <Sidebar isOpen={sidebar} closer={toggleSidebar}/>
     <SharksList data={sharks}/>
    </>
  )
}

export default App
