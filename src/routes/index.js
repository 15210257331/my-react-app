import React,{ lazy,Suspense } from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
const Home = lazy(()=>import('../pages/home/index.js'))
const Echarts = lazy(()=>import('../pages/echarts/index.js'))

const RoutesConfig =  () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true}/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="echarts" element={<Echarts />} />
        </Routes>
    </Suspense>
  )
}

export default RoutesConfig
