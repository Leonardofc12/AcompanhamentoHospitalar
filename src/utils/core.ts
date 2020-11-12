export const CodClienteValidator = (codCliente: string) => {
    const re = /^[0-9]*$/;
  
    if (!codCliente || codCliente.length <= 0) return 'O código do cliente não pode ser vazio.';
    if (!re.test(codCliente)) return 'Código do cliente inválido.';
  
    return '';
  };
  
  export const dtNascimentoValidator = (date: string) => {
      const re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    if (!date || date.length <= 0) return 'A data de nascimento não pode ser vazia.';
    if(!re.test(date)) return 'Data de Nascimento inválida.';
    
    return '';
  };