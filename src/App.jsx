import './App.css'
import Header from './Header.jsx'

function App() {

  return (
    <>
    <div style={{ padding: "2rem", fontFamily: "Poppins, sans-serif" }}>

<header>
  <img 
    src="./img/canadaflag.png" 
    alt="Canada flag" 
    className="header-image"
  />
  <h1>Vancouver Travel Guide</h1>
  <h2>
    Visit Vancouver! One of the three major cities in the Pacific Northwest, Vancouver is home to beautiful sceneries, unique foods, and boasts a diverse cultural collection making anybody feel like they're home!
  </h2>
</header>

<div className="card">
  <h3>Parks</h3>
  <ul>
    <li>Stanley Park
      <ul>
        <li>Trails and beaches</li>
      </ul>
    </li>
    <li>Sea to Sky Gondola</li>
    <li>Buchart Gardens (Victoria)</li>
  </ul>
  <button>Learn More</button>
</div>

<div className="card">
  <h3>City</h3>
  <ul>
    <li>Scootering in city</li>
  </ul>
  <button>Learn More</button>
</div>

<div className="card">
  <h3>Food</h3>
  <ul>
    <li>Japadog</li>
    <li>Poutine</li>
    <li>Clam Chowder</li>
    <li>Osmow Shwarma</li>
  </ul>
  <button>Learn More</button>
</div>

<div className="card">
  <h3>Attractions</h3>
  <ul>
    <li>Granville Island</li>
    <li>Rogers Arena</li>
    <li>Richmond Night Market</li>
  </ul>
  <button>Learn More</button>
</div>

<div className="card">
  <h3>Shopping</h3>
  <ul>
    <li>Richmond Centre</li>
    <li>Tsawwassen Mills</li>
  </ul>
  <button>Learn More</button>
</div>

<div className="card">
  <h3>Fun Facts</h3>
  <ul>
    <li>Last call for alcohol is 4am</li>
    <li>Popular immigration location for SEA due to 40% of the population being Chinese, SEA, and Filipino</li>
  </ul>
  <button>Learn More</button>
</div>

<footer>
  <p>© 2025 Vancouver Travel Guide</p>
</footer>

    </div>
    </>
  )
}

export default App
