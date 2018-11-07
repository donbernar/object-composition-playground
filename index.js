const withRequote = self => {
  self.hasBeenRequoted = false;

  return {
    requote: newPrice => {
      self.price = newPrice;
      self.hasBeenRequoted = true;
    },
  };
};

const Quote = ({ uuid, price }) => {
  const self = {
    uuid,
    price,
  };

  const quoteMethods = self => ({
    getPrice: () => self.price,
  });

  return {
    ...self,
    ...quoteMethods(self),
    ...withRequote(self),
  };
};

const quote = Quote({ uuid: '1', price: 15 });
console.log(quote.getPrice());
quote.requote(2);
console.log(quote.hasBeenRequoted);
console.log(quote.getPrice());
