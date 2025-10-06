export const signup = (req, res) => {
    const {fullname, email, password} = req.body
    res.send('signup endpoint');

    
}
   