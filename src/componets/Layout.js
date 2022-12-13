import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
     {/*
        <ul>
            <ol><Link to="/">Home</Link></ol>
            <ol><Link to="/about">about</Link></ol>
            <ol><Link to="/contact">contact</Link></ol>
        </ul>
     */}   

     <ul>
        <li><NavLink to="/" style={({isActive})=>{return {backgroundColor:isActive?'red':""}}}>Home</NavLink></li>
        <li><NavLink to="/about" style={({isActive})=>{return {backgroundColor:isActive?'red':""}}}>about</NavLink></li>
        <li><NavLink to="/contact" style={({isActive})=>{return {backgroundColor:isActive?'red':""}}}>contact</NavLink></li>
        <li><NavLink to="/post" style={({isActive})=>{return {backgroundColor:isActive?'red':""}}}>post</NavLink></li>
      
        <Outlet/>


        <Outlet/>
        churl
        <Outlet/>
        <Outlet/>

    </ul>
    </>
  )
}

export default Layout