export class usuario {
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    sobre_mi: String;
    url_foto: String;
    user: String;
    password: String;


    constructor (nombre:String, apellido:String, titulo: String, sobre_mi: String, url_foto: String,
    user: String, password: String,) {
    
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.sobre_mi = sobre_mi;
        this.url_foto =url_foto;
        this.user = user;
        this.password = password;
    }
}
