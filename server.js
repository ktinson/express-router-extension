const app = require('./src/app')
const port = 3005
// Express Routes

app.listen(port, () => {
    console.log(`App listening http://localhost:${port}/users`)
})
