// class Celular{
//     constructor(color,peso,tamaño,rdc,ram,rdp,){
//             this.color = color;
//             this.peso= peso;
//             this.tamaño= tamaño;
//             this.resolucionDeCamara = rdc;
//             this.memoriaRam= ram;
//             this.resolucionDePantalla = rdp; 
//             this.ecendido = false;
//         }   
//     presionarBtotonEncendido(){
//         if (this.encendido == false){
//             alert("celular prendido")
//             this.encendido=true;
//         }else{
//             alert("celular apagado")
//         }
//     }
//     reiniciar(){
//         if(this.encendido == true){
//             alert("reiniciando celular")

//         }else{
//             alert("el celular está apagado")
//             this.encendido = false;
//         }
//     }
//     tomarFoto(){
//         alert(  `Foto tomada en una resolución de: ${this.resolucionDeCamara}  `)

//     }
//     grabarVideo(){
//         alert(  `grabando video en  ${this.resolucionDeCamara}  `)
//     }
//     mobileInfo(){
    
//         return `
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         tamaño:<b>${this.tamaño}</b><br>
//         Memoria RAM <b>${this.memoriaRam}</b><br>
//         resolución de video<b>${this.resolucionDeCamara}</b><br>
      
//         `;

//     }

// }
// class celularAltaGama extends Celular{
//     constructor(color,peso,tamaño,rdc,ram,rdce){
//         super(color,peso,tamaño,rdc,ram);
//         this.resolucionDeCamaraExtra=rdce;
//     }
//     grabarVideoLento(){
//         alert("Estas grabando en camara lenta")
//     }
//     reconocimientoFacial(){
//         alert("Vamos a iniciar un reconocimiento facial")
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
//     }
// }


// // celular1 = new Celular("rojo", "150g","5","HD","1GB")
// // celular2 = new Celular("azul", "1550g","5.4","Full HD","2GB")
// // celular3 = new Celular("blanco", "146g","5.9","Full HD","2GB")


// // celular1.presionarBtotonEncendido()
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();
    

// celular1 = new celularAltaGama("rojo","130g","5.2","4k","3GB","FULL HD")
// celular2 = new celularAltaGama("rojo","142g","6","4k","4GB","HD")




// document.write(`
//     ${celular1.mobileInfo()}<br><br>
//     ${celular2.mobileInfo()}<br>
    
// `)

// document.write("metodos de arrays <br>" )


//     var miArray = ['Moto','soto','Abaco','abeja','Sapo','nieve','Zumba','barco'];
// //     alert(miArray.sort(function (a, b){return a.toLowerCase().localeCompare doc(b.toLowerCase());}));



// const materiasHTML= document.querySelector(".materias");

// const materias =[
// // //     {
// // //         nombre:"Fisica 4",
// // //         nota: 7 
// //     }, {
// //         nombre:"Calculo 3",
// //         nota: 8
// //     }, {
// //         nombre:"Bases de datos 3",
// //         nota: 9 
// //     }, {
// //         nombre:"Matematicas discretas 2",
// //         nota: 7 
// //     }, {
// //         nombre:"Programacion 4",
// //         nota: 8 
// //     }

// // ]

// // const obtenerMateria=(id)=>{
// //     return new Promise ((resolve,reject)=>{
// //         materia= materias[id];
// //         if(materia == undefined) reject("No existe La materia")
// //         else setTimeout(()=>{resolve(materia)},Math.random()*400);
// //     })
    
// // }
// //  const devolverMaterias=async()=>{
// //      let materia= [];
// //      for (let i = 0; i < materias.length; i++) {
// //         materia[i] =  await obtenerMateria(i);
// //         let newHTMLcode = `
// //           <div class="materia">
// //              <div class="nombre"> ${materia[i].nombre}</div>
// //              <div class="nota">${materia[i].nota}</div>
// //           </div>`;
        
// //           materiasHTML.innerHTML += newHTMLcode;
// //    }
// //  }

// //  devolverMaterias( );

// // const myPromise = new Promise((resolve, reject) => {  

// //     let condition="hola";  
    
// //     if(condition==undefined) { 
// //         reject('Promise is rejected');     
          
// //     } else {    
// //         resolve('Promise is resolved successfully.');
       
// //     }
// // });

// // myPromise.then((message) => { 
// //     console.log(message);
// // }).catch((message) => { 
// //     console.log(message);
// // });


// const materiasHTML= document.querySelector(".materias");

// const materias=[
//     {
//         nombre:"Fisica 4",
//         nota: 7 
//     }, {
//         nombre:"Calculo 3",
//         nota: 8
//     }, {
//         nombre:"Bases de datos 3",
//         nota: 9 
//     }, {
//         nombre:"Matematicas discretas 2",
//         nota: 7 
//     }, {
//         nombre:"Programacion 4",
//         nota: 8 
//     }

// ]

//  const obtenerMaterias=(id)=>{
//   return new Promise((resolve,reject)=>{
//      let materia=materias[id];
//      if (materia == undefined) reject("la materia no existe")
//       else setTimeout(() => {resolve(materia)},Math.random()*400);
    
// })}

// // const obtenerMaterias=(id)=>{
// //     return new Promise ((resolve,reject)=>{
// //         materia= materias[id];
// //         if(materia == undefined) reject("No existe La materia")
// //          else setTimeout(() => {resolve(materia)},Math.random()*400);
// //     })}

// const devolverMaterias=async()=>{
//          let materia= [];
//          for (let i = 0; i < materias.length; i++) {
//             materia[i] =  await obtenerMaterias(i);
//             let newHTMLcode = `
//               <div class="materia">
//                  <div class="nombre"> ${materia[i].nombre}</div>
//                  <div class="nota">${materia[i].nota}</div>
//               </div>`;
            
//               materiasHTML.innerHTML += newHTMLcode;
//        }
//      }
    
//      devolverMaterias( );
// // const devolverMaterias=async()=>{
// //           let materia=[];
// //           for (let i = 0; i < materias.length; i++) {
// //               materia[i]  = await obtenerMaterias(i);
// //               let newHTMLcode = `
// //                         <div class="materia">
// //                            <div class="nombre"> ${materia[i].nombre}</div>
// //                            <div class="nota">${materia[i].nota}</div>
// //                         </div>`;
                      
// //                         materiasHTML.innerHTML += newHTMLcode;
// //     }
// // }
// // obtenerMaterias();





