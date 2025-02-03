import React, { useState } from 'react'
import styles from './InfoAndForm.module.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState<'success' | 'error' | ''>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }
  return (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
      className={styles.contact_form}
    >
      <input type='hidden' name='form-name' value='contact' />
      <p hidden>
        <label>
          Don’t fill this out: <input name='bot-field' />
        </label>
      </p>

      <label>
        Name *
        <input type='text' name='name' required onChange={handleChange} />
      </label>

      <label>
        Email *
        <input type='email' name='email' required onChange={handleChange} />
      </label>

      <label>
        Phone Number *
        <input type='tel' name='phone' required onChange={handleChange} />
      </label>

      <label>
        Message *
        <textarea name='message' required onChange={handleChange} />
      </label>

      {/* Google reCAPTCHA */}
      <div data-netlify-recaptcha='true'></div>

      <button type='submit'>Send Message</button>
      {status === 'success' && (
        <p>✅ Your message has been sent successfully!</p>
      )}
      {status === 'error' && (
        <p>❌ Oops! Something went wrong. Please try again.</p>
      )}
    </form>
  )
}

export default ContactForm
