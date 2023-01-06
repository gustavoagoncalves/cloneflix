// SERVIDOR ESTÁTICO QUE SERVIRÁ TODO O CÓDIGO DA APLICAÇÃO (FRONT-END)
const express = require("express")
const path = require("path")
const port = 3333

// PEGA O DIRETÓRIO ATUAL E JUNTA COM A PASTA PUBLICA CRIADA
let initialPath = path.join(__dirname, "public")

let app = express()
app.use(express.static(initialPath))

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
})

// STARTA O SERVIDOR 
app.listen(port, () => {
    console.log(`Server start up on port ${port}!`)
})