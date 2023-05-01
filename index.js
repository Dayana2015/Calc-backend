// crear un objeto express incluir carpeta express
const express=require(`express`);
const bodyparser= require(`body-parser`);

//2 crear un objeto que represente nuestra aplicacion
const app=express();

app.use(express.json());
// definir los entry point de la API
// definir la ruta (la url) en donde va a responder nuestra API

app.use(function(req , res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","POST");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();

}
);

app.post(
    `/api/sumar`,
    // se requiere dos objetos uno que represente la peticion y uno la respuesta
    //req request. res respuesta
    (req, res)=>{
        //to Do: aqui va el procesamiento de la petición
        console.log("alguien esta conectandose a esta ruta");
        const {numero_1, numero_2}=req.body;
        const resultado=parseFloat(numero_1)+parseFloat(numero_2);
        res.json(resultado);
    }
);

app.post(
    `/api/restar`,
    (req, res)=>{

        /*forma larga
        const n1= req.body.numero_1;
        const n2= req.body.numero_2;
        const resultado=n1-n2;
        res.json(resultado);*/
        // forma corta
        const {numero_1 , numero_2}=req.body;
        const resultado=numero_1-numero_2;
        res.json(resultado);
    }
);
app.post(
    `/api/dividir`,
    (req, res)=>{

        let resultado;
        /*const {numero_1, numero_2}=req.body;
        let resultado;
        if(numero_2!=0){

             resultado=numero_1/numero_2;
        }else{
             resultado="error";
        
        }

        res.json(resultado);*/

        try{
            const {numero_1,numero_2}= req.body;
            resultado= numero_1/numero_2;


        }catch(error){
            //gestionar le error
            resultado=error;
        }
        res.json(resultado);
    }

);


app.post(
    //ruta en la que va a responder
    '/api/multiplicar',
    // metodo constructor de la respuesta y peticion
    (req, res) => {
        const { numero_1, numero_2 } = req.body;
        let resultado;

        resultado = numero_1 * numero_2;

        res.json(resultado);
    });


//3 crear un servico para escuchar peticiones 
//listen tiene dos parametros primero el puerto, segundo argumento el nombre del dominio, luego funcion callback
app.listen(
    3000,
    ()=>{
        console.log("servidor ejecutandose en el puerto 3000");

    }
);