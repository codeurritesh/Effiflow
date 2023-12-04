import React from 'react'
import { DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <div className='card p-5'>
      <h1 className='mb-4'>Alerts</h1>
      <div className='alert alert-success'>
      1. Gross profit is gradually incresing day by day
      </div>
      <div className='alert alert-danger'>
      2. Employees perfomance is decresing rapidly 
      </div><div className='alert alert-danger'>
      3. Hardware sales decreasing
      </div><div className='alert alert-success'>
      4. Overall good sales this month
      </div>
    </div>

  )
}

export default Alerts
