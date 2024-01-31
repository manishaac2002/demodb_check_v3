//this is working insert query orm
const insertQueryTemplate = (data) => {
  const tableName = data.tableName;
  const columnNames = data.columnNames.join(', ');
  const valuePlaceholders = data.valuePlaceholders.join(', ');

  if (data.columnNames.length !== data.valuePlaceholders.length) {
    console.log("Column value doesn't match the number of values, cannot insert into the table");
    return null; // Or handle the error in a way that makes sense for your application
  }

  return (`INSERT INTO ${tableName} (${columnNames}) VALUES (${valuePlaceholders})`);
};

const data = {
  tableName: 'employees',
  columnNames: ['first_name', 'last_name', 'salary',],
  valuePlaceholders: ['manisha', 'sekeran', '1324567',]
};

const insertQuery = insertQueryTemplate(data);

if (insertQuery) {
  console.log(insertQuery);
}




