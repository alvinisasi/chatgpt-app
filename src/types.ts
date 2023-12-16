export interface InputProps {
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
    placeholder?: string
}

export interface Message {
    date: Date
    role: string
    message: string
}