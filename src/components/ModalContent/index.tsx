import { formatPrice, processStep } from '@/utils'
import React from 'react'
import SideHeader from '@/components/SideHeader'

interface Props {
    total: number
}

const Index: React.FC<Props> = ({ total }) => {

    return (
        <div className='Gray flex flex-col min-w-fit min-h-fit items-center p-6 pb-10'>
            <SideHeader to="/" />
            <div className='items-center gap-2 flex flex-col p-6 pb-0 pt-0 text-center'>
                <p> TRANSFERENCIA EXITOSA </p>
                <div className="flex gap-2">
                    <p> Saldo actual: &nbsp;  </p>
                    <p className='font-bold text-green-400'> { formatPrice(total) } </p>
                </div>
            </div>
            <div className="mt-8 flex gap-6">
                <button className="rounded-full bg-primary px-4 py-2 text-white font-bold" onClick={processStep}>Volver a Whatsapp</button>           
            </div>
        </div>
    )
}

export default Index