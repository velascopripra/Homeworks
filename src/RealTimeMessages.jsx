import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethFirebaseData, addDataToFirebase } from "./store/slices/firebaseThunk";
import "./styles/RealTimeMessages.css"; 

const RealTimeMessages = () => {
    const dispatch = useDispatch();
    const { data: messages, loading } = useSelector((state) => state.firebase);
    const [messageText, setMessageText] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        dispatch(fethFirebaseData());
    }, [dispatch]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (messageText.trim()) {
            const newMessage = {
                text: messageText,
                timestamp: Date.now(),
            };
            dispatch(addDataToFirebase(newMessage));
            setMessageText("");
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">Mensajes</div>
            <div className="chat-messages">
                {loading ? (
                    <p>Cargando mensajes...</p>
                ) : (
                    messages.map((msg, index) => (
                        <div className="message-bubble" key={index}>
                            {msg.text}
                        </div>
                    ))
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="chat-input"
                />
                <button onClick={handleSendMessage} className="chat-send-button">
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default RealTimeMessages;
