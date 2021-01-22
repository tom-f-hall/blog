/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Formik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string()
    .required('Please provide your name!'),
  email: yup.string()
    .required('Please provide your email!')
    .email('Please provide a valid email address'),
  reason: yup.string()
    .required('Please select a reason!'),
  message: yup.string()
    .required('Please enter your message!')
})


const ContactPage = () => {
  return(
    <div sx={{variant: 'containers.page'}}>
      <h1 sx={{variant: 'text.headingL'}}>Get in touch!</h1>
      <p>Use this form to send me a message.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          reason: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={ (values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          // send
          setSubmitting(false)
          resetForm()
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          isSubmitting
        }) => (
          <div as='form' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' sx={{variant: 'forms.label'}}>Name</label>
              <input
                id='name'
                name='name'
                placeholder='Your name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  variant: 'forms.input'
                }}
              />
              {touched.name && errors.name
                ? <p sx={{color: 'red'}}>{errors.name}</p>
                : null }
            </div>
            <div>
              <label htmlFor='email' sx={{variant: 'forms.label'}}>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Your email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  variant: 'forms.input'
                }}
              />
              {touched.email && errors.email
                ? <p sx={{color: 'red'}}>{errors.email}</p>
                : null }
            </div>
            <div>
              <label htmlFor='reason' sx={{variant: 'forms.label'}}>Reason</label>
              <select
                id='reason'
                name='reason'
                value={values.reason}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  variant: 'forms.select'
                }}
              >
                <option>{``}</option>
                <option>Dev work</option>
                <option>Help</option>
              </select>
              {touched.reason && errors.reason
                ? <p sx={{color: 'red'}}>{errors.reason}</p>
                : null }
            </div>
            <div>
              <label htmlFor='message' sx={{variant: 'forms.label'}}>Message</label>
              <textarea
                id='message'
                name='message'
                rows={6}
                placeholder='Your message'
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  variant: 'forms.textarea'
                }}
              />
              {touched.message && errors.message
                ? <p sx={{color: 'red'}}>{errors.message}</p>
                : null }
            </div>
            <div>
              <button type='submit' disabled={isSubmitting}>Send</button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default ContactPage
