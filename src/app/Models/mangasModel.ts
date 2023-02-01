export class MangasModel {
   
    constructor(
        public id : string,
        public name: string,
        public author: string,
        public img_mangas: string,
        public img_tome: string,
         public price: any, 
         public nbr_tome: any, 
         public stock: any,
         public likes: any, 
         public release_date: any,
         public resume: any,
         )

    {
        
        this.name = name;
        this.name = name;
        this.author =author;
        this.img_mangas = img_mangas ; 
        this.img_tome = img_tome;
        this.price = price;
        this.nbr_tome = nbr_tome;
        this.stock = stock ; 
        this.likes = likes; 
        this.release_date = release_date; // date de sortie du mangas
        this.resume = resume;
    }
}