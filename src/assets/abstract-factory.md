### Abstract Factory

**Description:**
The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

**Problem Statement:**
You need to create a group of related objects without specifying their concrete classes. This is particularly useful when the system needs to be independent of how its objects are created, composed, and represented.

**Solution:**

1. Define abstract factory interfaces for creating abstract products.
2. Implement concrete factories that produce concrete products.
3. Client code uses the abstract factories to create objects, ensuring that the related objects are compatible.

**Design:**

- **User's Behavior:** The user interacts with the abstract factory to create a set of related objects. The abstract factory ensures that the objects are compatible with each other.
- **Example Scenario:** A user wants to create a UI that can switch between different themes (e.g., Dark Theme, Light Theme), and each theme includes a family of related components like buttons, text fields, and checkboxes.

**Implementation with TypeScript:**

```typescript
// Abstract Products
interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

// Concrete Products for Dark Theme
class DarkButton implements Button {
  render(): void {
    console.log("Rendering Dark Button");
  }
}

class DarkCheckbox implements Checkbox {
  render(): void {
    console.log("Rendering Dark Checkbox");
  }
}

// Concrete Products for Light Theme
class LightButton implements Button {
  render(): void {
    console.log("Rendering Light Button");
  }
}

class LightCheckbox implements Checkbox {
  render(): void {
    console.log("Rendering Light Checkbox");
  }
}

// Abstract Factory
interface UIThemeFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factories
class DarkThemeFactory implements UIThemeFactory {
  createButton(): Button {
    return new DarkButton();
  }
  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}

class LightThemeFactory implements UIThemeFactory {
  createButton(): Button {
    return new LightButton();
  }
  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}

// Client code
function renderUI(factory: UIThemeFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

const darkThemeFactory = new DarkThemeFactory();
renderUI(darkThemeFactory);

const lightThemeFactory = new LightThemeFactory();
renderUI(lightThemeFactory);
```
