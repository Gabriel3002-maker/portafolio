
import './App.css';
import photo from './img/photo.jpeg';
import facebook from './img/facebook.png';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import Proyecto from './componts/Proyecto';

function App() {
  return (
    <div className="App">
      <center>
      {/*Navegacion  Inicio*/}
      <h1>
          <ul>
              
              <li><a href="#contacto">Inicio</a></li>
             
            </ul>
      </h1>
      {/*Navegacion Final*/}

       {/*Creamos nuestra cabecera Inicio */}
        <header className="App-header">
       
         
        {/*Insertamos nuestra imagen */}
        <div>
          <img src={photo} alt=''/>
        </div>
          
        {/*Insertamos nuestro texto */}
        <article >
          Gabriel Octavio Vargas Vargas estudiante de Desarrollo de Software
        </article>
      </header>
       {/*Creamos nuestra cabecera  Final */}
      </center>
      <hr></hr>
      <p>
        <b>Mis Proyectos</b>

      </p>
      <body>

      <Proyecto 
      nombre = 'Página Web Educativa Emiliano Ortega Espinoza'
      autor = 'Gabriel Vargas'
      imagen ='primero'
      tecnologia = 'CSS y HTML'
      empresa = 'Educación'
      link = 'https://grand-begonia-be775e.netlify.app/'
      proyecto = 'Este página web fue  editada con una plantilla ya existente, de está manera disminuimos el tiempo de desarrollo y nos permitio adptarla a nuestras necesidades'
      />

      <Proyecto 
      nombre = 'QUEEKS'
      autor = 'Código Abierto'
      imagen ='segundo'
      tecnologia = 'CSS y HTML'
      empresa = 'Educación'
      link = 'https://github.com/Gabriel3002-maker/QUEEKS_beta'
      proyecto = 'Este proyecto fue realizado con la intención de medir tus conocimentos en programación actualmente esta descontinuado su desarrollo.'
      />

    <Proyecto 
      nombre = 'Portafolio v1.0'
      autor = 'Gabriel Vargas'
      imagen ='tercero'
      tecnologia = 'CSS y HTML'
      empresa = 'Personal'
      link = 'https://steady-chimera-24dee9.netlify.app/index.html'
      proyecto = 'Este es un proyecto con Html y css básico donde se puso en práctica nuestros conocimientos' />


     <Proyecto 
      nombre = 'Comida Saludable'
      autor = 'Gabriel Vargas'
      imagen ='cuatro'
      tecnologia = 'CSS y HTML'
      empresa = 'Salud'
      proyecto = 'Diseño y Elaboración de una página web con HTML y CSS , dirigida a un restaurante de comida saludable'
      link ='https://elegant-starlight-a65fab.netlify.app/index.html'
      />
 
      <Proyecto 
      nombre = 'Turismo'
      autor = 'Gabriel Vargas'
      imagen ='cinco'
      tecnologia = 'CSS y HTML'
      empresa = 'Turismo'
      proyecto = 'Esta página web nos permite visualizar los lugares turisticos de nuestro cantón catamayo'
      link = 'https://silver-starburst-166472.netlify.app/index.html'
      />

      <Proyecto 
      nombre = 'Portafolio v1.1'
      autor = 'Gabriel Vargas'
      imagen ='seis'
      tecnologia = 'CSS y HTML'
      empresa = 'Personal'
      proyecto = 'Este es la segunda versión de mi portafolio lo  puedes visualizar en este link'
      link = 'https://stately-pavlova-a18c79.netlify.app/index.html'
      />


      </body>

      <footer>
        <hr></hr>
        <center>
        <div className='redes'>
       
          <ul>
           
              <center>
              <a href="https://www.facebook.com/GabO159357">  <img src={facebook} alt=''/ ></a>
              <a href="https://github.com/Gabriel3002-maker">  <img src={github} alt=''/></a>
              <a href="https://www.linkedin.com/in/gabriel-vargas-vargas-6953b1216/">  <img src={linkedin} alt=''/></a>
              </center>
           
          </ul>
        </div>
        <hr></hr>
        GabrielVargas © 2022
        </center>
      </footer>
    </div>
  );
}

export default App;
