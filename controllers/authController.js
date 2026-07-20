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
export const logout = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refresh_token } = req.body;

    if (!refresh_token) {
      return res.status(400).json({
        error: "Refresh token is required",
      });
    }

    const { data, error } = await supabase.auth.refreshSession({
      refresh_token,
    });

    if (error) {
      return res.status(401).json({
        error: error.message,
      });
    }

    return res.status(200).json({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};