let express = require('express')
let cors = require('cors')
let data = require('./cohorts')
let app = express()

app.use(cors())

app.get('/', function(req, res) {
    res.json({data})
})

function findId(data, id) {
    for(let i = 0; i < data.length; i++) {
        if (data[i].id == id){
        return data[i]
        }
    }
}

app.get('/:id', function(req, res) {
    let item = findId(data, req.params.id)
    if (!req) {
        return res.status(404).json( {
            error: {
                message: "No record found!"
            }
        })
    } else {
         return res.json({data: item})
    }
})

app.listen(3000)