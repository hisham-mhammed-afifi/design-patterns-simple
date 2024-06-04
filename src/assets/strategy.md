### Strategy

**Description:**
The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.

**Problem Statement:**
You need to use different algorithms or strategies interchangeably without altering the client code that uses them. This helps to manage a variety of behaviors and algorithms within a class.

**Solution:**

1. Define a strategy interface with a method for executing the algorithm.
2. Implement concrete strategy classes that implement the strategy interface.
3. Create a context class that maintains a reference to a strategy object and delegates algorithm execution to the strategy.
4. Client code sets the strategy to be used in the context and calls the context to execute the algorithm.

**Design:**

- **User's Behavior:** The user interacts with the context and sets the desired strategy. The context uses the strategy to perform the required operation.
- **Example Scenario:** A user wants to implement different sorting algorithms (e.g., bubble sort, quick sort) that can be selected and applied at runtime without changing the sorting logic.

**Implementation with TypeScript:**

```typescript
// Strategy Interface
interface SortingStrategy {
  sort(data: number[]): number[];
}

// Concrete Strategies
class BubbleSortStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting using Bubble Sort");
    // Bubble Sort logic
    let len = data.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    return data;
  }
}

class QuickSortStrategy implements SortingStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting using Quick Sort");
    // Quick Sort logic
    if (data.length <= 1) {
      return data;
    }
    let pivot = data[0];
    let left = data.slice(1).filter((item) => item < pivot);
    let right = data.slice(1).filter((item) => item >= pivot);
    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

// Context
class SortingContext {
  private strategy: SortingStrategy;

  setStrategy(strategy: SortingStrategy): void {
    this.strategy = strategy;
  }

  executeStrategy(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

// Client code
const context = new SortingContext();

const data = [3, 1, 2, 5, 4];

console.log("Using Bubble Sort:");
context.setStrategy(new BubbleSortStrategy());
console.log(context.executeStrategy([...data])); // Sorting using Bubble Sort
// [1, 2, 3, 4, 5]

console.log("Using Quick Sort:");
context.setStrategy(new QuickSortStrategy());
console.log(context.executeStrategy([...data])); // Sorting using Quick Sort
// [1, 2, 3, 4, 5]
```
