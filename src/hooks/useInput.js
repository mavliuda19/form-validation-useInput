import React, { useState } from 'react'

const useInput = (validate) => {
	const [values, setValues] = useState('')
	const [valueTouched, setValueTouched] = useState(false)

	const enteredValueIsValid = values.trim() !== '' && validate.test(values)
	const inputIsInvalid = !enteredValueIsValid && valueTouched

	const changeHandler = (e) => {
		setValues(e.target.value)
	}
	const onBlurHandler = (e) => {
		setValueTouched(true)
	}
	return {
		values,
		changeHandler,
		onBlurHandler,
		enteredValueIsValid,
		inputIsInvalid,
		setValues,
		setValueTouched,
	}
}
export default useInput
