import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed.js';
import UserPhotoPost from '../User/UserPhotoPost.js'
import UserStats from '../User/UserStats.js'


export const User = () => {
    
  return (
    <section className="container">
        <UserHeader/>
        <Routes>
            <Route path="/" element={<Feed />}/>
            <Route path="postar" element={<UserPhotoPost />}/>
            <Route path="estatisticas" element={<UserStats />}/>
        </Routes>
    </section>
  )
}
