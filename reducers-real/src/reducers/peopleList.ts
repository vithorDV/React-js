import { useReducer } from "react";
import {v4 as uuidV4 } from 'uuid'
type Person = {
    id:string,
    name:string
}

type ActionType = {
    type:String,
    payload?:{
        name?:string,
        id?:string
    }
}


const initialState: Person[] = []

const reducer = (state:Person[],action: ActionType) => {
switch(action.type){
    case 'ADD':
        if(action.payload?.name){
            const copyState = [...state]
            copyState.push({
                id: uuidV4(),
                name: action.payload?.name
            })
            return copyState
        }
        
    break;
    case 'DEL':
        if(action.payload?.id){
            let copyState = [...state]
            copyState = copyState.filter(item => item.id !== action.payload?.id)
            return copyState
        }
    break;
    case 'ORDER':
        let copyState = [...state]
        copyState = copyState.sort((a,b) => (a.name > b.name)?1:-1)
        return copyState
    break;

}
return state
}

export const usePeopleList = () =>{
 return useReducer(reducer,initialState)
}