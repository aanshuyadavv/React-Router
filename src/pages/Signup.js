import React from 'react'
import Template from '../components/Template'

const Signup = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className='h-[130vh] bg-richblack-900'>
      <Template
      title="Join the millions learning to code with studynotion for free"
      desc1="Build skills for today, tomorrow and beyond"
      desc2="Education to future proof your career"
      formType="signup"
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
