import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div style={{
      display: 'inline-block',
      float: 'left',
      marginBottom: '1.45rem',
      maxWidth: '300px',
      width: '100%',
    }}>
      <Image />
    </div>
    <p className='page__copy'>Contact me at derek@derekree.se or 425-610-9560 to book for speaking opportunities, consulting, or coffee.</p>
    
    <Link to="/resume/">Resume</Link>
    <Link to="/portfolio/">Portfolio</Link>
  </Layout>
)

export default IndexPage
