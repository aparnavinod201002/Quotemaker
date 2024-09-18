
import { Card } from 'react-bootstrap'
import './App.css'
import QuoteGenerator from './components/Quotesgenerator'

function App() {
  

  return (
    <>
    <h1 style={{color:'red',textAlign:'center',margin:'10px'}}>Explore Quotes</h1>
     {/* <Card style={{background:'none',alignItems:'center',color:'black',border:'none'}}>
      <Card.Header></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card> */}
    <QuoteGenerator/>
    </>
  )
}

export default App
