import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p></p>
      <StaticImage
        alt=""
        height="500"
        src="../images/mypic.jpg"
      />
    </Layout>
  )
}

export default IndexPage