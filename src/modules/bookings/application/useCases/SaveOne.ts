import { inject, injectable } from "inversify";
import { BOOKING_TYPES } from "../../infrastructure/types";
import { Booking } from "../../domain/Booking.entity";
import { validateModel } from "../../../../core/infrastructure/validators/validateModel";
import { BookingRepository } from "../../infrastructure/bookingRepository";
import { User } from "../../../users/domain/User.entity";
@injectable()
export default class SaveOne {
    constructor(
        @inject(BOOKING_TYPES.REPOSITORY) 
        private readonly bookingRepository: BookingRepository,
    ) {}

    async exec(body: Booking, userLogged: Partial<User>) {
        const booking = await validateModel(body, Booking);
        const bookingCreated = await this.handleRelationBookingReservationAndSave(booking)
        return bookingCreated;
    }

    async handleRelationBookingReservationAndSave(booking: Booking) {
        return await this.bookingRepository.save(booking);
    }
}
