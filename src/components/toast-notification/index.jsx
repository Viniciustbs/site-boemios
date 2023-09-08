import './style.sass'
import React from 'react'

export const ToastNotification = () => {
  return (
    <div className="container">
      <p>Texto copiado para área de transferência</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M22 12.5C22 18.0229 17.5229 22.5 12 22.5C6.47714 22.5 2 18.0229 2 12.5C2 6.97714 6.47714 2.5 12 2.5C17.5229 2.5 22 6.97714 22 12.5ZM10.8433 17.7949L18.2627 10.3756C18.5146 10.1236 18.5146 9.71512 18.2627 9.46319L17.3503 8.55081C17.0983 8.29883 16.6898 8.29883 16.4379 8.55081L10.3871 14.6015L7.56214 11.7766C7.3102 11.5246 6.90169 11.5246 6.64972 11.7766L5.73734 12.689C5.4854 12.9409 5.4854 13.3494 5.73734 13.6013L9.93089 17.7949C10.1829 18.0469 10.5913 18.0469 10.8433 17.7949Z" fill="#00B0A6"/>
      </svg>
      <div className="line"></div>
    </div>
  )
}