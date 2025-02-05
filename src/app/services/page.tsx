import React from 'react'
import ServicesPage from '@/components/service/ServicesPage'
import ServiceMain from '@/components/service/serviceMain/serviceMain'
function page() {
  return (
	<div>
		<ServiceMain/>
		<ServicesPage/>
	</div>
  )
}

export default page