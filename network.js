import axios from 'axios'

export function registerStudent(email, password, firstname, lastname, phonenumber) {
    return axios.post('http://localhost:8888/user/register/student', { email, password, firstname, lastname, phonenumber })
        .then(data => {
            return data.data;
        })
}
export function registerTutor() {
    axios.post('/user/register/tutor')
        .then(data => {
            console.log(data)
        })
}
export function logout() {
    axios.get('/user/logout')
        .then(data => {
            console.log(data)
        })
}
export function login() {
    axios.post('/user/login')
        .then(data => {
            console.log(data)
        })
}
//'/profile'
//'/tips'