import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    try {
      await res.revalidate(`/ondemand-isr/${req.query.page}`)
      return res.json({ revalidated: true })
    } catch (err) {
      return res.status(500).send('Error revalidating')
    }
  }