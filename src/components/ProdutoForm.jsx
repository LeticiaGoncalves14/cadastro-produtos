import { useState } from 'react';
import { criarProduto } from '../api/produtoService';
import { TextField, Button, Box } from '@mui/material';

function ProdutoForm({ onProdutoCriado }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !preco) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoProduto = { nome, preco: parseFloat(preco) };
    await criarProduto(novoProduto);
    setNome('');
    setPreco('');
    onProdutoCriado(); // Atualiza a lista
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Nome do Produto"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        label="Preço"
        type="number"
        fullWidth
        margin="normal"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <Button type="submit" variant="contained">Cadastrar</Button>
    </Box>
  );
}

export default ProdutoForm;
