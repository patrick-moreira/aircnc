const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: { //Relacionamento com usuario para saber qual usuario solicitou a reserva
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: { //Relacionamento com spot para saber a qual spot esse usuario deseja criar uma reserva
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);