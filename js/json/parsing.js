//Parsing Stringified JSOn to JSON Object
const jsonAsString = `{
    "name":"Yogesh",
    "email":"yogesh@gmail.com",
    "password":"abc@123"
}`

const jsonObject = JSON.parse(jsonAsString);
console.log(jsonObject)
//Output -> { name: 'Yogesh', email: 'yogesh@gmail.com', password: 'abc@123' }

//Parsing JSON object to Stringified JSON
const stringifiedJson = JSON.stringify(jsonObject)
console.log(stringifiedJson)
//Output -> {"name":"Yogesh","email":"yogesh@gmail.com","password":"abc@123"}