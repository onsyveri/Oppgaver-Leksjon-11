import { list } from '../Modell/Poll';

export const getFeedbacks = (req, res, next) => {
    const { status, data } = list();
    res.status(status).json({ status, data });
}