import User from "../assets/user.svg"
import Bell from "../assets/bell.svg"
import Cart from "../assets/cart.svg"
import CreditCard from "../assets/credit-card.svg"
import DebitCard from "../assets/debit-card.svg"
import MercadoCredito from "../assets/mercado-creditsv2.svg"
import PaymentAgreement from '../assets/payment-agreement.svg'


export const menuMiddle = [
  {
    title: "Categorías",
    arrow: true,
  },
  {
    title: "Ofertas",
  },
  {
    title: "Historial",
  },
  {
    title: "Supermercado",
  },
  {
    title: "Moda",
  },
  {
    title: "Vender",
  },
  {
    title: "Ayuda",
  },
]

export const menuRight = [
  {
    icon: User,
    title: "Agustina...",
    arrow: true,
  },
  {
    title: "Mis compras",
  },
  {
    title: "Favoritos",
    arrow: true,
  },
  {
    icon: Bell,
  },
  {
    icon: Cart,
  }
]

export const payments = [
  {
    icon: CreditCard,
    title: 'Tarjeta de crédito',
    subtitle: 'Ver promociones bancarias'
  },
  {
    icon: DebitCard,
    title: 'Tarjeta de débito',
    subtitle: 'Ver más'

  },
  {
    icon: MercadoCredito,
    title: 'Cuotas sin tarjeta',
    subtitle: 'Conocé Mercado Crédito'
  },
  {
    icon: PaymentAgreement,
    title:'Efectivo',
    subtitle: 'Ver más'
  }
]