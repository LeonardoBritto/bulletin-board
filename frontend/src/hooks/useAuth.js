import api from '../utils/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate() 

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function register(user){
        let msgText = 'Cadastro realizado com sucesso'
        let msgType = 'sucess'
        try {
            const data = await api.post('/usuario/registrar', user).then((response) => {
                return response.data
            })

            await authUser(data)
        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error'   
        }
    }

    async function authUser(data){
        setAuthenticated(true)

        localStorage.setItem('token', JSON.stringify(data.token))

        navigate('/')
    }

    async function login(user){
        let msgText = 'Login realizado com sucesso'
        let msgType = 'sucess'

        try {
            const data = await api.post('/usuario/logar', user).then((response) => {
                return response.data
            })            

            await authUser(data)
        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error' 
        }
    }

    function logout(){
        const msgText = 'Logout realizado com sucesso'
        const msgType = 'sucess'

        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/')
    }

    return {authenticated, register, logout, login}
}