import { useState } from 'react'

import React from 'react'

const AnecdoteDetails = ({ anecdote, votes }) => {

  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const MostVote = ({ anecdote, votes }) => {

  return (
    <div>
      <h1>Anecdote with most Votes</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  // cada anecdota tiene su propio número de votos
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleSetRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    // copio el array para no mutar
    const newVote = [...votes]
    newVote[selected] += 1
    setVotes(newVote)
  }
  const maxVote = Math.max(...votes)
  const indexAnecdote = votes.indexOf(maxVote)

  return (
    <div>
      <AnecdoteDetails
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <div>
        <button type="button" onClick={handleVote}>Vote</button>
        <button type="button" onClick={handleSetRandomAnecdote}>Next Anecdote</button>
      </div>
      <MostVote
        anecdote={anecdotes[indexAnecdote]}
        votes={maxVote}
      />
    </div>
  )
}

export default App