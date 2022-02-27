import { useState } from 'react'
import { nameRegex, validEmailRegex } from '../utils/constants/constants'

const BasicForm = () => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
	})
	const [enteredNameTouched, setEnteredNameTouched] = useState(false)
	const [enteredlnameTouched, setEnteredLnameTouched] = useState(false)
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

	const firstNameIsValid =
		values.firstName.trim() !== '' && nameRegex.test(values.firstName)
	const firstInputisValid = !firstNameIsValid && enteredNameTouched

	const lastNameIsValid =
		values.lastName.trim() !== '' && nameRegex.test(values.lastName)
	const lastInputisValid = !lastNameIsValid && enteredlnameTouched

	const emailIsValid =
		values.email.trim() !== '' && validEmailRegex.test(values.email)
	const emailInputisValid = !emailIsValid && enteredEmailTouched

	let formIsValid = false

	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true
	} else {
		formIsValid = false
	}

	const inputChangeHandler = (e) => {
		const currentInput = e.target.name
		setValues({
			...values,
			[currentInput]: e.target.value,
		})
	}
	console.log(values)
	const fistNameBlurHandler = (e) => {
		setEnteredNameTouched(true)
	}
	const lastNameBlurHandler = (e) => {
		setEnteredLnameTouched(true)
	}
	const emailBlurHandler = (e) => {
		setEnteredEmailTouched(true)
	}

	console.log(values.firstName)

	const submitHandler = (e) => {
		e.preventDefault()
		setEnteredNameTouched(true)
		setEnteredLnameTouched(true)
		setEnteredEmailTouched(true)
		if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) return
		setValues({ firstName: '', lastName: '', email: '' })
		setEnteredNameTouched(false)
		setEnteredLnameTouched(false)
		setEnteredEmailTouched(false)
	}

	const firstNameInputClasses = !firstInputisValid
		? 'form-control'
		: 'form-control invalid'

	const lastNameInputClasses = !lastInputisValid
		? 'form-control'
		: 'form-control invalid'

	const emailInputClasses = !emailInputisValid
		? 'form-control'
		: 'form-control invalid'

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={firstNameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						name='firstName'
						value={values.firstName}
						onChange={inputChangeHandler}
						onBlur={fistNameBlurHandler}
						type='text'
					/>
					{firstInputisValid && <p>First Name is invalid!</p>}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						name='lastName'
						value={values.lastName}
						onChange={inputChangeHandler}
						onBlur={lastNameBlurHandler}
						type='text'
					/>
					{lastInputisValid && <p>Last Name is invalid!</p>}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					name='email'
					type='email'
					value={values.email}
					onChange={inputChangeHandler}
					onBlur={emailBlurHandler}
					type='text'
				/>
				{emailInputisValid && <p>E-Mail Address is invalid!</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
