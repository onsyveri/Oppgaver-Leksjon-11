import feedbacks from '../DataBase/db';

const list = () => {

    if (feedbacks.size === 0) {
        return { status: 200, data: 'No feedbacks' };
    }

    return { status: 200, data: Object.fromEntries(feedbacks) };

}; 

/*const toJson = () => {

    const file = utils.writeJson('')

}*/