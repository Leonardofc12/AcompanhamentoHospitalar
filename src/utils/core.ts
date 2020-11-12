export const CodClienteValidator = (email: string) => {
    const re = /^[0-9]*$/;
  
    if (!email || email.length <= 0) return 'CodeCliente cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';
  
    return '';
  };
  
  export const dtNascimentoValidator = (password: string) => {
      const re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    if (!password || password.length <= 0) return 'Password cannot be empty.';
    if(!re.test(password)) return 'Ooops! We need a valid email address.';
    
    return '';
  };
  
  export const nameValidator = (name: string) => {
    if (!name || name.length <= 0) return 'Name cannot be empty.';
  
    return '';
  };