import { useEffect, useState } from 'react';
import { getProdutos } from '../api/produtoService';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import ProdutoForm from '../components/ProdutoForm';
import { deletarProduto } from '../api/produtoService';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = () => {
    getProdutos().then(setProdutos);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Cadastro de Produtos</Typography>
      <ProdutoForm onProdutoCriado={carregarProdutos} />
      <Typography variant="h6" gutterBottom>Lista de Produtos</Typography>
        <List>
  {produtos.map((prod) => (
    <ListItem
      key={prod.id}
      secondaryAction={
        <IconButton
          edge="end"
          color="error"
          onClick={async () => {
            await deletarProduto(prod.id);
            carregarProdutos(); // Atualiza a lista
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={prod.nome}
        secondary={`Preço: R$${prod.preco}`}
      />
    </ListItem>
  ))}
</List>


    </Container>
  );
}

export default ListaProdutos;
