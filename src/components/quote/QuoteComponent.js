import React from 'react'
import Button from '../ui/button/Button'
import classes from './Quote.module.css'

const QuoteComponent = ({onClick, quote, toggle}) => {
  return (
    <div className={classes.wrapperQuote}>
      <div className={classes.quoteBox}>
        <div>
          <p className={classes.quoteText}>{quote.text}</p>
          <p className={classes.quoteAuthor}>{quote.author}</p>
        </div>
        <div className={classes.buttonWrapper}>
          <Button onClick={onClick}>Новая цитата</Button>
        </div>
      </div>
    </div>
  )
}

export default QuoteComponent
