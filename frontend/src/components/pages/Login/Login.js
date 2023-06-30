import styles from './Login.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../../context/UserContext'

function Login() {
    const [usuario, setUsuario] = useState({})
    const {login} = useContext(Context)

    function handleChange(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(usuario)
    }

    return (
        <section className={`vh-100 ${styles.gradientCustom}`}>
            <div class="container py-6 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">"
                        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                            <div class="card-body p-5 text-center">
                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <form onSubmit={handleSubmit}>
                                        <h2 class="fw-bold mb-2 text-uppercase">CENTRAL DE AVISOS</h2>
                                        <br></br>
                                        <div class="form-outline form-white mb-4">
                                            <input type="text" id="typeEmailX" class="form-control form-control-lg" placeholder='Login' name='login' onChange={handleChange}/>
                                        </div>
                                        <div class="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='Senha' name='senha' onChange={handleChange}/>
                                        </div>
                                        <br></br>
                                        <input type='submit' class="btn btn-outline-light btn-lg px-5" value='Logar'/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login