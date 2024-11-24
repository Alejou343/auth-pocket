import axios from 'axios';

export const processStep = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _amount = urlParams.get('amount');

    try {
      await axios.get(`https://www.cpocketbot.com/api/psecompra/${_amount}`);
      alert('Pago completado');
      window.location.replace('https://api.whatsapp.com/send?phone=573205832189&text=Gracias%20por%20ayudarme');
    } catch (e) {
      window.location.replace('https://api.whatsapp.com/send?phone=573205832189&text=Gracias%20por%20ayudarme');
    }
  };

export const formatPrice = (number: number) => {
    return number?.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      });
};