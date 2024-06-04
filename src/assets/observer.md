### Observer

**Description:**
The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

**Problem Statement:**
You need to ensure that multiple objects receive updates when another object changes state, without tightly coupling the objects to each other.

**Solution:**

1. Define a subject interface with methods to attach, detach, and notify observers.
2. Implement a concrete subject that maintains a list of observers and sends notifications to them.
3. Define an observer interface with an update method.
4. Implement concrete observers that update themselves when notified by the subject.

**Design:**

- **User's Behavior:** The user interacts with the subject to change its state. The subject notifies all attached observers about the state change.
- **Example Scenario:** A user wants to create a weather monitoring application where multiple displays (e.g., current conditions, statistics, forecast) need to be updated whenever new weather data is available.

**Implementation with TypeScript:**

```typescript
// Observer Interface
interface Observer {
  update(subject: Subject): void;
}

// Subject Interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number;

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  setTemperature(temp: number): void {
    console.log(`WeatherStation: Setting temperature to ${temp}`);
    this.temperature = temp;
    this.notify();
  }

  getTemperature(): number {
    return this.temperature;
  }
}

// Concrete Observers
class CurrentConditionsDisplay implements Observer {
  update(subject: Subject): void {
    if (subject instanceof WeatherStation) {
      console.log(`CurrentConditionsDisplay: Current temperature is ${subject.getTemperature()}`);
    }
  }
}

class StatisticsDisplay implements Observer {
  update(subject: Subject): void {
    if (subject instanceof WeatherStation) {
      console.log(`StatisticsDisplay: Updating statistics with temperature ${subject.getTemperature()}`);
    }
  }
}

class ForecastDisplay implements Observer {
  update(subject: Subject): void {
    if (subject instanceof WeatherStation) {
      console.log(`ForecastDisplay: Updating forecast with temperature ${subject.getTemperature()}`);
    }
  }
}

// Client code
const weatherStation = new WeatherStation();

const currentDisplay = new CurrentConditionsDisplay();
weatherStation.attach(currentDisplay);

const statisticsDisplay = new StatisticsDisplay();
weatherStation.attach(statisticsDisplay);

const forecastDisplay = new ForecastDisplay();
weatherStation.attach(forecastDisplay);

weatherStation.setTemperature(25);
// Subject: Notifying observers...
// CurrentConditionsDisplay: Current temperature is 25
// StatisticsDisplay: Updating statistics with temperature 25
// ForecastDisplay: Updating forecast with temperature 25

weatherStation.setTemperature(30);
// Subject: Notifying observers...
// CurrentConditionsDisplay: Current temperature is 30
// StatisticsDisplay: Updating statistics with temperature 30
// ForecastDisplay: Updating forecast with temperature 30

weatherStation.detach(forecastDisplay);
weatherStation.setTemperature(20);
// Subject: Notifying observers...
// CurrentConditionsDisplay: Current temperature is 20
// StatisticsDisplay: Updating statistics with temperature 20
```
