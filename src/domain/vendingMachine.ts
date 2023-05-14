import { Coin } from "./models/coin";
import { Product } from "./models/product";
import { CoinInventoryRepositoryInterface } from "./repositories/coinInventoryRepositoryInterface";
import { ProductInventoryRepositoryInterface } from "./repositories/productInventoryRepositoryInterface";

export class VendingMachine {
    private coinInventoryRepository: CoinInventoryRepositoryInterface;
    private productInventoryRepository: ProductInventoryRepositoryInterface;

    constructor(
        coinInventoryRepository: CoinInventoryRepositoryInterface,
        productInventoryRepository: ProductInventoryRepositoryInterface,
    ) {
        this.coinInventoryRepository = coinInventoryRepository;
        this.productInventoryRepository = productInventoryRepository;
    }

    public getCoinsInventory(): Coin[] {
        return this.coinInventoryRepository.getAllCoins();
    }

    public getProductsInventory(): Product[] {
        return this.productInventoryRepository.getAllProducts();
    }

    public addCoins(
        coinCount: number,
        coinValue: number,
    ): void {
        const coins = this.coinInventoryRepository.getAllCoins();
        const existingCoin = coins.find(
            (coin) => coin.value === coinValue
        );

        if (existingCoin) {
            existingCoin.count += coinCount;
        } else {
            coins.push({
                id: coinValue.toString(),
                value: coinValue,
                count: coinCount,
            });
        }

        this.coinInventoryRepository.updateCoinInventory(coins);
    }

    public addProduct(
        productName: string,
        productPrice: number,
        count: number,
    ): void {
        const products = this.productInventoryRepository.getAllProducts();
        const existingProduct = products.find(
            (p) => p.id === productName
        );

        if (existingProduct) {
            existingProduct.count += count
        } else {
            products.push({
                id: productName,
                name: productName,
                price: productPrice,
                count: count,
            })
        }

        this.productInventoryRepository.updateProductInventory(products);
    }

    public selectProduct(
        productId: string,
        coins: Coin[],
    ): Product[] | null {
        const products = this.productInventoryRepository.getAllProducts();

        return  products.filter(
            (product) => product.id === productId
        );
    }

}