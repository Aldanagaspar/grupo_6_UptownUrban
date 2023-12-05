import './App.css'
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import TopBar from './components/TopBar/TopBar';

function App() {

   return (
      <div id="wrapper">

         {/* <!-- Content Wrapper --> */}
         <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

               {/* <!-- Topbar --> */}
              <TopBar/>
               {/* <!-- End of Topbar --> */}

               {/* <!-- Content Row Top --> */}
               <MainPage/>
               {/* <!--End Content Row Top--> */}

            </div>
            {/* <!-- End of MainContent --> */}



            {/* <!-- Footer --> */}
            <Footer />

            {/* <!-- End of Footer --> */}

         </div>
         {/* <!-- End of Content Wrapper --> */}

      </div>
   );
}

export default App;
