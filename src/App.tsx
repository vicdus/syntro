import React, { useEffect, useState } from "react";

class Employee {
  status!: "success" | "failed";
  data!: {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
  };
  message!: string;

  toString(): string {
    return this.data.employee_name + " Age " + this.data.employee_age;
  }
}

function App() {
  const [data, setData] = useState<Employee | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://dummy.restapiexample.com/api/v1/employee/1"
      );
      const json = await response.json();
      const employee = new Employee();
      Object.assign(employee, json);
      setData(employee);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data ? <p>{data.toString()}</p> : <p>Loading</p>}
      </header>
    </div>
  );
}

export default App;
