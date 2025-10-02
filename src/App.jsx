import './App.css'
import Header from './Header.jsx';
import Card from './components/card.jsx';
import data from './assets/data.js'

function App() {
  return (
    <>
      <Header />
      {data.map((item, index) => (
        <Card topics={item} key={index} />
      ))}
    </>
  )
}

export default App
