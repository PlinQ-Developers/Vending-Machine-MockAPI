import { Coin } from "../../domain/models/coin";
import { CoinInventoryRepositoryInterface } from "../../domain/repositories/coinInventoryRepositoryInterface";

export class CoinInventoryRepositoryImpl implements CoinInventoryRepositoryInterface {
    private coinInventory: Coin[] = [];

    getAllCoins(): Coin[] {
        return this.coinInventory;
    }

    updateCoinInventory(coins: Coin[]): void {
        this.coinInventory = coins;
    }

}