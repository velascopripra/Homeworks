import React from "react";

export const ComponentAppHijo = ({onCallParentFn}) => {
    const letsCallParent = (evt) =>{
        onCallParentFn() 
    }
    return (
        <button onClick={(evt) => letsCallParent(evt)}>Añadir Categoría</button>
    )
}