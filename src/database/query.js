export const queries = {
  getAllProductQuery: 'SELECT * FROM product',
  saveProductQuery:
    'INSERT INTO product ' +
    '(name, description, quantity)  OUTPUT inserted.id ' +
    'VALUES (@name, @description, @quantity)',
  getProductByIdQuery: 'SELECT * FROM product WHERE id = @id',
  deleteProductQuery: 'DELETE FROM product WHERE id = @id',
  countProductQuery: 'SELECT COUNT(*) FROM product',
  updateProductQuery:
    'UPDATE product SET name = @name, description = @description, quantity = @quantity ' + 'WHERE id = @id',
};
