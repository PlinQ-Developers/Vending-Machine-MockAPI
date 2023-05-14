"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinInventoryRepositoryImpl = void 0;
var CoinInventoryRepositoryImpl = /** @class */ (function () {
    function CoinInventoryRepositoryImpl() {
        this.coinInventory = [];
    }
    CoinInventoryRepositoryImpl.prototype.getAllCoins = function () {
        return this.coinInventory;
    };
    CoinInventoryRepositoryImpl.prototype.updateCoinInventory = function (coins) {
        this.coinInventory = coins;
    };
    return CoinInventoryRepositoryImpl;
}());
exports.CoinInventoryRepositoryImpl = CoinInventoryRepositoryImpl;
