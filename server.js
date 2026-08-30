import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname= dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT= 3000;

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res)=>{
    console.log("success");
    res.sendFile(__dirname+'/public/index.html')

})

app.listen(PORT,()=>{
    console.log(`Server is running at: http://localhost:${PORT}`)
})