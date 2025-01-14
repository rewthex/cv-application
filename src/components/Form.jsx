import '../styles/Form.css';

export default function Form({
	contactInfo,
	setContactInfo,
	educationInfo,
	setEducationInfo,
	experienceInfo,
	setExperienceInfo,
  setFormSubmitted
}) {
	const { name, email, phone } = contactInfo;

	function handleContactChange(e) {
		const { name, value } = e.target;
		setContactInfo({ ...contactInfo, [name]: value });
	}

	return (
		<form>
			<input
				name='name'
				type='text'
				placeholder='Name'
				value={name}
				onChange={handleContactChange}
			/>
			<input
				name='email'
				type='email'
				placeholder='Email'
				value={email}
				onChange={handleContactChange}
			/>
			<input
				name='phone'
				type='tel'
				placeholder='Phone'
				value={phone}
				onChange={handleContactChange}
			/>
			<input
				name='education'
				type='text'
				placeholder='Education'
				value={educationInfo}
				onChange={(e) => setEducationInfo(e.target.value)}
			/>
			<input
				name='experience'
				type='text'
				placeholder='Experience'
				value={experienceInfo}
				onChange={(e) => setExperienceInfo(e.target.value)}
			/>
			<button type='button' onClick={() => setFormSubmitted(true)}>Submit</button>
		</form>
	);
}
