import Address from "./adress"; // Importar el modelo para poder usarlo como tipo de otra propiedad un nivel por encima

export default interface User {
    id: number;
    name: string;
    email: string;
    address: Address; // Es una propiedad que a la vez es un array de objetos por lo que también se debe crear un modelo para definir su tipo y aplicarlo en la propiedad padre. Se debe importar arriba
}