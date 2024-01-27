import React from 'react'
import './App.css'
import { AppContext } from './context/contextApi'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />
            <Route path='/' element={<div>Home</div>} />
            <Route path='/' element={<div>Home</div>} />
            <Route path='/' element={<div>Home</div>} />
          </Routes>
        </div>
        </BrowserRouter>
      </AppContext>
    </>
  )
}
export default App
