class Product {
    id: number;
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Delivery {
    constructor(date: Date) {}
}

class HomeDelivery extends Delivery {
    constructor(date: Date, address: string) {
        super(date)
    }
}

class ShopDelivery extends Delivery {
    constructor(shopId: number) {
        super(new Date());
    }
}

class Cart {
    private productList: Product[] = [];
    private delivery: HomeDelivery | ShopDelivery;

    setId(): void {
        for (let i = 0; i < this.productList.length; i++) {
            this.productList[i].id = i + 1;
        }
    }

    addProduct(product: Product): void {
        this.productList.push(product);
        this.setId();
    }

    deleteProduct(id: number): void {
        this.productList.splice(id - 1, 1);
        this.setId();
    }

    calcTotalPrice(): number {
        return this.productList.reduce((akb, element) => akb + element.price, 0);
    }

    setDelivery(delivery: HomeDelivery | ShopDelivery): void {
        this.delivery = delivery;
    }

    checkout(): boolean {
        if (this.productList.length !== 0 && this.delivery) {
            return true;
        } else {
            return false
        }
    }
}

const cart = new Cart();
cart.addProduct(new Product('Tomato', 10));
cart.addProduct(new Product('Cucumber', 12));
cart.addProduct(new Product('Bread', 3));

console.log(cart.checkout());
console.log(cart);