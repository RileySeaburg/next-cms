function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email
        const feedback = req.body.feedback

        const newFeedback = {
            id: new Date().toISOString(),
            email,
            feedback
        }

        // store in a database or a file.
    }
    res.status(200).json({ message: 'Yes It Works!' })
}

export default handler