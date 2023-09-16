import Complimentary from './components/Complimentary';
import AthenaeumSection from './sections/AthenaeumSection';
import FacialAppointments from './sections/FacialAppointments';
import Footer from './sections/Footer';
import Hompage from './sections/Hompage';
import Navbar from './sections/Navbar';
import ScentsSection from './sections/ScentsSection';
import SkinCareSection from './sections/SkinCareSection';
import StorelocatorSection from './sections/StorelocatorSection';
import WarmClimatesSection from './sections/WarmClimatesSection';

function App() {
  return (
    <div className=''>
      
      <Navbar/>
      <Hompage/>
      <ScentsSection/>
      <SkinCareSection/>
      <AthenaeumSection/>
      <WarmClimatesSection/>
      <StorelocatorSection/>
      <FacialAppointments/>
      <Footer/>
    </div>
  );
}

export default App;
