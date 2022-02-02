const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async(req, res) => {
    try {
        const listAll = [{
            "_id": 1,
            "name": "Morad: Bzrp Music Sessions #47",
            "album": "BZRP Music Sessions",
            "cover": "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F59ccba75136f90d6a75072cf1c9ee3e5.1000x1000x1.png",
            "artist": {
                "name": "Morad",
                "nickname": "Morad",
                "nationality": "SD"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
                "url": `${URL_PUBLIC}/track.mp3`
            },
            {
                "_id": 2,
                "name": "Snow Tha Product || BZRP Music Sessions #39",
                "album": "BZRP Music Sessions",
                "cover": "https://m.media-amazon.com/images/I/B105PY4rR1S._SS500_.jpg",
                "artist": {
                    "name": "Snow",
                    "nickname": "Snow",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-1.mp3`
            },
            {
                "_id": 3,
            "name": "Nicky Jam: Bzrp Music Sessions #41",
            "album": "BZRP Music Sessions",
            "cover": "https://i1.wp.com/sofokelatino.com/wp-content/uploads/2021/06/Bizarrap-Nicky-Jam-Nicky-Jam-BZRP-Music-Session-41-min.jpeg",
            "artist": {
                "name": "Nicky Jam",
                "nickname": "Nicky Jam",
                "nationality": "PR"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
                "url": `${URL_PUBLIC}/track-2.mp3`
            },
            {
                "_id": 4,
            "name": "Eladio Carrion: Bzrp Music Sessions #40",
            "album": "BZRP Music Sessions",
            "cover": "https://i.scdn.co/image/ab67616d00001e0270030b2894d44b3fb2a53ed8",
            "artist": {
                "name": "Eladio Carrion",
                "nickname": "Eladio Carrion",
                "nationality": "PR"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
                "url": `${URL_PUBLIC}/track-3.mp3`
            },
            {
                "_id": 5,
            "name": "Ptazeta: Bzrp Music Sessions #45",
            "album": "BZRP Music Sessions",
            "cover": "https://i.ytimg.com/vi/HMoBVoLEOiw/maxresdefault.jpg",
            "artist": {
                "name": "Ptazeta",
                "nickname": "Ptazeta",
                "nationality": "MX"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
                "url": `${URL_PUBLIC}/track-4.mp3`
            }

        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }