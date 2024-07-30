import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import FeaturesSectionCard from './components/FeaturesSectionCard'
import features from './components/features'
import AboutUs from './components/AboutUs'


import './App.css'

function App() {
    
  const featuresSectionCards =  features.map((feature) => {
    return (
      <FeaturesSectionCard
        key={feature.id}
        title={feature.title}
        img={feature.img}
        description={feature.description}
      />
    )
  }
  )

  console.log(featuresSectionCards)

  return (
    <div className=' relative'>
      <Navbar />
      <LandingSection />

      <div className='features-section max-w-screen-xl mx-auto'> 
      <h1 className="text-4xl font-bold text-center mt-10 p-4">FEATURES</h1>
      <div className='flex'>
          {featuresSectionCards}
      </div>
      <AboutUs />
      </div>
    
    </div>
  )
}

export default App
