let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }   
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
  
  let employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
  
  destructivelyDeleteFromEmployeeByKey(employee, 'name');