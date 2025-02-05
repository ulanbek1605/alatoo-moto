import React from 'react'
import MainRental from '@/components/rentingBlock/mainRental/mainRental'
import Rental from '@/components/rentingBlock/rental/rental'
import RentalMoto from '@/components/rentingBlock/rentalMoto/rentalMoto'
// import RentalSuperdual from '@/components/rentingBlock/rentalSuperdual/rentalSuperdual'
// import RentalHonda from '@/components/rentingBlock/rentalHonda/rentalHonda'
// import RentalScooters from '@/components/rentingBlock/rentalScooters/rentalScooters'
function page() {
	return (
		<div>
			<MainRental />
			<Rental />
			<RentalMoto />
			{/* <RentalSuperdual />
			<RentalHonda />
			<RentalScooters /> */}
		</div>
	)
}

export default page