import supabase from '../config/supabase.js'
export const signup=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
           return res.status(400).json({
                error:"All Fields are required"
            })
        }
        const {data,error}=await supabase.auth.signUp({
            email,
            password
        })
        if(error){
            return res.status(400).json({
                error:error.message
            })
        }
        return res.status(201).json(data)
    }catch(error){
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}
export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
           return res.status(400).json({
                error:"All Fields are required"
            }) 
        }
        const {data,error}=await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(error){
            return res.status(401).json({
                error:"Invalid login crendentials"
            })
        }
        return res.status(200).json({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
    }catch(error){
         return res.status(500).json({
            message:"Internal server error"
        })
    }
}