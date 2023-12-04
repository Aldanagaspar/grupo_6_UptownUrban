import './App.css'
import DataSection from './components/DataSummary/DataSummarySection';
import ContentRow from './components/ContentRow/ContentRow';
import Footer from './components/Footer/Footer';

function App() {

   return (
      <div id="wrapper">

         {/* <!-- Content Wrapper --> */}
         <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

               {/* <!-- Topbar --> */}
               <div className="bg-white topbar p-2 mb-4 static-top shadow flex flex-row justify-center sm:justify-between">
                  <img className='h-100 hidden sm:block' src="../Logo.png" alt="Logo de Uptown Urban" />
                  <h1 className="pe-3 text-gray-950 font-black hidden sm:block">Administración</h1>

                  {/* <!-- Título para pantallas chicas -> */}
                  <h1 className="text-gray-950 font-black block sm:hidden text-lg pt-3">Administración de Uptown Urban</h1>
               </div>
               {/* <!-- End of Topbar --> */}
               <h3 className="text-gray-700 font-bold p-2 text-center text-xl">Registros totales</h3>
               {/* <!-- Content Row Top --> */}
               <div className="container-fluid">

                  <DataSection />
                  
                  <h3 className="text-gray-700 font-bold p-2 text-center text-xl">Últimos registros de la Base de Datos</h3>
                  <ContentRow />

               </div>
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
