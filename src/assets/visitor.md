### Visitor

**Description:**
The Visitor pattern allows you to add further operations to objects without having to modify them, by placing the new operations in a separate object called a visitor.

**Problem Statement:**
You need to perform operations on objects of different classes without changing their classes. This is particularly useful when the classes are part of a class hierarchy and you want to keep the operations separate from the object structure.

**Solution:**

1. Define a visitor interface with visit methods for each type of element.
2. Implement concrete visitor classes that define specific operations.
3. Define an element interface with an accept method that takes a visitor.
4. Implement concrete element classes that call the appropriate visit method of the visitor.
5. Client code creates visitors and passes them to elements to perform operations.

**Design:**

- **User's Behavior:** The user interacts with the visitor to perform operations on elements. The elements accept the visitor and delegate the operation to it.
- **Example Scenario:** A user wants to implement different reporting mechanisms (e.g., HTML report, JSON report) for various elements (e.g., paragraphs, images) in a document structure.

**Implementation with TypeScript:**

```typescript
// Visitor Interface
interface Visitor {
  visitConcreteElementA(element: ConcreteElementA): void;
  visitConcreteElementB(element: ConcreteElementB): void;
}

// Concrete Visitors
class ConcreteVisitor1 implements Visitor {
  visitConcreteElementA(element: ConcreteElementA): void {
    console.log(`ConcreteVisitor1: Visiting ${element.getName()}`);
  }

  visitConcreteElementB(element: ConcreteElementB): void {
    console.log(`ConcreteVisitor1: Visiting ${element.getName()}`);
  }
}

class ConcreteVisitor2 implements Visitor {
  visitConcreteElementA(element: ConcreteElementA): void {
    console.log(`ConcreteVisitor2: Visiting ${element.getName()}`);
  }

  visitConcreteElementB(element: ConcreteElementB): void {
    console.log(`ConcreteVisitor2: Visiting ${element.getName()}`);
  }
}

// Element Interface
interface Element {
  accept(visitor: Visitor): void;
}

// Concrete Elements
class ConcreteElementA implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementA(this);
  }

  getName(): string {
    return "ConcreteElementA";
  }
}

class ConcreteElementB implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementB(this);
  }

  getName(): string {
    return "ConcreteElementB";
  }
}

// Client code
const elements: Element[] = [new ConcreteElementA(), new ConcreteElementB()];

const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

for (const element of elements) {
  element.accept(visitor1);
  element.accept(visitor2);
}
// Output:
// ConcreteVisitor1: Visiting ConcreteElementA
// ConcreteVisitor2: Visiting ConcreteElementA
// ConcreteVisitor1: Visiting ConcreteElementB
// ConcreteVisitor2: Visiting ConcreteElementB
```
