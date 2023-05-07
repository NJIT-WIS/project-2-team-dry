const dotenv = require('dotenv');
dotenv.config();

// Configure Mailchimp client
const Mailchimp = require('mailchimp-api-v3')
const mailchimp_client = new Mailchimp(process.env.MAILCHIMP_APIKEY)
const audience_id = process.env.AUDIENCE_ID || '48004f334d'

export default async (req, res) => {
  const { email, name, note } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }
  
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      NOTE: note,
      NAME: name
    }
  }


  try {
    const response = await mailchimp_client.post(`/lists/${audience_id}/members`,data)
    return res.status(201).json({ message: 'success' })
  } catch (error) {
    console.log("Error:",error.response.body.title)
    if (error.response.body.title === "Member Exists") {
      return res.status(400).json({ error: "You're already subscribed!" })
    }
    return res.status(500).json({ error: `There was an error during subscribing. Shoot me an email at rs366@njit.edu and I'll add you to the list.` })
  }
}