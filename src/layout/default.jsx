import React from 'react'
import Header from './header'

export default function DefaultLayout({ children }) {
  return (
    <div style={{position: "absolute"}}>
      <Header />
        <div style={{marginTop: 90}}>
          {children}
        </div>
    </div>
  )
}