import { Coin } from "../../domain/models/coin";
import { Product } from "../../domain/models/product";
import { VendingMachine } from "../../domain/vendingMachine";

import { CoinInventoryDTO } from "../dto/coinInventoryDTO";
import { ProductInventoryDTO } from  "../dto/productInventoryDTO";
import { ProductSelectionDTO } from "../dto/productSelectionDTO";

import { CoinInventoryRepositoryInterface } from "../../domain/repositories/coinInventoryRepositoryInterface";
import { ProductInventoryRepositoryInterface } from "../../domain/repositories/productInventoryRepositoryInterface";

export class VendingMachineService {
    private vendingMachine: VendingMachine;

    constructor(
        coinInventoryRepository: CoinInventoryRepositoryInterface,
        productInventoryRepository: ProductInventoryRepositoryInterface,
    ) {
        this.vendingMachine = new VendingMachine(
            coinInventoryRepository,
            productInventoryRepository,
        )
    }

    public getCoinInventory(): CoinInventoryDTO {
        const coins = this.vendingMachine.getCoinsInventory();
        return { coins }
    }

    public getProductInventory(): ProductInventoryDTO {
        const products = this.vendingMachine.getProductsInventory();
        return { products }
    }

    public addCoins(
        coinValue: number,
        coinCount: number,
    ): void {
        this.vendingMachine.addCoins(
            coinValue,
            coinCount,
        )
    }

    public addProduct(
        productName: string,
        productPrice: number,
        productCount: number,
    ): void {
        this.vendingMachine.addProduct(
            productName,
            productPrice,
            productCount,
        )
    }

    public selectedProduct(
        productId: string,
        coins: Coin[],
    ): Product[] | null {
        return this.vendingMachine.selectProduct(
            productId,
            coins,
        );
    }
}
