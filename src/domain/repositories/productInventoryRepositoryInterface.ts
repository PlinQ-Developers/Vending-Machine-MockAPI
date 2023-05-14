import { Product } from "../models/product";

export interface ProductInventoryRepositoryInterface {
    getAllProducts(): Product[];
    updateProductInventory(
        products: Product[],
    ): void;
}