const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}
  Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, apto ${order.address.apartment}`;

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = 'R$ 50,00';
  const pizza1 = Object.keys(order.order.pizza)[0];
  const pizza2 = Object.keys(order.order.pizza)[1];
  return `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${pizza1}, ${pizza2} e ${order.order.drinks.coke.type} é ${order.payment.total}`;
}

console.log(orderModifier(order));