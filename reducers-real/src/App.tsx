import React, { useState } from 'react';
import {usePeopleList} from './reducers/peopleList'

function App() {
  const [list,dispatch] = usePeopleList()
  const [input,setInput] = useState('')

  function handleADD(){
    if(input){
      dispatch({
        type:'ADD',
        payload:{
          name:input
        }
      });
      setInput('')
    }
  }

  function handleRemove(id:string){
    dispatch({
      type:'DEL',
      payload:{id}
    })
  }

  function handleOrder(){
    dispatch({
      type:"ORDER",

    })
  }

  function handleInput(e:React.ChangeEvent<HTMLInputElement>){
    setInput(e.target.value)
  }
  return (
    <div style={{padding:'5px'}}>
      <input type="text"  value={input} onChange={handleInput} style={{'border':'1px solid black', 'margin':'10px'}}/>
      <button onClick={handleADD} style={{'border':'2px solid black', 'margin':'10px', 'padding':'5px'}}>Adicionar</button>
      <hr />
      <button onClick={handleOrder} style={{'border':'2px solid black', 'margin':'10px', 'padding':'5px'}}>Ordenar</button> <br />


      Lista de pessoas:
      <ul>
     {list.map((item,index)=>(
      <li key={index}>
        {item.name}
        <button onClick={()=>handleRemove(item.id)} style={{'border':'2px solid black', 'margin':'10px', 'padding':'5px'}}>Remover</button>
      </li>
     ))}
     </ul>
    </div>
  ) 
}

export default App;
