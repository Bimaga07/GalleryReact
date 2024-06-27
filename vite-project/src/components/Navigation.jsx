import React from 'react'
import{ Link }from 'react-router-dom'
import Amor from './Amor'
import Amor2 from './Amor2'
import Baloo from './Baloo'
import Grace from './Grace'
import MiFoto from './MiFoto'
import Mirza from './Mirza'
import Negra from './Negra'
import YoyMizra from './YoyMizra'
import "../Navigation.css"

 const Navigation = () => {
  return (
    <div className="navigation-container" >
     <Link to="/amor" className="inline-block">
     <figure>
       <Amor />
        <figurecaption>Amor</figurecaption>
     </figure>
     </Link>
     <Link  to="/amor2">
     <figure>
        <Amor2/>
        <figurecaption>Amor mio</figurecaption>
     </figure>
     </Link>
     <Link  to="/baloo">
     <figure>
        <Baloo/>
        <figurecaption>Baloo</figurecaption>
     </figure>
     </Link>
     <Link to="grace">
     <figure>
        <Grace />
        <figurecaption>Grace</figurecaption>
     </figure>
     </Link>
     <Link to="mifoto" >
     <figure >
        <MiFoto  />
        <figurecaption>Yo</figurecaption>
     </figure>
     </Link>
     <Link to="mizra" >
     <figure>
        <Mirza />
        <figurecaption>Mizra</figurecaption>
     </figure>
     </Link>
     <Link to="negra" >
     <figure>
        <Negra />
        <figurecaption>Negra</figurecaption>
     </figure>
     </Link>
     <Link to="yoymizra" >
     <figure>
        <YoyMizra />
        <figurecaption>Yo y mizra</figurecaption>
     </figure>
     </Link>
    </div>
  )
}


export default Navigation