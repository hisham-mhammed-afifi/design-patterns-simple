### Factory Method

**Description:**
The Factory Method pattern defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.

**Problem Statement:**
You need a way to create objects without specifying the exact class of the object that will be created. This is particularly useful when the exact type of the object isn't known until runtime.

**Solution:**

1. Define a creator class with a factory method that returns objects of a common interface or base class.
2. Subclass the creator class to implement the factory method and return different types of objects.
3. Client code calls the factory method to get objects, without needing to know the specific type of the object.

**Design:**

- **User's Behavior:** The user interacts with the creator class to request an object. The creator class decides which subclass to instantiate and return.
- **Example Scenario:** A user wants to create different types of notifications (e.g., Email, SMS, Push) but doesn't need to know the specifics of how these notifications are created.

**Implementation with TypeScript:**

```typescript
// Product interface
interface Notification {
  send(message: string): void;
}

// Concrete Products
class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}

// Creator
abstract class NotificationFactory {
  abstract createNotification(): Notification;

  sendNotification(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

// Concrete Creators
class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

class PushNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new PushNotification();
  }
}

// Client code
const emailFactory = new EmailNotificationFactory();
emailFactory.sendNotification("Hello via Email!");

const smsFactory = new SMSNotificationFactory();
smsFactory.sendNotification("Hello via SMS!");

const pushFactory = new PushNotificationFactory();
pushFactory.sendNotification("Hello via Push Notification!");
```
