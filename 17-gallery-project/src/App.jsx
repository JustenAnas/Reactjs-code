import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";

 
 const App = () => {

 const [data, setData] = useState([]);
 const [index, setIndex] = useState(1);

  const getData = async()=>{
   const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=32`);

     setData(response.data);
  }

  useEffect(function(){
  getData()
  },[index])

  let printData = 'loading....'

  if(data.length>0){
    printData = data.map(function(e,index){
      return <div key = {index}>
     <Card e={e}/>
      </div>
    })
  }

   return (
     <div 
     className="bg-black overflow-auto text-white p-4 h-full">
      <div 
      className="flex flex-wrap gap-2 py-4">
        {printData}
      </div>
      <Button 
      index={index}
      setIndex={setIndex}
      setData={setData} />
    </div>
   )
 }
 
 export default App