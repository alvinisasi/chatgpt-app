import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, onKeyDown  }) => {
    return(
        <input 
            value={value}
            placeholder={placeholder}
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="input input-bordered input-warning w-full rounded-full italic"
        />
    )
}

export default Input