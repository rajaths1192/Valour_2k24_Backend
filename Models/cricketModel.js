import mongoose from "mongoose";

const cricketSchema = new mongoose.Schema({
    teamA: {
        type: String,
        required: true,
    },
    teamB: {
        type: String,
        required: true,
    },
    scores: {
        teamA: {
            type: Number,
            default: 0
        },
        teamB: {
            type: Number,
            default: 0
        }
    },
    wickets: {
        teamA: {
            type: Number,
            default: 0
        },
        teamB: {
            type: Number,
            default: 0
        }
    },
    overs: {
        teamA: {
            type: Number,
            default: 0
        },
        teamB: {
            type: Number,
            default: 0
        }
    }
});

export default mongoose.model('Cricket', cricketSchema);
