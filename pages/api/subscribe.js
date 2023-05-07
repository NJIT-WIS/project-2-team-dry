import axios from 'axios'
const dotenv = require('dotenv');
dotenv.config();

export default async (req, res) => {
  const { email, name, note } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const API_KEY = process.env.MAILCHIMP_APIKEY
  const API_SERVER = process.env.API_SERVER || 'us13'
  const AUDIENCE_ID = process.env.AUDIENCE_ID ||'48004f334d'
  
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      NOTE: note,
      NAME: name
    }
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`
    }
  }

  try {
    const response = await axios.post(url, data, options)
    return res.status(201).json({ message: 'success' })
  } catch (error) {
    console.log("Error:",error.response.data)
    if (error.response.data.title === "Member Exists") {
      return res.status(400).json({ error: "You're already subscribed!" })
    }
    return res.status(500).json({ error: `There was an error during subscribing. Shoot me an email at rs366@njit.edu and I'll add you to the list.` })
  }
}