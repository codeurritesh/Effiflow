import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography=()=>{
return (
<div className='container  p-5 d-flex'>
<div class="card m-2 col-md-6 " >
  <img class="card-img-top" src="https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI=" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Ritesh Verma</h5>
    <p class="card-text">28-C Krishna Nagar Mathura, 281004</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Male</li>
    <li class="list-group-item">Aadhar Number- 1728 1927 3561</li>
    <li class="list-group-item">Pan Number- CARYT1263E</li>
    <li class="list-group-item">Email- ritexxxxxxx76@gmail.com</li>
    <strong><li class="list-group-item">Salary- 25000/-</li></strong>

  </ul>
</div>
<div class="card m-2 col-md-6" >
  <img class="card-img-top" src="https://static-bebeautiful-in.unileverservices.com/istockphoto-1221041044-612x612.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Tanya Bansal</h5>
    <p class="card-text">D-7 Radhika Dham Yamuna Block Mathura, 281004</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Female</li>
    <li class="list-group-item">Aadhar Number- 1728 1927 3561</li>
    <li class="list-group-item">Pan Number- CARYT1263E</li>
    <li class="list-group-item">Email- tanyxxxxxxx76@gmail.com</li>
    <strong><li class="list-group-item">Salary- 37000/-</li></strong>

  </ul>
</div>


</div>
)
}
export default Typography