import useInput from '../hooks/useInput'
import { nameRegex, validEmailRegex } from '../utils/constants/constants'

const BasicForm = () => {
	const firstName = useInput(nameRegex)
	const lastName = useInput(nameRegex)
	const email = useInput(validEmailRegex)

	let formIsValid = false

	if (
		firstName.enteredValueIsValid &&
		lastName.enteredValueIsValid &&
		email.enteredValueIsValid
	) {
		formIsValid = true
	} else {
		formIsValid = false
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if (
			!firstName.enteredValueIsValid &&
			!lastName.enteredValueIsValid &&
			!email.enteredValueIsValid
		)
			return
		firstName.setValues('')
		lastName.setValues('')
		email.setValues('')

		firstName.setValueTouched(false)
		lastName.setValueTouched(false)
		email.setValueTouched(false)
	}

	const firstNameInputClasses = !firstName.inputIsInvalid
		? 'form-control'
		: 'form-control invalid'

	const lastNameInputClasses = !lastName.inputIsInvalid
		? 'form-control'
		: 'form-control invalid'

	const emailInputClasses = !email.inputIsInvalid
		? 'form-control'
		: 'form-control invalid'

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={firstNameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						name='firstName'
						value={firstName.values}
						onChange={firstName.changeHandler}
						onBlur={firstName.onBlurHandler}
						type='text'
					/>
					{firstName.inputIsInvalid && <p>First Name is invalid!</p>}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						name='lastName'
						value={lastName.values}
						onChange={lastName.changeHandler}
						onBlur={lastName.onBlurHandler}
						type='text'
					/>
					{lastName.inputIsInvalid && <p>Last Name is invalid!</p>}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					name='email'
					type='email'
					value={email.values}
					onChange={email.changeHandler}
					onBlur={email.onBlurHandler}
					type='text'
				/>
				{email.inputIsInvalid && <p>E-Mail Address is invalid!</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
