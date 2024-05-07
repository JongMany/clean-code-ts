{
  // AS-IS`
  class Employee {
    type: "COMMISIONED" | "SALARIED" | "HOURLY";
  }
  const calculateCommisionedPay = (employee: Employee) => {};
  const calculateSalariedPay = (employee: Employee) => {};
  const calculateHourlyPay = (employee: Employee) => {};

  function calculatePay(employee: Employee) {
    switch (employee.type) {
      case "COMMISIONED":
        return calculateCommisionedPay(employee);
      case "SALARIED":
        return calculateSalariedPay(employee);
      case "HOURLY":
        return calculateHourlyPay(employee);
    }
  }
}

{
  // TO-BE
  type Money = number;
  abstract class Employee {
    abstract isPayday(): boolean;
    abstract calculatePay(): number;
    abstract deliverPay(pay: Money): void;
  }

  enum EmployeeRecord {
    COMMISIONED = "COMMISIONED",
    SALARIED = "SALARIED",
    HOURLY = "HOURLY",
  }
  interface EmployeeFactory {
    makeEmployee: (type: EmployeeRecord) => Employee;
  }

  class EmployeeFactoryImpl implements EmployeeFactory {
    makeEmployee(type: EmployeeRecord) {
      switch (type) {
        case EmployeeRecord.COMMISIONED:
          return new CommisionedEmployee(type);
        case EmployeeRecord.SALARIED:
          return new SalariedEmployee(type);
        case EmployeeRecord.HOURLY:
          return new HourlyEmployee(type);
        default:
          throw new Error("Invalid Employee Type");
      }
    }
  }
}
