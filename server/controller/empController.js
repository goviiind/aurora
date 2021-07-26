const Employee = require("../model/Employee")

const empController = () =>{
    return {

          //Get Employee Records

          async getEmployees(req,res){
            try {
                
                const employees = await Employee.find()

                res.json(employees)

            } catch (err) {
                console.log(err)
                res.send("Server Error")
            }
        },


        //Create Employee Record
        async addEmployee(req,res){
            try{
                const { name, email , contact , city } = req.body

                const isEmail = await Employee.findOne({email})
    
                if(isEmail){
                    res.json({error : "Email already exists"})
                }
    
                const employee = new Employee({
                    name,
                    email,
                    contact,
                    city
                })
    
                await employee.save()
    
                res.json(employee)
            }
            catch(err){
                console.log(err)
                res.send("Server Error")
            }
            
        },

      

    }
}

module.exports = empController