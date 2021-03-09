import { NextPage, GetStaticProps } from 'next'

// React Query
import { QueryClient, useQuery, useMutation } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { GetContactPage } from '../data/GetContactPage'

// Chakra
import { Box, Heading, Button, ButtonGroup, Text } from '@chakra-ui/react'

// Custom
import {
  InputControl,
  SelectControl,
  TextareaControl,
} from '../components/forms/formInputs'
import SocialIcons from '../components/socialIcons'
import { Alert } from '../components/feedback/alert/Alert'
import { PageTransition } from '../components/layout/pageTransition'
import { Section } from '../components/layout/section'

// Formik
import { Formik } from 'formik'
import * as yup from 'yup'

// Seo
import { NextSeo } from 'next-seo'
import Seo from '../components/seo'

const validationSchema = yup.object().shape({
  name: yup.string().required('Please provide your name!'),
  email: yup
    .string()
    .required('Please provide your email!')
    .email('Please provide a valid email address'),
  reason: yup.string().required('Please select a reason!'),
  message: yup.string().required('Please enter your message!'),
})

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('contact-page', GetContactPage)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const ContactPage: NextPage = () => {
  const { isLoading, error, data } = useQuery('contact-page', GetContactPage)

  if (isLoading) return <>'Loading'</>

  if (error) return <>Error...</>

  const SEO = Seo(data.seo)

  const formSubmission = useMutation((formData) =>
    fetch('https://formspree.io/f/xeqpwgqq', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
  )

  return (
    <>
      <NextSeo {...SEO} />
      <PageTransition>
        <Section>
          {formSubmission.isSuccess ? (
            <Alert
              colour="white"
              bg="green"
              message={`Thanks for your message! I'll be in touch as soon as I can`}
              action=""
            />
          ) : formSubmission.isError ? (
            <Alert
              colour="white"
              bg="red"
              message="Something went wrong"
              action="Try again"
            />
          ) : null}
          <Box
            w={['100%', '100%', '75%', '50%']}
            p={4}
            m="20px auto"
            align="center"
          >
            <Heading as="h1" size="xl" textAlign="center">
              {data.core.heading}
            </Heading>
            <Text>{data.core.intro}</Text>
            <br />
            <SocialIcons />
            <br />
            <p>or</p>
            <br />
            <Formik
              initialValues={{
                name: '',
                email: '',
                reason: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                formSubmission.mutate(values) // probably need a type for the form - can work with/replace yup schema??
                resetForm()
                setSubmitting(false)
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
                resetForm,
              }) => (
                <Box
                  as="form"
                  p={4}
                  borderWidth="1px"
                  rounded="lg"
                  shadow="1px 1px 3px rgba(0,0,0,0.3)"
                  onSubmit={handleSubmit}
                  align="center"
                >
                  <InputControl name="name" label="Your name" />
                  <InputControl name="email" label="Email address" />
                  <SelectControl name="reason" label="Reason for contact">
                    <option value={1}>Help</option>
                    <option value={2}>Enquiry</option>
                  </SelectControl>
                  <TextareaControl name="message" label="Your message" />
                  <ButtonGroup spacing={4}>
                    <Button
                      isLoading={isSubmitting}
                      loadingText="Submitting"
                      //  variantColor="blue.500"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Button
                      //  variantColor="teal"
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
        </Section>
      </PageTransition>
    </>
  )
}

export default ContactPage
