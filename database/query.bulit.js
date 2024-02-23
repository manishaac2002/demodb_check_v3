import poolConnection from './sql.configs.js'

//check the insertQueryTemplate function 
export const insertQueryTemplate = async (insertData) => {

  const insertData = await poolConnection.pool(insertQuery)

  const insertQuery = (data) => {
    const { tableName, columns } = data
    const columnNames = columns.map(column => column.name).join(', ');
    const valuePlaceholders = columns.map(() => '?').join(', ');
    return `INSERT INTO ${tableName} (${columnNames}) VALUES (${valuePlaceholders})`;
  };

  if (insertQuery.length > 0) {
    console.log("Error occurring while inserting data ,check the database");
  } else {
    console.log('Data inserted successFully');
  }
}