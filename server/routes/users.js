const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        users: [
            {
                name: 'Ramesh'
            },
            {
                name: 'Sita'
            }
        ]
    })
});

router.get('/contact/:id', (req, res) => {
    res.status(200).json({
        id: req.params.id,
        fromMiddleware: req.abcd,
        params: req.query.phone,
        users: [
            {
                name: 'Ramesh',
                phone: '4567890'
            },
            {
                name: 'Sita',
                phone: '4567890'
            }
        ]
    })
});

router.post('/', (req, res)=>{
    const {username, name, age} = req.body;
    if(username === ''){
        res.status(400).json({error: 'Username is required.'});
        return
    }
    res.json(req.body);
})

module.exports = router;


// create server folder
// run "npm init"
// install express