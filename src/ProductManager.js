import { promises } from 'fs';
export default class ProductManager {
    constructor (path){
        this.path = path;
    }

    async save(obj){
        
    }

    
    async getByid(){

    }

    async getAll(){
        try {
            const products = await promises.readFile(this.path, `utf-8`);
            return JSON.parse(products);
        }
            catch (error){
                console.log(error);
                return [];
            }
    }



}
