import React from 'react'
import Contacts from '@/components/contacts/contacts'
import ContactMain from '@/components/contacts/contactMain/contactMain'
function page() {
	return (
		<div>
			<ContactMain/>
			<Contacts />
		</div>
	)
}

export default page