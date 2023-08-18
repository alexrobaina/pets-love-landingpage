import mercadopago from 'mercadopago';


export const pay = () => {
    mercadopago.configure({
        access_token: "TEST-5571996175740297-081414-d1f8fe068461786de0664cf9de546c73-1451140676",
      });

      let preference: any = {
        items: [
          {
            title: ' hola',
            unit_price: 100,
            quantity: 1,
          },
        ],
        back_urls: {
          success: "http://localhost:5173",
          failure: "http://localhost:5173",
          pending: "",
        },
        auto_return: "approved",
      };

  mercadopago.preferences
  .create(preference)
  .then(function (response) {
console.log(1,  response.body.id);


  })
  .catch(function (error) {
    console.log(error);
  });
}