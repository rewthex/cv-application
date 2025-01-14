export default function Resume({contactInfo, educationInfo, experienceInfo, formSubmitted}) {
  
  if (formSubmitted) {
    return (
      <>
        {contactInfo.name}
        {contactInfo.email}
        {contactInfo.phone}
        {educationInfo}
        {experienceInfo}
      </>
    )
  }

  return (
    <>
      No submission sir!
    </>
  )
}