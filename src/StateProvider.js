import React, {createContext, useContext, useReducer} from 'react'

    // prepare the data layer

 export const StateContext =createContext()

    // wrap our app with this on oreder to provide the context we create

 export const StateProvider = ({reducer, initialState, children}) =>(
     <StateContext.Provider value={useReducer(reducer, initialState)} >
         {children}
     </StateContext.Provider>
 );

    // this is how we pull the infromation from the data layer we create
 export const useStateValue =() => useContext(StateContext)
