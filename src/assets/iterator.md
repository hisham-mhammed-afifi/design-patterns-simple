### Iterator

**Description:**
The Iterator pattern provides a way to access elements of a collection sequentially without exposing its underlying representation.

**Problem Statement:**
You need to traverse a collection of objects without exposing the internal structure of the collection. This is useful when you want to abstract the process of iterating over a collection.

**Solution:**

1. Define an iterator interface with methods for accessing elements sequentially.
2. Implement concrete iterator classes for different types of collections.
3. Implement the collection class to return an iterator instance.
4. Client code uses the iterator to access elements in the collection.

**Design:**

- **User's Behavior:** The user interacts with the iterator to traverse a collection. The iterator abstracts the details of the collection's structure.
- **Example Scenario:** A user wants to iterate over a list of items in a shopping cart without needing to know how the items are stored internally.

**Implementation with TypeScript:**

```typescript
// Iterator Interface
interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

// Collection Interface
interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

// Concrete Collection
class ShoppingCart implements IterableCollection<string> {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  createIterator(): Iterator<string> {
    return new ShoppingCartIterator(this);
  }

  getItems(): string[] {
    return this.items;
  }
}

// Concrete Iterator
class ShoppingCartIterator implements Iterator<string> {
  private cart: ShoppingCart;
  private index: number = 0;

  constructor(cart: ShoppingCart) {
    this.cart = cart;
  }

  next(): string | null {
    if (this.hasNext()) {
      return this.cart.getItems()[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.cart.getItems().length;
  }
}

// Client code
const cart = new ShoppingCart();
cart.addItem("Apple");
cart.addItem("Banana");
cart.addItem("Orange");

const iterator = cart.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next()); // Apple, Banana, Orange
}
```
