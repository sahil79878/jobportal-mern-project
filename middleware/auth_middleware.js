import jwt from 'jsonwebtoken';
export const AuthMiddleware = (req,res,next) => {
    //console.log("Middleware called");
    try {
    const token = req.headers['authorization'].split(" ")[1];
    jwt.verify(token, process.env.SECRATE_KEY, (error, decode)=>{
        if(error) {
            res.json({message: "Invalid token", success: false});
        }
        else{
           // res.send({success: true, tokenId: decode.uid});
           req.body.uid = decode.uid; 
           next();
        }
    })  
} catch (error) {
    res.json({message: "Invalid user", success: false});     
}
}