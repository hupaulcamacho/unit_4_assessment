import { useState } from 'react'

const useInputHook = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => {
        setValue(e.target.value)
    }
    return [value, handleChange]
}

export default useInputHook;