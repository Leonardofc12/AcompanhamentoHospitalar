export const CodClienteValidator = (codCliente: Number) => {
    const re = /^[0-9]*$/;
  
    var codigo = codCliente.toString();
    if (!codCliente || codigo.length <= 0) return 'O código do cliente não pode ser vazio.';
    if (!re.test(codigo)) return 'Código do cliente inválido.';
  
    return '';
  };
  
  export const dtNascimentoValidator = (date: string) => {
      const re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    if (!date || date.length <= 0) return 'A data de nascimento não pode ser vazia.';
    if(!re.test(date)) return 'Data de Nascimento inválida.';
    
    return '';
  };