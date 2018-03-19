let express = require('express')
let cors = require('cors')
// let data = require('./cohorts')
let app = express()

let data = [{
    id: 1,
    cohortName: "17-01-WD-DP",
    cohortCode: "g100",
    numberOfStudents: 28
},{
    id: 2,
    cohortName: "17-01-DS-GT",
    cohortCode: "g105",
    numberOfStudents: 24
},{
    id: 3,
    cohortName: "17-02-WD-PX",
    cohortCode: "g109",
    numberOfStudents: 30
},{
    id: 4,
    cohortName: "17-03-WD-BD",
    cohortCode: "g110",
    numberOfStudents: 29
}];

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