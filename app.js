let express = require(`express`)
let app = express()
const bodyParser = require("body-parser");
const PORT = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.render('index')
})



app.get('/contacts' , (req, res) => {
	res.render('contacts')
})



app.get('/otherwriters', (req, res) => {
	res.render('otherwriters')
})

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT} and network\nhttp://localhost:${PORT}`)
})
