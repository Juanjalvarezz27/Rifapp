import Header from '../components/headerHome.jsx'
import Grid from '../components/grid.jsx'
import Testimonios from '../components/testimonios.jsx';
import Footer from '../components/footer.jsx';

function Home () {

  return (
    <>

    <Header/>

    <div>
      <Grid/>
    </div>

    <div>
      <Testimonios/>
    </div>

    <div>
      <Footer/>
    </div>
    
    
    </>
  )
}

export default Home