import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import FeaturesSectionCard from './components/FeaturesSectionCard'
import features,{services} from './components/features'
import AboutUs from './components/AboutUs'
import ServiceCard from './components/ServiceCard'


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

 const servicesSectionCards =  services.map((service) => {
    return (
      <ServiceCard
        key={service.id}
        title={service.title}
        img={service.img}
        description={service.description}
      />
    )
  }
  )

  return (
    <div className=' relative'>
      <Navbar />
      <LandingSection />

      <div className='features-section max-w-screen-xl mx-auto'> 
      <h1 className="text-4xl font-bold text-center mt-10 p-4">FEATURES</h1>
      <div className='flex '>
          {featuresSectionCards}
      </div>      
      </div>

      <div className='about-us-section max-w-screen-xl mx-auto'>
        <AboutUs />
      </div>

      <div className='bg-blue-700'>
        <div className='max-w-screen-xl mx-auto  columns-3  pt-10'>
          {servicesSectionCards}
        </div>

      </div>
    
    </div>
  )
}

export default App
