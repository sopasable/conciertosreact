//Importar funciones de node_module "gulp"
const {src,dest,watch}=require("gulp");
//importar funciones sass y gulp-sass (Para que se conecte con gulp)
const sass=require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

function css(done){
    src("./src/scss/**/*.scss")//src identifica el archivo y lo mantiene en cache / ** es para que tome los cambios de todos los archivos
    .pipe( plumber()) //Utileria que no detiene la ejecucion ante errores (Para agregar codigo anadido como normalize)   
    .pipe(sass())//Compilarlo
    .pipe(dest("src")); //Guarda en disco duro (lo guarda en destino src/)

    done();
}

//Anadimos un watch para que conforme cambie app.css se cambie en el navegador
//watch sirve para mostrar cambios en tiempo real
function dev(done){
    watch("./src/scss/**/*.scss",css);
    done();
}

exports.css=css;
exports.dev=dev;