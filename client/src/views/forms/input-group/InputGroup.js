import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
const Select = () => {
  return (
    <div className="card p-5">
    <form>
      <div class='form-row'>
        <h3>Add new Employee</h3>
      </div>
  <div class="form-row d-flex ">
    <div class="form-group col-md-6 m-1">
      <label for="inputEmail4">Name</label>
      <input type="email" class="form-control" id="name" placeholder="Full Name"/>
    </div>
    <div class="form-group col-md-6 m-1">
      <label for="inputPassword4">Email Address</label>
      <input type="password" class="form-control" id="email" placeholder="Email Address"/>
    </div>
  </div>
  <div class="form-group m-2">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="address" placeholder="1234 Main St"/>
  </div>
  <div class="form-group m-2">
    <label for="inputAddress2">Contact Number</label>
    <input type="text" class="form-control" id="number" placeholder="XXXXXXXXXX"/>
  </div>
  <div class="form-row d-flex w-100">
    <div class="form-group m-2">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group m-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
      </div>
      </div>

      <div class="form-row d-flex">
    <div class="form-group col-md-4 m-2">
      <label for="inputZip">Aadhar Number</label>
      <input type="number" class="form-control" id="aadhar" maxLength={11}/>
    </div>
    <div class="form-group col-md-4 m-2">
      <label for="inputZip">Pan Number</label>
      <input type="text" class="form-control" id="pan" maxLength={10}/>
    </div> 
  </div>
  <div class="form-row d-flex">
  <div class="form-group col-md-6 m-2">
      <label for="inputZip">Photograph</label>
      <input type="file" class="form-control " id="Salary" maxLength={6} placeholder='Salary'/>
    </div>
    <div class="form-group col-md-6 m-2">
      <label for="inputZip">Salary</label>
      <input type="number" class="form-control" id="Salary" maxLength={6} placeholder='Salary'/>
    </div> 
  </div>
  <button type="submit" class="btn btn-dark mt-4 w-100">Add</button>
</form>
</div>
  )
}

export default Select
