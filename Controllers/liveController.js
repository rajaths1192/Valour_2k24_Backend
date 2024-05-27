import Live from '../Models/liveModel.js'

export const addLive = async (req,res) =>{
    try{
        const { gameName, round, winners, teamA, teamB, isLive, group } = req.body;
        if(!gameName || !round || !teamA || !teamB || typeof isLive !== 'boolean'){
            return res.status(400).json({message: "Missing required fields or invalid data"});
        }
        const a = await Live.create(req.body);
        res.status(200).json(a);
    } catch(error){
        res.status(400).json({ message: error.message });
    }
};

export const getAllLive = async (req,res)=>{
    try{
        const a = await Live.find();
        res.status(200).json(a);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

export const getLiveById = async (req,res)=>{
    const { id } = req.params;
    try{
        const obj = await Live.findById(id);
        if(!obj){
            return res.status(404).json({ message: "Final not found" });
        }
        res.status(200).json(obj);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

export const deleteLive = async (req,res)=>{
    const { id } = req.params;
    try{
        const obj = await Live.findByIdAndDelete(id);
        if(!obj){
            return res.status(404).json({ message: "Final not found" });
        }
        res.status(200).json(obj);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};


export const editLive  = async (req,res)=>{
    const { id } = req.params;
    try{
        const obj = await Live.findByIdAndUpdate(id,req.body, {new: true});
        if(!obj){
            return res.status(404).json({ message: "Final not found" });
        }
        res.status(200).json(obj);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};