import axios from 'axios';

const BASE_URL = 'http://leoproti.com.br:8004/produtos';

export const getProdutos = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const criarProduto = async (produto) => {
  const res = await axios.post(BASE_URL, produto);
  return res.data;
};
export const deletarProduto = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
