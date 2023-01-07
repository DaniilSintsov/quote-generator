import Quote from './components/Quote/Quote'
import { QuoteService } from './services/Quote/Quote.service'
import { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { getRandomFromArr } from './utils/helpers/getRandomFromArr.helpers'
import { BACKGROUNDS } from './utils/constants/backgrounds.constants'

function App() {
  const [quote, setQuote] = useState({ text: null, author: null })
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    QuoteService.getRandom().then(quote =>
      setQuote(prev => ({ ...prev, text: quote.text, author: quote.author }))
    )
  }, [toggle])

  const getRandomBackground = backgrounds => getRandomFromArr(backgrounds)

  const onClick = () => {
    setToggle(state => !state)
  }

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={toggle}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false)
        }}
        classNames="fade">
        <div
          className="container"
          style={{
            backgroundImage: `url(${getRandomBackground(BACKGROUNDS)})`
          }}>
          <Quote
            onClick={onClick}
            quote={quote}
          />
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default App
