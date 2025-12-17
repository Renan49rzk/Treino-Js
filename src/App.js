import Item from "./components/item";

const App = () => {
  return (
    <div>
      <h1>Minha primeira aplicação com React</h1>

      <ul className="list-group">
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>

      <p>Eu sou um parágrafo</p>
    </div>
  );
};

export default App;
// function App 
//o retorno de qualquer componente no react não permite trabalhar com elementos irmãos
//para trabalhar com componentes irmãos no mesmo nível, usar div
// function App 
//o retorno de qualquer componente no react não permite trabalhar com elementos irmãos
//para trabalhar com componentes irmãos no mesmo nível, usar div
//o class deve ser chamado de classname ao usar react
//componentes podem ser mais verbosos
//o react permite trbalhar componentes dentro de componente