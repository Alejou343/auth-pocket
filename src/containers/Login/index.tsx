"use client"
import React from 'react';
import useLogin from '@/hooks/useLogin';
import Loader from '@/components/Loader';
import Button from '@/components/Button';
import SideHeader from '@/components/SideHeader';
import LoginSection from '@/components/LoginSection'
import PasswordSection from '@/components/PasswordSection';

const Index = () => {

    const { loaderActive, alert, handleInputChange, onLoginSubmit, formData } = useLogin()

  return (
    <form className="flex flex-col gap-4 p-6 rounded-lg" onSubmit={onLoginSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <LoginSection  
            label="Número de Celular"
            type="text"
            id="Celular"
            placeholder="Número de Celular"
            onChange={handleInputChange}
            value={formData.Celular}
        />
        <PasswordSection  
            id="Contraseña"
            label="Contraseña"
            placeholder="****"
            onChange={handleInputChange}
            value={formData.Contraseña}
        />
        <p className='text-xs text-red-500 text-center my-2'> {alert} </p>
        <Button 
            type="submit"
        >
            Ingresar
        </Button>
    </form>
  )
}

export default Index