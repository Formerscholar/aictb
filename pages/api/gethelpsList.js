import { gethelpsList } from '@/services/public'

export default async (req, res) => {
  const { type } = req.query
  const response = await gethelpsList({
    type,
  })
  res.send(response)
}
