import { useState } from "react"
import Input from "../components/Input"
import { Message } from "../types"
import ChatBox from "../components/ChatBox"
import { completions } from "../services/chatCompletion"
import { useMutation } from "@tanstack/react-query"

const ChatPage = () => {
    const mutation = useMutation({
        mutationFn: (chat: Message) => completions(chat)
    })
    const [chat, setChat] = useState<Message>({
        date: new Date(),
        role: '',
        message: ''
    })
    const [conversations, setConversations] = useState<Message[]>([])


    const mutateCompletion = () => {
        mutation.mutate(chat, {
            onSuccess: (data) => {
                const response = data.choices[0].message
                setConversations((conversations) => [...conversations, { date: new Date(), role: response.role, message: response.content} as Message])
                
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            setConversations([ ...conversations, chat ])
            setChat({
                date: new Date(),
                role: '',
                message: ''
            })
            mutateCompletion()
        }
    }

    return(
        <div className="w-full h-full ">
            {
                conversations.length > 0 ? 
                    <div className="flex flex-col items-end justify-end h-full w-full p-6 pt-16 pb-32">
                        { conversations.map((item, index) => (
                            <div className="w-full" key={index}>
                                <ChatBox 
                                    date={item.date}
                                    message={item.message}
                                    role={item.role}
                                />
                            </div>
                        )) }
                    </div> : 
                    <div className="flex flex-row items-center justify-center h-full">
                        <p className="prose">Start a new chat by says hello!</p>
                    </div>
            }
            
            <div className={`bottom-0 p-6 fixed lg:w-[80%] w-full bg-base-100`}>
                <Input
                    value={chat.message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChat({ date: new Date, role: 'user', message: e.target.value})}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message ..."
                 />
            </div>
        </div>
    )
}

export default ChatPage