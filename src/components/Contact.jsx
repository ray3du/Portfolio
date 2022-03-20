import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';


function Contact() {
  const SERVICE_ID="service_5trn9pt"
  const TEMPLATE_ID="template_xasbxpl"
  const USER_ID="ENmXVQUT-UE0hZyFW"

  const [values, setValues] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState("")
  const [success, setSuccess] = useState("")
  const [truncate, setTruncate] = useState("")

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (values.user_name === "" || values.user_email === "" || values.message === "") {
      setLoading(false)
      setErrors("Please fill in all fields")
      setTruncate("")
    } else {
      setLoading(true)
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
        .then((result) => {
            setSuccess("Your message was delivered successully")
            setErrors("")
            setTruncate("")
            setValues({...values, user_email: '', user_name: '', message: ''})
            setLoading(false)

          }, (error) => {
            setLoading(false)
            setErrors(error.text)
            setSuccess("")
            setTruncate("")
        })
        
    }
  }

  return (
    <div className='bg-white min-h-screen sm:mt-12 md:mt-4' id='contact' >
      <div className='my-2'>
        <p className='font-bold text-xl pt-8 pb-4'>Contact Me</p>
        <p className='text-gray-600'>Send an email using the form below</p>
        {success !== "" ?
          <div className={'w-11/12 md:w-7/12 m-auto bg-sky-300 rounded text-center text-white py-4 my-4 flex flex-row justify-between ' + truncate}>
            <p className='px-2 truncate'>{success}</p>
            <input type="submit" value="X" className='px-3 hover:cursor-pointer' onClick={() => setTruncate("hidden")}/>
          </div> : null  
        }
        {errors !== "" ?
          <div className={'w-11/12 md:w-7/12 m-auto bg-red-500 rounded text-center text-white py-4 my-4 flex flex-row justify-between ' + truncate}>
            <p className='px-2 truncate'>{errors}</p>
            <input type="submit" value="X" className='px-3 hover:cursor-pointer' onClick={() => setTruncate("hidden")}/>
          </div> : null  
        }
      
        <div className='w-11/12 md:w-8/12 lg:w-7/12 m-auto my-4 border border-gray-300 rounded shadow-md'>
          <form ref={form} className='p-4 my-4 text-justify' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label htmlFor="name">Name</label>
              <input type="text" name="user_name" value={values.user_name} onChange={handleChange} className='py-3 px-2 my-2 bg-slate-300 outline-none rounded text-gray-700' autoComplete='off'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email">Email</label>
              <input type="email" name="user_email" value={values.user_email} onChange={handleChange} className='py-3 px-2 my-2 bg-slate-300 outline-none rounded text-gray-700' autoComplete='off'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="2" value={values.message} onChange={handleChange} className='py-3 px-2 my-2 bg-slate-300 outline-none rounded text-gray-700' autoComplete='off'/>
            </div>
            <input type="submit" value={ loading ? "Sending .." : "Send"} className={loading ? 'my-4 px-4 py-2 bg-[tomato] rounded text-white hover:opacity-50' :'my-4 px-4 py-2 bg-[tomato] rounded text-white hover:cursor-pointer'} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact