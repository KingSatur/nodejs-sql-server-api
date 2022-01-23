import express from 'express';
import { pool, mssql, queries } from '../database';

export const getAllProduct = async function (req = express.request, res = express.response) {
  const result = (await pool.query(queries.getAllProductQuery)).recordset;
  return res.json(result);
};
export const getProductById = async function (req = express.request, res = express.response) {
  const { id } = req.params;
  console.log(id);
  const result = (await pool.request().input('id', id).query(queries.getProductByIdQuery))?.recordset?.[0];
  return res.status(result ? 200 : 404).json(result ? result : { msg: 'Product not found' });
};
export const createProduct = async function (req = express.request, res = express.response) {
  const { name, description, quantity = 0 } = req.body;
  if (!name || !description) {
    return res.status(400).json({ msg: 'Bad request. Please fill the required fields' });
  }
  try {
    const result = await pool
      .request()
      .input('name', mssql.VarChar, name)
      .input('description', mssql.VarChar, description)
      .input('quantity', mssql.Int, quantity)
      .query(queries.saveProductQuery);
    return res.json({ id: result.recordset.at(0)?.id, name, description, quantity });
  } catch (error) {
    return res.status(500).json({ msg: 'There was error' });
  }
};
export const editProduct = async function (req = express.request, res = express.response) {
  const { name, description, quantity = 0 } = req.body;
  const { id } = req.params;
  if (!name || !description) {
    return res.status(400).json({ msg: 'Bad request. Please fill the required fields' });
  }
  try {
    const result = await pool
      .request()
      .input('name', mssql.VarChar, name)
      .input('description', mssql.VarChar, description)
      .input('quantity', mssql.Int, quantity)
      .input('id', id)
      .query(queries.updateProductQuery);
    return res
      .status(result?.rowsAffected?.[0] ? 200 : 404)
      .json(result?.rowsAffected?.[0] ? { id, name, description, quantity } : { msg: 'Product not found' });
  } catch (error) {
    return res.status(500).json({ msg: 'There was error' });
  }
};

export const deleteProduct = async function (req = express.request, res = express.response) {
  const { id } = req.params;
  const result = await pool.request().input('id', id).query(queries.deleteProductQuery);
  console.log(result);
  return res.status(result?.rowsAffected?.[0] ? 204 : 404).json();
};
export const countProducts = async function (req = express.request, res = express.response) {
  const count = (await pool.request().query(queries.countProductQuery)).recordset?.[0]?.[''];
  console.log(count);
  return res.status(200).json(count);
};
