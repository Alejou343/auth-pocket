"use client";
import React from 'react';
import { formatPrice } from '@/utils'
import SideHeader from '@/components/SideHeader'
import { useRouter } from 'next/navigation';
import ModalGeneral from '@/containers/Modal'
import ModalContent from '@/components/ModalContent'
import Loader from '@/components/Loader'
import axios from 'axios'

const CompraOnline = () => {

  interface BillingInfo {
    numeroFactura: string,
    referencia: string,
    saldo: number,
    paga: number,
    producto: string
  }

  const router = useRouter()
  const [ openModal, setOpenModal ] = React.useState(false)
  const [loaderActive, setLoaderActive] = React.useState<boolean>(false)
  const [newBalance, setNewBalance] = React.useState<number>(0)
  const [info, setInfo] = React.useState<BillingInfo>({
    numeroFactura: "000000000000",
    referencia: "000000000",
    saldo: 0,
    paga: 170000,
    producto: "0000-0000-000"
  })

  React.useEffect(() => {
    try {
      axios.get(`https://www.cpocketbot.com/api/getDataFactura`)
      .then((res: any) => setInfo(res.data))
      .catch((err: any) => console.error(err))
    } catch (err) { 
      console.error(err)
    }
  }, [])

  const doPayment = () => {
    setLoaderActive(true)
    setTimeout(() => {
      setLoaderActive(false)
      setOpenModal(!openModal)
    }, 2000);
    setNewBalance(info?.saldo - 170000)
  }

  return (
    <div className="grid h-screen mx-auto place-items-center">
      <SideHeader to="/" />
      <Loader active={loaderActive} />
      <ModalGeneral state={openModal} setState={setOpenModal} >
        <ModalContent total={newBalance} />
      </ModalGeneral>
      <main className="flex flex-col w-11/12">
        <div>
          <div>
            <h5 className="font-bold text-center">Compra online Pocki</h5>
          </div>
        </div>
        <div className="text-xs flex justify-between my-4">
          <div className="text-justify mr-1">
            <p>Nro. de factura:</p>
            <p>Descripcion del pago:</p>
            <p>Nro referencia:</p>
            <p>Saldo actual: </p>
            <p>Valor a pagar:</p>
            <p>Producto:</p>
          </div>
          <div className="ml-1">
            <p>{info?.numeroFactura}</p>
            <p>Pago Pocki</p>
            <p>{info?.referencia || 958340984}</p>
            <p className='text-green-400 font-bold'>{formatPrice(info?.saldo)}</p>
            <p className="text-red-400 font-bold" id="amount">{`- ${formatPrice(170000)}`}</p>
            <p className="font-bold truncate max-w-xs">
              {`555-342-123 Pocki Ahorros`}
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-evenly">
          <a className="w-[5rem] text-xs text-center border border-black bg-transparent rounded-none py-1 px-2" href="#" onClick={() => { router.push('/')}}>Regresar</a>
          <a className="w-[5rem] text-xs text-center border border-black bg-transparent rounded-none py-1 px-2" href="#" onClick={() => { router.push('/')}}>Cancelar</a>
          <a className="w-[5rem] text-xs text-center text-white bg-primary rounded-none py-1 px-2" href="#" onClick={doPayment}>Pagar</a>
        </div>
      </main>
      <footer className="text-center mt-4">
        <p>Dirección IP: 191.104.12.149</p>
        <p>&copy; 2024 Pocki S.A.</p>
      </footer>
    </div>
  );
};

export default CompraOnline;