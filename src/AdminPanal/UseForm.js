import { useState } from 'react'

export default function UseForm(initialState = {}) {
    const [inputValue, setInputValue] = useState({ initialState })

    const resetForm = () => {
        setInputValue(initialState)
    }

    const handleInputChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        })
    }

    return {
        inputValue,
        handleInputChange,
        resetForm,
    }
}
