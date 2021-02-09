import { joinAgent } from '@/services/public'

export default async (req, res) => {
  const response = await joinAgent(req.query)
  res.send(response)
}
