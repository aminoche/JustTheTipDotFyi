const quality = {
  fantastic: 0.3,
  fun: 0.25,
  ok: 0.2,
  alright: 0.15,
  awful: 0.1
};

const justTheTip = (subtotal, service, date) => {
  const subtotalForm = document.getElementById('subtotal').value;
  const serviceForm = document.getElementById('service').value;
  const dateForm = document.getElementById('date').value;
  const tipService = subtotalForm * quality[serviceForm];
  const tipDate = subtotalForm * quality[dateForm];
  const justTheTip = tipService + tipDate;
  document.getElementById('justTheTip').innerHTML = justTheTip;
  return tip;
};
