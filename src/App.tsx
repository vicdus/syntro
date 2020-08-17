import React, { useEffect, useState } from "react";

interface Employee {
  status: "success" | "failed";
  data: {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
  };
  message: string;
}

function App() {
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://dummy.restapiexample.com/api/v1/employee/1"
      );
      const employee: Employee = await response.json();
      setEmployee(employee);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {employee ? (
          <p>
            {employee.data.employee_name + " age " + employee.data.employee_age}
          </p>
        ) : (
          <p>Loading</p>
        )}
      </header>
    </div>
  );
}

export default App;
