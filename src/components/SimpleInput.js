import { useState } from 'react'

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredNameTouched, setEnteredNameTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== ''
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
	
  let formIsValid = false

  if(enteredNameIsValid){
    formIsValid=true
    }

	const nameInputBlurHandler = (e) => {
		setEnteredNameTouched(true)
	}

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value)
	}

	const formSubmit = (e) => {
		e.preventDefault()
		setEnteredNameTouched(true)
		if (!enteredNameIsValid) return
		setEnteredName('')
		setEnteredNameTouched(false)
	}
	const nameInputClasses = !nameInputIsInvalid
		? 'form-control'
		: 'form-control invalid'

	return (
		<form onSubmit={formSubmit}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					value={enteredName}
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameInputIsInvalid && <p>Name must not be empty</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
