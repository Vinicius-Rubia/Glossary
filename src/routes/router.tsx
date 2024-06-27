import { Header } from '@/components'
import { Home } from '@/pages'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
