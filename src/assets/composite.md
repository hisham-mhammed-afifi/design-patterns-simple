### Composite

**Description:**
The Composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.

**Problem Statement:**
You need to work with tree structures of objects where individual objects and groups of objects need to be treated in the same way. This is useful for handling hierarchical data structures.

**Solution:**

1. Define a component interface with methods for managing child components.
2. Implement leaf classes for individual objects.
3. Implement composite classes for groups of objects, maintaining a collection of child components.
4. Client code interacts with the component interface, treating both individual objects and composites uniformly.

**Design:**

- **User's Behavior:** The user interacts with the composite structure through the component interface. The user can add, remove, or traverse components without distinguishing between individual and composite objects.
- **Example Scenario:** A user wants to create a file system hierarchy where files and directories are treated uniformly. Directories can contain files or other directories.

**Implementation with TypeScript:**

```typescript
// Component Interface
interface Graphic {
  draw(): void;
}

// Leaf Class
class Circle implements Graphic {
  draw(): void {
    console.log("Drawing a Circle");
  }
}

// Composite Class
class CompositeGraphic implements Graphic {
  private children: Graphic[] = [];

  add(graphic: Graphic): void {
    this.children.push(graphic);
  }

  remove(graphic: Graphic): void {
    const index = this.children.indexOf(graphic);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  draw(): void {
    this.children.forEach((child) => child.draw());
  }
}

// Client code
const circle1 = new Circle();
const circle2 = new Circle();
const composite1 = new CompositeGraphic();
const composite2 = new CompositeGraphic();

composite1.add(circle1);
composite1.add(circle2);
composite2.add(composite1);

composite2.draw(); // Drawing a Circle
// Drawing a Circle
```
