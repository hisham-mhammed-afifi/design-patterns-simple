### Bridge

**Description:**
The Bridge pattern decouples an abstraction from its implementation, allowing them to vary independently.

**Problem Statement:**
You need to decouple an abstraction from its implementation so that both can be extended independently. This is particularly useful when both the abstractions and their implementations are likely to change.

**Solution:**

1. Define an abstraction and an implementation interface.
2. Implement the abstraction interface to maintain a reference to an implementation object.
3. Implement the implementation interface to provide the actual functionality.
4. Client code interacts with the abstraction, which delegates work to the implementation.

**Design:**

- **User's Behavior:** The user interacts with the abstraction without worrying about the specific implementation details. The abstraction delegates tasks to the implementation.
- **Example Scenario:** A user wants to create different shapes (e.g., circles, rectangles) that can be drawn using different APIs (e.g., OpenGL, DirectX). The Bridge pattern allows shapes and drawing APIs to vary independently.

**Implementation with TypeScript:**

```typescript
// Implementation interface
interface DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void;
}

// Concrete Implementations
class OpenGLAPI implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(`OpenGLAPI: Drawing circle at (${x}, ${y}) with radius ${radius}`);
  }
}

class DirectXAPI implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(`DirectXAPI: Drawing circle at (${x}, ${y}) with radius ${radius}`);
  }
}

// Abstraction
abstract class Shape {
  protected drawingAPI: DrawingAPI;

  protected constructor(drawingAPI: DrawingAPI) {
    this.drawingAPI = drawingAPI;
  }

  abstract draw(): void;
  abstract resize(factor: number): void;
}

// Refined Abstraction
class CircleShape extends Shape {
  private x: number;
  private y: number;
  private radius: number;

  constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(): void {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }

  resize(factor: number): void {
    this.radius *= factor;
  }
}

// Client code
const openglAPI = new OpenGLAPI();
const directxAPI = new DirectXAPI();

const circle1 = new CircleShape(5, 10, 10, openglAPI);
const circle2 = new CircleShape(20, 30, 15, directxAPI);

circle1.draw(); // OpenGLAPI: Drawing circle at (5, 10) with radius 10
circle2.draw(); // DirectXAPI: Drawing circle at (20, 30) with radius 15

circle1.resize(2);
circle1.draw(); // OpenGLAPI: Drawing circle at (5, 10) with radius 20
```
