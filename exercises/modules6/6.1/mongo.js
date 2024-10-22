const mongoose = require('mongoose')

if (process.argv.length < 3) {
 console.log('Please provide the password as an argument: node mongo.js <password>')
 process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://xaviermassart:${password}@cluster0.5tefy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const personSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    mongoose.connect(url)
    .then(() => {
        Person.find({})
        .then( persons => {
            persons.forEach((person)=> {
                console.log(`${person.name} ${person.phoneNumber}`)
            });
            mongoose.connection.close();
        })
    })
}


if(process.argv.length === 5) {
    mongoose
 .connect(url)
 .then((result) => {
   console.log('connected')

   const person = new Person({
     name: process.argv[3],
     phoneNumber: process.argv[4],
   })

   return person.save().then((result) => {
        console.log(`added ${result.name} number ${result.phoneNumber} to phonebook`)
    })
 })
 .then(() => {
   return mongoose.connection.close()
 })
 .catch((err) => console.log(err))
}
