import axios from 'axios'
axios.defaults.withCredentials = true;

const host = 'https://tutor-talk.herokuapp.com';
// const host = 'http://localhost:8888';
// auth
export function registerStudent(email, password, firstname, lastname, phonenumber) {
    return axios.post(host + '/register/student', { email, password, firstname, lastname, phonenumber })
        .then(data => {
            return data.data;
        })
}

export function registerTutor(email, password, firstname, lastname, phonenumber) {
    return axios.post(host + '/register/tutor', { email, password, firstname, lastname, phonenumber })
        .then(data => {
            return data.data;
        })
}

export function logout() {
    return axios.get(host + '/logout', {})
        .then(data => {
            return data.data;
        })
}

export function login(email, password) {
    return axios.post(host + '/login', { email, password })
        .then(data => {
            return data.data;
        })
}

// profile
export function createStudentProfile(picture, program, helps, about) {
    return axios.post(host + '/profile/student/create', { picture, program, about })
        .then(data => {
            return data.data;
        })
}

export function viewStudentProfile() {
    return axios.get(host + '/profile/student', {})
        .then(data => {
            return data.data;
        })
}

export function createTutorProfile(picture, subject, job, diploma, availabilities, about) {
    return axios.post(host + '/profile/tutor/create', { picture, subject, job, diploma, availabilities, about })
        .then(data => {
            return data.data;
        })
}

export function viewTutorProfile() {
    return axios.get(host + '/profile/tutor')
        .then(data => {
            return data.data;
        })
}

// param for this???
export function checkTutorProfile() {
    return axios.get(host + '/profile/view/:id')
        .then(data => {
            return data.data;
        })
}

// tips
export function checkRole() {
    return axios.post(host + '/tips')
        .then(data => {
            return data.data;
        })
}

export function createTip(subject, content) {
    return axios.post(host + '/tips/add', { subject, content })
        .then(data => {
            return data.data;
        })
}

export function tips() {
    return axios.get(host + '/tips')
        .then(data => {
            return data.data;
        })
}

// search tutors
export function searchTutors(subject) {
    return axios.post(host + '/search', { subject })
        .then(data => {
            return data.data;
        })
}
