const employee = require('../Model/emp')

exports.create = ((req, res)=>{
    console.log('Create employee Data');
    const {emp_id, emp_name, designation} = req. body
    employee.create({emp_id, emp_name, designation})
    .then((empDetails)=>{res.status(200).send(empDetails)})
    .catch(err=>res.status(400).send(err))

})

exports.list = ((req, res)=>{
    console.log('Get all employees data');
    employee.find({})
    .then((empDetails)=>{res.status(200).send(empDetails)})
    .catch(err=>res.status(400).send(err))
})