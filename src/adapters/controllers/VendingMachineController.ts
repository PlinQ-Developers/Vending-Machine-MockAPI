import { Request, Response } from "express";
import { Coin } from "../../domain/models/coin";
import { Product } from "../../domain/models/product";
import { VendingMachineService } from "../../application/usecases/vendingMachineService";
import { CoinInventoryRepositoryImpl } from "../../infrastructure/persistence/coinInventoryRepositoryImpl";
import { ProductInventoryRepositoryImpl } from "../../infrastructure/persistence/productInventoryRepositoryImpl";

import { ProductSelectionDTO } from "../../application/dto/productSelectionDTO";

const coinInventoryRepository = new CoinInventoryRepositoryImpl();
const productInventoryRepository = new ProductInventoryRepositoryImpl();
const vendingMachineService = new VendingMachineService(
    coinInventoryRepository,
    productInventoryRepository,
);

export const getCoinInventory = (
    req: Request,
    res: Response,
) => {
    const coinInventory = vendingMachineService.getCoinInventory();
    res.json(coinInventory);
};


export const getProductInventory = (
    req: Request,
    res: Response,
) => {
    const productInventory = vendingMachineService.getProductInventory();
    res.json(productInventory);
};


export const addCoins = (
    req: Request,
    res: Response,
) => {
    const { coinValue, coinCount } = req.body;
    vendingMachineService.addCoins(
        coinValue,
        coinCount,
    );
    res.sendStatus(201);
};


export const addProduct = (
    req: Request,
    res: Response,
) => {
    const { productName, productPrice, productCount } = req.body;
    vendingMachineService.addProduct(
        productName,
        productPrice,
        productCount,
    );
    res.sendStatus(201);
}


export const selectProduct = (
    req: Request,
    res: Response,
) => {
    const { productId, coins } = req.body;
    const selectedProduct = vendingMachineService.selectedProduct(
        productId,
        coins,
    );

    if (selectedProduct) {
        res.json(selectedProduct);
    } else {
        res.sendStatus(404);
    }
};
