// const cors = require("cors");
const app = require('./app');
const PORT = 3000;

// app.use(cors)
// const cors = require('cors')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`server on PORT: http://localhost:${PORT}` );
})