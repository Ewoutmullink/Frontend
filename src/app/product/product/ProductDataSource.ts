import {Product} from "./Product";

export class ProductDataSource {

  private constructor() { }
  private static instance: ProductDataSource;
  public productList: Product[] = [];

  public static getInstance(): ProductDataSource {
    if (!ProductDataSource.instance) {
      ProductDataSource.instance = new ProductDataSource();
    }

    return ProductDataSource.instance;
  }
}
