import React from 'react'
import './theme-btn.scss'

export function ThemeBtn() {
  function handleClick(): void {
    document.body.classList.toggle('theme-dark');
  }

  return (
    <button className="theme-btn" onClick={handleClick} title="Переключить тему">
      Переключить тему
    </button>
  )
}
