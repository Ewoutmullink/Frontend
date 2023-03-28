export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  listCornerPictures: string[];

  constructor(id: number, name: string, description: string, price: number, pictureUrl: string, listCornerPictures: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.listCornerPictures = listCornerPictures;
  }
}
