import { Box, Heading, Button, ButtonGroup } from '@chakra-ui/react'

import { InputControl, SelectControl, TextareaControl } from '../components/formInputs'
import SocialIcons from '../components/socialIcons'

import { Formik, Form } from 'formik'
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
    <Box w={['100%', '100%', '75%', '50%']} p={4} m="20px auto" align="center">
      <Heading as='h1' size='xl' textAlign='center'>
        Get in touch
      </Heading>
      <br />
      <SocialIcons />
      <br />
      <p>or</p>
      <br />
      {/* <p>Use this form to send me a message.</p> */}
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
          console.log(values)
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
          isSubmitting,
          resetForm
        }) => (
          <Box as='form' p={4} borderWidth='1px' rounded='lg' shadow='1px 1px 3px rgba(0,0,0,0.3)' onSubmit={handleSubmit} align="center">
              <InputControl name='name' label='Your name' />
              <InputControl name='email' label='Email address' />
              <SelectControl name='reason' label='Reason for contact'>
                <option value={1}>Help</option>
                <option value={2}>Enquiry</option>
              </SelectControl>
              <TextareaControl name='message' label='Your message' />
              <ButtonGroup spacing={4}>
               <Button
                 isLoading={isSubmitting}
                 loadingText="Submitting"
                 variantColor="blue.500"
                 type="submit"
               >
                 Submit
               </Button>
               <Button
                 variantColor="teal"
                 variant="outline"
                 onClick={resetForm}
                 isDisabled={isSubmitting}
               >
                 Reset
               </Button>
           </ButtonGroup>

          </Box>
        )}
      </Formik>
    </Box>
  )
}

export default ContactPage
