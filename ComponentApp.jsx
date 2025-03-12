import './App.css'
import { useState } from "react";
import { ComponentAppHijo } from "./ComponentAppHijo";

const ComponentApp = () => {
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState("");

    const handleAdd = () => {
        const trimmedValue = value.trim(); // Elimina espacios en blanco al inicio y al final

        if (trimmedValue === "") {
            alert("No puedes agregar una categoría vacía.");
            return;
        }

        const newCategory = {
            id: categories.length + 1,
            name: trimmedValue
        };

        setCategories([...categories, newCategory]);
        setValue('');
    };

    return (
        <>  
            <div>
                <input
                    placeholder="Escribe una categoría"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <ComponentAppHijo onCallParentFn={handleAdd} />
                
                <h2>Lista de Categorías</h2>
                {categories.length === 0 ? (
                    <p>No has agregado categorías a la lista</p>
                ) : (
                    <ul>
                        {categories.map((category) => (
                            <li key={category.id}>{category.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default ComponentApp;
