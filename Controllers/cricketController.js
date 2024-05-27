import Cricket from '../Models/cricketModel.js'; 

export const createMatch = async (req, res) => {
    try {
        const { teamA,teamB} = req.body;
        if(!teamA || !teamB){
            return res.status(400).json({message:"Invalid input"})
        }
        const match = await Cricket.create(req.body);
        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getAllMatches = async (req, res) => {
    try {
        const matches = await Cricket.find();
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMatchById = async (req, res) => {
    try {
        const match = await Cricket.findById(req.params.id);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMatch = async (req, res) => {
    try {
        const match = await Cricket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteMatch = async (req, res) => {
    try {
        const match = await Cricket.findByIdAndDelete(req.params.id);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json({ message: 'Match deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateScores = async (req, res) => {
    try {
        const { matchId, team, score } = req.body;
        const match = await Cricket.findById(matchId);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        match.scores[team] = score;
        await match.save();
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateWickets = async (req, res) => {
    try {
        const { matchId, team, wickets } = req.body;
        const match = await Cricket.findById(matchId);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        match.wickets[team] = wickets;
        await match.save();
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOvers = async (req, res) => {
    try {
        const { matchId, team, overs } = req.body;
        const match = await Cricket.findById(matchId);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        match.overs[team] = overs;
        await match.save();
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


