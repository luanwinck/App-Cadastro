import CONFIG from '../../config'

export default class GetUsuarioService {
    
    static getUsuario() {
        return fetch(`${CONFIG.API_URL_BASE}/`, {
            method: 'get'
        })
    }

    static getUsuarioPorNome(nome) {
        return fetch(`${CONFIG.API_URL_BASE}/usuario/${nome}`, {
            method: 'get'
        })
    }
}