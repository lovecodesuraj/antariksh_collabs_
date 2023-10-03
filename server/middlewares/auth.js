//authentication
export const adminAuth = (req, res, next) => {
    try{
        const authorizationHeader = req.headers.authorization;
    
        if (!authorizationHeader || authorizationHeader !== `${process.env.ADMIN_KEY}`) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        return next();
    }catch(error){
        return res.status(500).json({message: "Server error"})
    }

}