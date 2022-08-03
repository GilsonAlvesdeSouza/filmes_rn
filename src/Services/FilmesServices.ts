export default {
  listar: async () => {
    const req = await fetch('https://api.b7web.com.br/cinema/');
    const json = await req.json();
    return json;
  },
};
