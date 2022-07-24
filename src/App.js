import './App.css'
import QuoteComponent from './components/quote/QuoteComponent'
import {Quote} from './api/Quote'
import {useEffect, useState} from 'react'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

function App() {
  const backgrounds = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575&q=80',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  ]

  const [quote, setQuote] = useState({text: null, author: null})
  const [toggle, setToggle] = useState(true)

  const newQuote = new Quote()

  useEffect(() => {
    newQuote.getRandomQuote()
      .then(quote => setQuote(prev => ({...prev, text: quote.text, author: quote.author})))
  }, [toggle])

  const onClick = () => {
    setToggle(state => !state)
  }

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={toggle}
                     addEndListener={(node, done) => {
                       node.addEventListener('transitionend', done, false)
                     }}
                     classNames="fade">
        <div className="container"
             style={{backgroundImage: `url(${getRandomBackground(backgrounds)})`}}>
          <QuoteComponent onClick={onClick}
                          quote={quote}
                          toggle={toggle}/>
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

function getRandomBackground(backgrounds) {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}

export default App
