export const auth =  (req,res,next)=>{
    try {
        const isAuth = false;
        //2. create auth middleware
    // -valid if the token is validate
    // - get user Email from the token
    // - get user by email
        isAuth ?next():res.status(403).json({
            status: "Unauthorized"
        })
    } catch (error) {
         res.status(500).json({
      error: error.message,
    })
        
    }
}