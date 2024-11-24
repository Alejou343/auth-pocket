import React from 'react'
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { LoginApiResponse, FormData } from '@/interfaces'

const useLogin = () => {

    const router = useRouter()
    const [loaderActive, setLoaderActive] = React.useState<boolean>(false)
    const [alert, setAlert] = React.useState<string>('')

    const [formData, setFormData] = React.useState<FormData>({
        Celular: '',
        Contraseña: '',
    }); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const eventLogin = () => {
        router.push('/table')
        // Cookies.set('SessionInfo', JSON.stringify(response.data))
        setLoaderActive(false)
    }

    const eventLoginFailed = (error: any) => {
        setLoaderActive(false)
        setAlert(error?.response?.data)
    }

    const onLoginSubmit = (e: any) => {

        console.log(formData)
        setAlert('')
        e.preventDefault()
        setLoaderActive(true)
        eventLogin()
        // axios.post(`https://www.cpocketbot.com/api/loginUser`, formData)
        // .then((response: any) => eventLogin(response))
        // .catch((error: any) => eventLoginFailed(error))
    }

  return { loaderActive, alert, handleInputChange, onLoginSubmit, formData }
}

export default useLogin