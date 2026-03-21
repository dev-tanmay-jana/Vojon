import React from 'react'

const Header = () => {
  return (
    <header className="py-6 px-8">
      <div className="flex items-baseline gap-4">
        <h1 className="text-5xl font-brand text-primary">Vojon</h1>
        <h2 className="text-3xl font-semibold text-foreground">Admin Panel</h2>
      </div>
    </header>
  )
}

export default Header
