import { useState } from "react";
import Stacks from "./Stacks";
import "./Books.css"

const initialBooks = [
    { name: "Cien Años de Soledad", ISBN: "978-84-376-0494-7", author: "Gabriel García Márquez", email: "ggmarquez@realismo-magico.com" },
    { name: "Don Quijote de la Mancha", ISBN: "978-84-670-0404-1", author: "Miguel de Cervantes", email: "mcervantes@siglooro.com" },
    { name: "La Sombra del Viento", ISBN: "978-84-08-06775-8", author: "Carlos Ruiz Zafón", email: "crzafon@editorialplaneta.com" },
    { name: "Rayuela", ISBN: "978-84-204-8491-0", author: "Julio Cortázar", email: "jcortazar@literaturaargentina.com" },
    { name: "Ficciones", ISBN: "978-84-206-2741-0", author: "Jorge Luis Borges", email: "jlborges@ficcioninfinita.org" }
];


const Books = () => {
    const [name, setName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const [stack] = useState(new Stacks());  
    const [books, setBooks] = useState(initialBooks);  

    const handleAdd = (e) => {
        e.preventDefault(); 
        const newBook = { name, ISBN: isbn, author, email };
        stack.push(newBook);  
        setBooks([...books, newBook]);  
        setName("");
        setIsbn("");
        setAuthor("");
        setEmail("");
    };

    

    return (
        
            <div className="books-container">
                <h1>Agregar Libro</h1>
                <form onSubmit={handleAdd}>
                    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <br />
                    <input placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required/>
                    <br />
                    <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                    <br />
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <br />
                    <br />
                    <button type="submit">Agregar</button>
                </form>
                <h1>Libros en el sistema</h1>
                <ul>
                    {books.map((book, idx) => (
                        <li key={idx}>
                            {book.name} - {book.ISBN} by {book.author} ({book.email})
                        </li>
                    ))}
                </ul>
            </div>
    );
};

export default Books;
