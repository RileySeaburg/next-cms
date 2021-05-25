function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        // Must add valid Server side validation before saving to server. 
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({message: 'Invalid email address'})
        }

        console.log(user.email)
    }
}