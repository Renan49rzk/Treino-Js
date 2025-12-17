import { useState } from "react";
import Button from '../button';



const Card = () => {
  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Remover() {
    setValor(valor - 1);
  }

  return (
    <div className="card">
      <div className="card-header">
        Meu primeiro card
      </div>

      <div className="card-body">
        <Button
        className="btn btn-success"
        onClick={Adicionar}
        >
            Adicionar
        </Button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={Remover}
        >
          Remover
        </button>

        <p>{valor}</p>
      </div>
    </div>
  );
};

export default Card;

//para funcionar, precisa chamar a função set valor
//event é um evento, e a função ao lado está adicionando 1, mas só faz isso uma vez