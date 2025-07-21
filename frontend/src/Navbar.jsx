import React from 'react'
import './App.css'
function Navbar() {
  return (
    <div>
<nav class="costum_nav navbar navbar-expand-lg bg-black">
  <div class="container-fluid ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <h3 className='text-info mt-3 ms-3' >Mr.Cuber</h3>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar