import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../Sections/HeroSection'
import Purpose from '../Sections/Purpose'
import Culture from '../Sections/Culture'
import Services from '../Sections/Services'

import ScrollToTop from '../../components/shared/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <HeroSection />
      <Purpose />
      <Culture />
      <Services />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
