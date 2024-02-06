import {Router} from 'express';
import Link from '../models/Link';
import {ILinkWithoutId} from '../types';
import {v4 as uuid} from 'uuid';

const linksRouter = Router();

linksRouter.post('/', async (req, res) => {
    if (!req.body.originalUrl) {
        res.status(404).send({'error': 'OriginalUrl must be present in the request'});
    }

    let newLink: ILinkWithoutId;

    while (true) {
        let randomShortUrl = uuid().substring(0, 6);
        let shortUrl = await Link.exists({ randomShortUrl })

        if (!shortUrl) {
            newLink = {
                originalUrl: req.body.originalUrl,
                shortUrl: randomShortUrl
            };
            break;
        }
    }

    const link = new Link(newLink);
    try {
        await link.save();
        return res.send(link);
    } catch (error) {
        return res.status(400).send(error);
    }
});

linksRouter.get('/:shortUrl', async (req, res) => {
    if (!req.params.shortUrl) {
        return res.status(404).send({'error': 'shortUrl params must be present in the request'});
    }

    try {
        let link = await Link.findOne({shortUrl: req.params.shortUrl});

        if (link) {
            return res.status(301).redirect(link.originalUrl);
        } else {
            res.status(404).send('Not found');
        }

    } catch (error) {
        return res.status(400).send(error);
    }
});

export default linksRouter