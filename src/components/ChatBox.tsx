import { Message } from "../types";

const ChatBox: React.FC<Message> = ({ date, role, message }) => {
    return(
        <div className={`chat ${role === 'user' ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-header">
                {role} 
                <time className="text-xs opacity-50"> {date.getHours()}:{date.getMinutes()}</time>
            </div>
            <div className={`chat-bubble ${role === 'user' && 'chat-bubble-warning'}`}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatBox