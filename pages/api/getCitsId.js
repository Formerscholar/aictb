import { getCitys } from '@/services/public'

export default async (req, res) => {
  const { id } = req.query
  const response= await getCitys({
    province_id: id,
  })
  res.send(response)
}
