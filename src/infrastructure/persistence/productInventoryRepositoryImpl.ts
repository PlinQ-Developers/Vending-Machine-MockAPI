import { Product } from "../../domain/models/product";
import { ProductInventoryRepositoryInterface } from "../../domain/repositories/productInventoryRepositoryInterface";

export class ProductInventoryRepositoryImpl implements ProductInventoryRepositoryInterface {
    private productInventory: Product[] = [];

    getAllProducts(): Product[] {
        return this.productInventory;
    }

    updateProductInventory(products: Product[]): void {
        this.productInventory = products;
    }


}