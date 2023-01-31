// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  date: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const date_ob = new Date();
  res
    .status(200)
    .json({
      date: `${date_ob.getDate()}-${date_ob.getMonth()+1}-${date_ob.getFullYear()} ${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}:${date_ob.getMilliseconds()}`,
    });
}
