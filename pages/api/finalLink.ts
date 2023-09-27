// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const host = 'https://alfastrah.ru/api/eosago/bot/getOsagoLink/';
	const data = req.body;

	try {
		const goLinkResponse = await axios.post(host, data, {
			headers: {
				Dealerid: 'atomic',
			},
		});
		res.status(200).json(goLinkResponse.data);
	} catch (error) {
		res.status(500);
	}
}
