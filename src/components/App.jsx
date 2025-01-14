import { useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Resume from './Resume';

function App() {
	const [contactInfo, setContactInfo] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const [educationInfo, setEducationInfo] = useState('');
	const [experienceInfo, setExperienceInfo] = useState('');
	const [formSubmitted, setFormSubmitted] = useState(false);

	console.log(formSubmitted);

	return (
		<>
			<Form
				contactInfo={contactInfo}
				setContactInfo={setContactInfo}
				educationInfo={educationInfo}
				setEducationInfo={setEducationInfo}
				experienceInfo={experienceInfo}
				setExperienceInfo={setExperienceInfo}
				formSubmitted={formSubmitted}
				setFormSubmitted={setFormSubmitted}
			/>
			<Resume
				contactInfo={contactInfo}
				educationInfo={educationInfo}
				experienceInfo={experienceInfo}
        formSubmitted={formSubmitted}
			/>
		</>
	);
}

export default App;
