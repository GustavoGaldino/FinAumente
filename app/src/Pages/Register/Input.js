import { useState } from 'react'

import './Input.css'

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

const Input = ({fieldName, hideable}) => {

    const [hidden, setHidden] = useState(false)

    const toggleHidden = () => {
        setHidden(!hidden)
    }

    return (
        <>
        { ! hideable ?
            <input placeholder={fieldName || "E-mail"} type="text" ></input> :
            <div className="input-div">
                <input placeholder={fieldName || "E-mail"} type={hidden ? "password": "text"} ></input>
                { ! hidden ?
                    <IoEyeOutline style={{
                        position: "relative",
                        right: "2.25rem",
                        fontSize: "1.5rem",
                    }} onClick={toggleHidden} />
                    :
                    <IoEyeOffOutline style={{
                        position: "relative",
                        right: "2.25rem",
                        fontSize: "1.5rem"
                    }} onClick={toggleHidden} />
                } 
            </div>
        }
        </>
    );
}

export default Input;