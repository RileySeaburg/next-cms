import fs from 'fs'
import path from 'path'

/**
 * Server side route that saves data from a form to a json file. 
 * @param {*} req 
 * @param {*} res 
 */
function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email
        const feedback = req.body.feedback

        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: feedback
        }

        // store in a database or a file.
        const filePath = buildFeedbackPath()
        const data = extractFeedback(filePath)
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({ message: 'Success', feedback: newFeedback })
        console.log(`New Submission received!
    email: ${newFeedback.email}`)
    } else {
        const filePath = buildFeedbackPath()
        const data = extractFeedback(filePath)
        res.status(200).json({ feedback: data })
    }
}


function buildFeedbackPath() {
    return path.join(process.cwd(), 'data', 'feedback.json')
}

function extractFeedback(filePath) {
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    return data
}
export default handler