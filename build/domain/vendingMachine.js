"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
var VendingMachine = /** @class */ (function () {
    function VendingMachine(coinInventoryRepository, productInventoryRepository) {
        this.coinInventoryRepository = coinInventoryRepository;
        this.productInventoryRepository = productInventoryRepository;
    }
    VendingMachine.prototype.getCoinsInventory = function () {
        return this.coinInventoryRepository.getAllCoins();
    };
    VendingMachine.prototype.getProductsInventory = function () {
        return this.productInventoryRepository.getAllProducts();
    };
    VendingMachine.prototype.addCoins = function (coinCount, coinValue) {
        var coins = this.coinInventoryRepository.getAllCoins();
        var existingCoin = coins.find(function (coin) { return coin.value === coinValue; });
        if (existingCoin) {
            existingCoin.count += coinCount;
        }
        else {
            coins.push({
                id: coinValue.toString(),
                value: coinValue,
                count: coinCount,
            });
        }
        this.coinInventoryRepository.updateCoinInventory(coins);
    };
    VendingMachine.prototype.addProduct = function (productName, productPrice, count) {
        var products = this.productInventoryRepository.getAllProducts();
        var existingProduct = products.find(function (p) { return p.id === productName; });
        if (existingProduct) {
            existingProduct.count += count;
        }
        else {
            products.push({
                id: productName,
                name: productName,
                price: productPrice,
                count: count,
            });
        }
        this.productInventoryRepository.updateProductInventory(products);
    };
    VendingMachine.prototype.selectProduct = function (productId, coins) {
        var products = this.productInventoryRepository.getAllProducts();
        return products.filter(function (product) { return product.id === productId; });
    };
    return VendingMachine;
}());
exports.VendingMachine = VendingMachine;
