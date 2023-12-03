import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Effiflow &copy; 2023 GLA University</span>
      </div>
      
    </CFooter>
  )
}

export default React.memo(AppFooter)
