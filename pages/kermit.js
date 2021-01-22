/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState, useCallback } from 'react'

import NextImage from '../components/image'
import { fetchAPI } from '../lib/api'

import Carousel, { Modal, ModalGateway } from 'react-images'

const KermitPage = (props) => {

  const [ modalOpen, setModalOpen ] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }


  return(
    <div sx={{variant: 'containers.page'}}>

      <ModalGateway>
        { modalOpen ? (
          <Modal onClose={() => toggleModal()}>
            <Carousel views={props.pageData.images} />
          </Modal>
        ) : null }
      </ModalGateway>


      Kermit's Korner

      <button onClick={() => toggleModal()}>Click me</button>
      <div sx={{
        listStyle: 'none',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        m: 0,
        px: 3,
        py: 4,
      }}>
        {props.pageData.images.map(image => {
          return(
            <div sx={{
              boxShadow: 'base',
              overflow: 'hidden',
              width: '300px',
              bg: 'white',
              ':hover' : {
                boxShadow: '2px primary'
              }
            }}>
            <NextImage
              image={image}
              style={{
                width:'100%',
                height:'100px'// height:400,
              }}
            />

          </div>
        )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const pageData = await fetchAPI('/kermit-page')

  return {
    props: { pageData },
    revalidate: 1
  }

}

export default KermitPage
