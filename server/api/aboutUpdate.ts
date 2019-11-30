import {Router, Request, Response} from 'express';
import fs from 'fs';
import {json} from 'body-parser';

const updateRouter = Router();

updateRouter.post('/updateAbout', (req: Request, res: Response) => {
	const jsonString = JSON.stringify(req.body);
	console.log('What we got from request:');
	console.log(jsonString);

	fs.writeFileSync('../client/src/data/AboutPage.json', jsonString);
	res.send('hello');
});
updateRouter.post('/updateProduct', (req: Request, res: Response) => {
	const jsonString = JSON.stringify(req.body);

	fs.writeFileSync('../client/src/data/ProductPage.json', jsonString);
	res.send('Product Page Updated');
});

export default updateRouter;
