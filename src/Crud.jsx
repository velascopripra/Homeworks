import React from "react";
import useCollection from "./firebase/UseCollection";
import { useState, useEffect } from "react";

export const Crud = () => {
  const [user, setUser] = useState({ name: "" });
  const [editingId, setEditingId] = useState(null);
  const { add, getAll, isPending, results, update, deleteD } = useCollection("users");

  const getAllDocs = async () => {
    await getAll([]);
  };

  const save = async () => {
    if (editingId) {
      await update(editingId, user);
      setEditingId(null);
    } else {
      await add(user);
    }
    setUser({ name: "" });
    await getAllDocs();
  };

  const edit = (item) => {
    setUser({ name: item.name });
    setEditingId(item.id);
  };

  const del = async (id) => {
    await deleteD(id);
    await getAllDocs();
  };

  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <>
        <h1>CRUD</h1>
        <hr></hr>
        <input type="text" onChange={handleSetUser} value={user.name} placeholder="Añade un nombre"/>
        <br/>
        <br/>
        <button type="button" onClick={save}>
            {editingId ? "Actualizar" : "Guardar"}
        </button>
        {isPending && <span>Saving...</span>}
        <ul>
            {results.map((item) => (
            <li key={item.id}>
                {item.name}{" "}
                <button onClick={() => edit(item)}>Edit</button>{" "}
                <button onClick={() => del(item.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </>
  );
};