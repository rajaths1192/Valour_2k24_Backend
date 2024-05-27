import Tennis from '../Models/tennisModel.js';

export const addTennis = async (req, res) => {
    try {
        const { gameName, round, teamA, teamB } = req.body;
        if (!gameName || !round || !teamA || !teamB) {
            return res.status(400).json({message: "Missing required fields or invalid data"});
        }
        const a = await Tennis.create(req.body);
        res.status(200).json(a);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllTennis = async (req, res) => {
    try {
        const a = await Tennis.find();
        res.status(200).json(a);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getTennisById = async (req, res) => {
    const { id } = req.params;
    try {
        const a = await Tennis.findById(id);
        if (!a) {
            return res.status(404).json({ message: "Tennis match not found" });
        }
        res.status(200).json(a);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteTennis = async (req, res) => {
    const { id } = req.params;
    try {
        const a = await Tennis.findByIdAndDelete(id);
        if (!a) {
            return res.status(404).json({ message: "Tennis match not found" });
        }
        res.status(200).json(a);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const editTennis = async (req, res) => {
    const { id } = req.params;
    try {
        const a = await Tennis.findByIdAndUpdate(id, req.body, { new: true });
        if (!a) {
            return res.status(404).json({ message: "Tennis match not found" });
        }
        res.status(200).json(a);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const editScores = async (req, res) => {
    try{
        const {matchId, team, score} = req.body;
        const match =  await Tennis.findById(matchId);
        if(!match){
            return res.status(400).json({message: "Invalid match ID"});
        }
        match.scores[team] = score;
        await match.save();
        res.status(200).json(match);
    }catch(error){
        return res.status(400).json({message: error.message});
    }
} 