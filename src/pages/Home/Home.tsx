import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../Sections/HeroSection'
import Purpose from '../Sections/Purpose'
import Culture from '../Sections/Culture'
import Ecosystem from '../Sections/Ecosystem'
import Services from '../Sections/Services'

import ScrollToTop from '../../components/shared/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans">
      <NavBar />
      <HeroSection />
      <Purpose />
      <Culture />
      <Ecosystem />
      <Services />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
