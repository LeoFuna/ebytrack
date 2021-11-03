export const fetchCreateUser = async (name, lastname, email, password) => {
  const myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ name, lastname, email, password }),
  };
  const response = await fetch('http://localhost:3001/users', myInit);
  console.log(response);
};

export const fetchLoginUser = async () => {
  console.log('Vai logar o usuário');
};
