import React from 'react'
import logo from './logo.svg'
import './App.css'
import FetchTopQuotes from './components/FetchTopQuotes'
import UpdateQuotes from './components/UpdateQuotes'
import PaginatedQuotes from './components/PaginatedQuotes'
import InfiniteScrollQuotes from './components/InfiniteScrollQuotes'
import QueryCancellation from './components/QueryCancellation'
import QueryCancellationWithAbortSignal from './components/QueryCancellationWithAbortSignal'

function App() {
  return (
    <div className='App'>
      <div className='App mx-auto max-w-6xl text-center my-8'>
        <h1 className='font-semibold text-2xl'>
          React - The Road To Enterprise
        </h1>
        <UpdateQuotes />
        <FetchTopQuotes />
        <PaginatedQuotes />
        {/* <InfiniteScrollQuotes /> */}
        <QueryCancellation />
        <QueryCancellationWithAbortSignal />
      </div>
    </div>
  )
}

export default App
