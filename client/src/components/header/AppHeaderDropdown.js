import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useAuth } from '../../auth/userAuth';

import avatar8 from './../../assets/images/avatars/photo.jpeg'

const AppHeaderDropdown = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Call the logout function when the "Log Out" option is clicked
    logout();
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="/#/notifications/alerts">
          <CIcon icon={cilBell} className="me-2" />
          Notification
          <CBadge color="info" className="ms-2">
            4
          </CBadge>
        </CDropdownItem>
        
        <CDropdownItem href="/#/charts">
          <CIcon icon={cilTask} className="me-2" />
          Perfomance
        </CDropdownItem>
        
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
       
        
        <CDropdownDivider />
        <CDropdownItem onClick={handleLogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
