import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'
import styles from './App.module.css'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App