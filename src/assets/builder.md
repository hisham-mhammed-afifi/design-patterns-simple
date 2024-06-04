### Builder

**Description:**
The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

**Problem Statement:**
You need to construct a complex object step by step, and the construction process must allow different representations of the object to be produced.

**Solution:**

1. Define a builder interface with methods for creating different parts of the product.
2. Implement concrete builder classes that build and assemble parts of the product.
3. Create a director class that orchestrates the building process using a builder instance.
4. Client code uses the director and builder to construct the desired product.

**Design:**

- **User's Behavior:** The user interacts with the director to build the product. The director delegates the construction to the builder, which assembles the product step by step.
- **Example Scenario:** A user wants to create different types of cars (e.g., sports car, SUV) with various configurations like engine type, seats, and GPS. The builder pattern allows constructing these cars step by step.

**Implementation with TypeScript:**

```typescript
// Product
class Car {
  engine: string;
  seats: number;
  GPS: boolean;

  showDetails(): void {
    console.log(`Car Details: Engine=${this.engine}, Seats=${this.seats}, GPS=${this.GPS}`);
  }
}

// Builder Interface
interface CarBuilder {
  reset(): void;
  setEngine(engine: string): void;
  setSeats(seats: number): void;
  setGPS(GPS: boolean): void;
  getResult(): Car;
}

// Concrete Builder
class SportsCarBuilder implements CarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  reset(): void {
    this.car = new Car();
  }

  setEngine(engine: string): void {
    this.car.engine = engine;
  }

  setSeats(seats: number): void {
    this.car.seats = seats;
  }

  setGPS(GPS: boolean): void {
    this.car.GPS = GPS;
  }

  getResult(): Car {
    return this.car;
  }
}

// Director
class Director {
  private builder: CarBuilder;

  setBuilder(builder: CarBuilder): void {
    this.builder = builder;
  }

  constructSportsCar(): void {
    this.builder.reset();
    this.builder.setEngine("V8");
    this.builder.setSeats(2);
    this.builder.setGPS(true);
  }
}

// Client code
const director = new Director();
const sportsCarBuilder = new SportsCarBuilder();

director.setBuilder(sportsCarBuilder);
director.constructSportsCar();

const sportsCar = sportsCarBuilder.getResult();
sportsCar.showDetails(); // Car Details: Engine=V8, Seats=2, GPS=true
```
