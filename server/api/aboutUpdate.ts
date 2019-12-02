import {Router, Request, Response} from 'express';
import fs from 'fs';
import {json} from 'body-parser';

const updateRouter = Router();

updateRouter.post('/updateAbout', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);
    console.log("What we got from request:");
    console.log(jsonString);

    fs.writeFileSync('../client/src/data/AboutPage.json', jsonString);
    res.send("hello")
});
updateRouter.post('/updateProduct', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/ProductPage.json', jsonString);
    res.send("Product Page Updated")
});
updateRouter.post('/updateHome', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/HomePage.json', jsonString);
    res.send("Home Page Updated")
});
updateRouter.post('/updateFooter', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/Footer.json', jsonString);
    res.send("Footer Updated")
});
updateRouter.post('/updatePDFS', (req: Request, res: Response) => {
    const jsonString = JSON.stringify(req.body);

    fs.writeFileSync('../client/src/data/PDFS.json', jsonString);
    res.send("PDFS Updated")
});

export default updateRouter;
