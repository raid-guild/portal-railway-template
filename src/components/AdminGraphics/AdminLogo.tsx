import React from 'react'

import { siteConfig } from '@/config/site'

const AdminLogo: React.FC = () => {
  return (
    <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>
      {siteConfig.name}
    </div>
  )
}

export default AdminLogo
