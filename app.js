import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app=express();
const PORT=process.env.PORT||3000;
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

let projects=[
 {id:1,title:"Casa entre patios",category:"Vivienda",author:"Alex Martínez",status:"approved",description:"Vivienda organizada alrededor de patios interiores."},
 {id:2,title:"Sistema modular",category:"Conceptual",author:"AUREN Studio",status:"pending",description:"Sistema flexible de módulos para distintos usos."}
];

app.get("/api/health",(req,res)=>res.json({success:true,app:"AUREN",status:"online"}));

app.get("/api/projects",(req,res)=>{
 const {status,category}=req.query;
 const result=projects.filter(p=>(!status||p.status===status)&&(!category||p.category===category));
 res.json({success:true,count:result.length,projects:result});
});

app.post("/api/projects",(req,res)=>{
 const {title,category,author,description=""}=req.body;
 if(!title||!category||!author) return res.status(400).json({success:false,error:"title, category y author son obligatorios"});
 const project={id:projects.length?Math.max(...projects.map(p=>p.id))+1:1,title,category,author,description,status:"pending"};
 projects.push(project);
 res.status(201).json({success:true,project});
});

app.patch("/api/projects/:id/status",(req,res)=>{
 const allowed=["pending","approved","rejected"];
 if(!allowed.includes(req.body.status)) return res.status(400).json({success:false,error:"Estado inválido"});
 const project=projects.find(p=>p.id===Number(req.params.id));
 if(!project) return res.status(404).json({success:false,error:"Proyecto no encontrado"});
 project.status=req.body.status;
 res.json({success:true,project});
});

app.get("*",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
app.listen(PORT,()=>console.log(`AUREN online en puerto ${PORT}`));