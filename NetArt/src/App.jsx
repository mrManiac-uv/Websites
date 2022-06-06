import { useState } from 'react'
import logo from './assets/logo.png'
import award from './assets/1.png'
import photo from './assets/2.png'
import machines from './assets/3.png'
import phone from './assets/phone.png'
import fb from './assets/facebook.png'
import web from './assets/globe.png'
import './App.css'

function App() {

  return (
    <div className="text-center">
      <img src={logo} className="block w-1/4 m-auto" alt="CRI logo" />
      <section className="grid grid-cols-[1fr_2fr] w-5/6 mx-auto my-8 text-left">
        <img src={award} className="w-full" alt="" />
        <div>
          <h4>C.R.L. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <img src={photo} className="my-8" alt="" />
          <h5>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h5>
        </div>
      </section>
      <h4 style={{margin: "4rem 0",}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h4>
      <img src={machines} className="w-3/4 m-auto" alt="" />
      <h4 style={{margin: "2rem 0", letterSpacing: "0.025em"}}>Valves - Pumps Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems Motors</h4>
      <hr />
      <h4 id='footTitle'>C.R.L. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      <h5 id='products'>CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE <span>|</span> FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</h5>
      <section className='bg-[#EC3237] grid grid-cols-3 gap-x-32 h-36 m-4 mt-8 py-8 px-44'>
        <div>
          <img src={phone} className="inline mx-2" alt="" />
          <a href="tel:+9118002001234">Toll free 1800 200 1234</a>
        </div>
        <div>
          <img src={fb} className="inline mx-2" alt="" />
          <a href="https://www.facebook.com/cripumps">facebook.com/cripumps</a>
        </div>
        <div>
          <img src={web} className="inline mx-2" alt="" />
          <a href="https://crigroups.com">www.crigroups.com</a>
        </div>
      </section>
    </div>
  )
}

export default App
