const mongoose = require("mongoose");

// Define schema
const roomSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true, // Removes leading/trailing spaces
            minlength: 3,
            maxlength: 100,
        },
        department: {
            type: String,
            required: true,
        },
        hallName: {
            type: String,
            required: true,
        },
        currentBookings: [
            {
                userId: { type: String, required: true },
                bookingDate: { type: Date, required: true },
                duration: { type: Number, required: true }, // e.g., duration in hours
            },
        ],
        halls: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Add an index for faster lookups
roomSchema.index({ name: 1 });

// Compile model from schema
const roomModel = mongoose.model("room", roomSchema);

module.exports = roomModel;
