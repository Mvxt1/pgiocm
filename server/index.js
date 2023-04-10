const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')



const mpesaRoutes = require('./router/token')
const db = require('./database/database')

var imgconfig = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,"../images")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("So pode usar imagens"))
    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit:'10mb'}))

app.use("/doacao",mpesaRoutes)


//Listar todos os orfanatos
app.get("/orfanatos", (req,res) => {
    db.query('SELECT * FROM orfanato', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    });
})

//Listar todas actividades
app.get("/actividade", (req,res) => {
    db.query('SELECT * FROM actividade', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    });
})

//Listar 4 orfanatos recentes
app.get("/orfanatos4", (req,res) => {
    db.query('SELECT * FROM orfanato ORDER BY id DESC LIMIT 4', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    });
})

//Listar 5 orfanatos recentes
app.get("/Admin/orfanatos5", (req,res) => {
    db.query('SELECT * FROM orfanato ORDER BY id DESC LIMIT 5', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    });
})

//Apagar orfanato seleccionado
app.delete("/Admin/orfanatos/:id", (req,res) => {
    const {id} = req.params;

    db.query(`DELETE FROM orfanato WHERE id = ${id}`, (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    });
})

//Actualizar informacoes do orfanato seleccionado
app.put("/Admin/orfanatos/:id", (req,res) => {
    const {id} = req.params;
    const {nome} = req.body;
    const {endereco} = req.body;
    const {contacto} = req.body;
    const {descricao} = req.body;

    db.query(`UPDATE orfanato SET nome = ${nome}, endereco = ${endereco}, contacto=${contacto}, descricao=${descricao} WHERE id = ${id}`, (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    });
})


//Adicionar novo administrador de orfanato
app.post("/Admin/administradores/newAdmin", (req,res) => {
    const {name} = req.body;
    const {senha} = req.body;
    const {apelido} = req.body;

    let SQL = "INSERT INTO super_administrador (nome,apelido,senha) VALUES (?,?,?)"

    db.query(SQL, [name,apelido,senha], (err, result) => {
        console.log(err);
    })
})

//Adicionar nova actividade de orfanato
app.post("/backOrf/newactividade", (req,res) => {
    const {titulo} = req.body;
    const {data_act} = req.body;
    const {texto} = req.body;

    let SQL = "INSERT INTO actividade (titulo,data_act,texto) VALUES (?,?,?)"

    db.query(SQL, [titulo,data_act,texto], (err, result) => {
        console.log(err);
    })
})

//Fazer verificacao de login
app.post('/api/login', (req,res) => {
    const {username, password} = req.body
    const values = [username,password]

    db.query("SELECT * FROM super_administrador WHERE nome = ? AND senha = ?", values, (err, result) => {
        if(err){
            res.status(500).send(err)
        } else {
            if(result.length > 0 ){
                res.status(200).send({
                    "id": result[0].id,
                    "nome:": result[0].username
                })
            }else {
                res.status(400).send('Username ou password incorrectos')
            }
        }
    })
});

//Contagem de administradores
app.get('/admin/nr/admin', (req,res) => {
        db.query('SELECT COUNT(*) FROM super_administrador', (err,result) => {
            if(err){
                res.status(500).json({err});
                console.log(err);
            }
            else{
                res.status(200).json(result);
            }
    });

})

//Contagem de orfanatos
app.get('/admin/nr/orfanatos', (req,res) => {
    db.query('SELECT COUNT(*) FROM orfanato', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
});

})

//Criar novo orfanato
app.post("/Admin/orfanatos/newOrf", upload.single('image'), (req,res) => {
    const {nome} = req.body;
    const {descricao} = req.body;
    const {endereco} = req.body;
    const {contacto} = req.body;
    const {filename} = req.file;

    let SQL = "INSERT INTO orfanato (nome,descricao,endereco,contacto, image) VALUES (?,?,?,?,?)"

    db.query(SQL, [nome,descricao,endereco,contacto,filename], (err,result) => {
        console.log(err);
    })
})

//Get todos os administradores
app.get("/Admin/administradores", (req,res) => {
    db.query('SELECT * FROM super_administrador', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    })
})

//Get todos os orfanatos
app.get("/Admin/orfanatos", (req,res) => {
    db.query('SELECT * FROM orfanato', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    })
})

//Get todos os orfanatos
app.get("/backOrf/actividade", (req,res) => {
    db.query('SELECT * FROM actividade LIMIT 2', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
    })
})

//Get todos orfanatos para select
app.get('/Admin/lista/orfanatos', (req,res) => {
    db.query('SELECT * FROM orfanato', (err,result) => {
        if(err){
            res.status(500).json({err});
            console.log(err);
        }
        else{
            console.log(result[0])
            res.status(200).json(result);
        }
    })
})

app.listen(3001, () => {
    console.log('Servidor');
})


