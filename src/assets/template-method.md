### Template Method

**Description:**
The Template Method pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It allows subclasses to redefine certain steps of an algorithm without changing the algorithm's structure.

**Problem Statement:**
You need to implement the invariant parts of an algorithm once and allow subclasses to implement the behavior that can vary. This helps to avoid code duplication and promotes code reuse.

**Solution:**

1. Define an abstract class with a template method that outlines the steps of the algorithm.
2. Implement concrete methods for the invariant steps of the algorithm in the abstract class.
3. Define abstract methods for the variant steps that subclasses must implement.
4. Subclasses implement the variant steps while inheriting the invariant steps from the abstract class.

**Design:**

- **User's Behavior:** The user interacts with the concrete subclass. The template method in the abstract class orchestrates the algorithm, invoking methods implemented by the subclass.
- **Example Scenario:** A user wants to implement different types of data processing pipelines (e.g., XML processing, JSON processing) with a common sequence of steps (e.g., read data, process data, write data) but varying details in each step.

**Implementation with TypeScript:**

```typescript
// Abstract Class
abstract class DataProcessor {
  // Template method
  public process(): void {
    this.readData();
    this.processData();
    this.writeData();
  }

  protected abstract readData(): void;
  protected abstract processData(): void;
  protected abstract writeData(): void;
}

// Concrete Class 1
class XMLDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log("Reading XML data");
  }

  protected processData(): void {
    console.log("Processing XML data");
  }

  protected writeData(): void {
    console.log("Writing XML data");
  }
}

// Concrete Class 2
class JSONDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log("Reading JSON data");
  }

  protected processData(): void {
    console.log("Processing JSON data");
  }

  protected writeData(): void {
    console.log("Writing JSON data");
  }
}

// Client code
const xmlProcessor = new XMLDataProcessor();
xmlProcessor.process();
// Output:
// Reading XML data
// Processing XML data
// Writing XML data

const jsonProcessor = new JSONDataProcessor();
jsonProcessor.process();
// Output:
// Reading JSON data
// Processing JSON data
// Writing JSON data
```
