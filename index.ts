import * as express from "express";
const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Server is running on port: ", PORT);
})

class User{
    name: string
    constructor(name:string){
        this.name = name;
    }
    getName(){
        console.log(this.name)
    }
}

app.get("/hola", (req, res) =>{
    res.json({
        message: "Hola mundo, soy el servidor y soy de Boca Juniors",
    });
});

