import type { NextApiRequest, NextApiResponse } from 'next';
import axios, {AxiosError} from 'axios';


type Data = {
  name: string
};

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
	const formData = req.body;

	const authData={
			email: formData.email,
			password: formData.password,
			returnSecureToken: true,
			//isLogin: formData.isLogin,
		};
	
	const URL = formData.isLogin ? process.env.NEXT_PUBLIC_DB_LOGIN : process.env.NEXT_PUBLIC_DB_SIGNUP;

	try {


		const { data } = await axios({
			method: 'POST',
			url: URL,
			data: authData
		});

		res.status(200).json(data);

	} catch (error) {
			if (error.response) {
				//console.log(error.response.status, error.response.data.error.message);
				const status = error.response.status;
				const message = error.response.data.error.message ? error.response.data.error.message : error.response.data ;
				res.status(status).json({error: message}); 
			} else if (error.request) {
				res.status(500).json({ error: "Service Unavailable" });
			} else {
				res.status(400).json({ error: (error as Error).message});
		}
	}
}
