import { Coin } from '../models/coin';

export interface CoinInventoryRepositoryInterface {
    getAllCoins(): Coin[];
    updateCoinInventory(
        coins: Coin[],
    ): void;
}

