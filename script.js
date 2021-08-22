const quality = {
  fantastic: .3,
  fun: .25,
  ok: .2,
  alright: .15,
  awful: .1
}

const justTheTip = (subtotal, service, date) => {
  const subtotalForm = document.getElementById('subtotal').value;
  const serviceForm = document.getElementById('service').value;
  const dateForm = document.getElementById('date').value;
  const tipService = subtotalForm * quality[serviceForm];
  const tipDate = subtotalForm * quality[dateForm];
  const justTheTip = tipService + tipDate;
  document.getElementById('justTheTip').innerHTML = justTheTip;
  return tip;
}
