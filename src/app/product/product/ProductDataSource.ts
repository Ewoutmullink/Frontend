import {Product} from "./Product";

export class ProductDataSource {

  private constructor() { }
  private static instance: ProductDataSource;
  public productList: Product[] = [new Product(1, 'Patat', '100 gram patat zonder saus', 10, 'https://bode.pubble.cloud/67c86d35/content/2019/9/8e269ae0-9d78-472d-a63a-cc56bbb0d6e8_thumb840.jpg'),
    new Product(1, 'Patat', '100 gram patat zonder saus', 10, 'https://bode.pubble.cloud/67c86d35/content/2019/9/8e269ae0-9d78-472d-a63a-cc56bbb0d6e8_thumb840.jpg'),
    new Product(1, 'Patat', '100 gram patat zonder saus', 10, 'https://bode.pubble.cloud/67c86d35/content/2019/9/8e269ae0-9d78-472d-a63a-cc56bbb0d6e8_thumb840.jpg')];

  public static getInstance(): ProductDataSource {
    if (!ProductDataSource.instance) {
      ProductDataSource.instance = new ProductDataSource();
    }

    return ProductDataSource.instance;
  }
}
