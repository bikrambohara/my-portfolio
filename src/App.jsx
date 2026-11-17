// import React from 'react'


// import Header from './component/Header'
// import Navbar from './component/Navbar'
// import About from './component/About'
// import Education from './component/Education'
// import Experience from './component/Experience'
// import Skills from './component/Skills'
// import Certifications from './component/Certifications'
// import Project from './component/Project'
// import Contact from './component/Contact'
// import Footer from './component/Footer'
// const App = () => {
//   return (
//     <div>
       
//       <Navbar/>
//       <Header/>
//       <About/>
//       <Education/>
//       <Experience/>
//       <Skills/>
//       <Certifications/>
//       <Project/>
//       <Contact/>
//       <Footer/>
//     </div>
//   )
// }

// export default App




import React from 'react';


import Header from './component/Header';
import Navbar from './component/Navbar';
import About from './component/About';
import Education from './component/Education';
import Experience from './component/Experience';
import Skills from './component/Skills';
import Certifications from './component/Certifications';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>

      <Navbar />

      <section id="Home">
        <Header />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Education">
        <Education />
      </section>

      <section id="Experience">
        <Experience />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Certificate">
        <Certifications />
      </section>

      <section id="Project">
        <Project />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <Footer />

    </div>
  )
}

export default App;