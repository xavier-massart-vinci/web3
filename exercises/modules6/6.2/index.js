const express = require("express")
const personsRoutes = require('./routes/persons')
const {errorHandler, disableCors} = require('./utils/middlewares')

const PORT = 3001
const app = express()

app.use(express.json())
app.use(disableCors)
app.use('/persons', personsRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
