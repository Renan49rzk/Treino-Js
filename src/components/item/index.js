import Item from './components/Item';

const Item = ({children}) => {
  return (
    <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
      {props.children}
    </a>
  );
};

export default Item;
//para exportar ou importar, sempre utilizar a primeira letra maiscula
//props são as propriedades que vamos usar na criação dos componentes
//para chamar uma variável dentro do react, sempre usar {}