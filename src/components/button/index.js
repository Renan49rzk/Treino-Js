const Button = ({children, className,onClick}) => {
    return(
        <button
          type="button"
          className={className}
          onClick={Adicionar}
        >
            Adicionar
            {children}
            </button>
    )
}

export default Button;