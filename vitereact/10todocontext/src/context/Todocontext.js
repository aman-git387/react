import { useContext, createContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "hello",
            completed: false
        }
    ],
    addtodo: (todo) => {},
    updatetodo: (id, todo) => {},
    deletetodo: (id) => {},
    todocomplete: (id) => {}
})

export const Usetodo = () => {
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider