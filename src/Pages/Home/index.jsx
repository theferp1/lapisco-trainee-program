import React from 'react'
import Layout01 from '../../Layouts/Layout01'
import Layout02 from '../../Layouts/Layout02'
import Layout03 from '../../Layouts/Layout03'
import NavBar from '../../components/NavBar'
import Footer from '../../components/footer'


export const Home = () => {
  return (
    <>
        <NavBar />
        <Layout01 />
        <Layout02 />
        <Layout03 />
        <Footer />
    </>
  )
}
