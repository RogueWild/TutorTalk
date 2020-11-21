import axios from 'axios'

// auth
export function registerStudent(email, password, firstname, lastname, phonenumber) {
    return axios.post('https://tutor-talk.herokuapp.com/register/student', { email, password, firstname, lastname, phonenumber })
        .then(data => {
            return data.data;
        })
}

export function registerTutor(email, password, firstname, lastname, phonenumber) {
    return axios.post('https://tutor-talk.herokuapp.com/register/tutor', { email, password, firstname, lastname, phonenumber })
        .then(data => {
            return data.data;
        })
}

export function logout() {
    return axios.get('/user/logout')
        .then(data => {
            return data.data;
        })
}

export function login(email, password) {
    return axios.post('https://tutor-talk.herokuapp.com/login', { email, password })
        .then(data => {
            return data.data;
        })
}

// profile (how to get req.user id for this????? do i need this for argu????
// test this part later?!?!)
// no frontend page for this!!!!!
export function createStudentProfile(picture, program, helps, about) {
    return axios.post('https://tutor-talk.herokuapp.com/profile/student/create', { picture, program, helps, about })
        .then(data => {
            return data.data;
        })
}

export function viewStudentProfile() {
    return axios.get('https://tutor-talk.herokuapp.com/profile/student', {})
        .then(data => {
            return data.data;
        })
}

export function createTutorProfile(picture, subject, job, diploma, availabilities, about) {
    return axios.post('https://tutor-talk.herokuapp.com/profile/tutor/create', { picture, subject, job, diploma, availabilities, about })
        .then(data => {
            return data.data;
        })
}

export function viewTutorProfile() {
    return axios.get('https://tutor-talk.herokuapp.com/profile/tutor', {})
        .then(data => {
            return data.data;
        })
}

// param for this???
export function checkStudentProfile() {
    return axios.get('https://tutor-talk.herokuapp.com/profile/view/:id', {})
        .then(data => {
            return data.data;
        })
}

// tips
export function createTip(subject, content) {
    return axios.post('https://tutor-talk.herokuapp.com/tips/add', { subject, content })
        .then(data => {
            return data.data;
        })
}

export function tips() {
    return axios.get('https://tutor-talk.herokuapp.com/tips')
        .then(data => {
            return data.data;
        })
}

// search tutors
export function searchTutors(subject) {
    return axios.post('https://tutor-talk.herokuapp.com/search', { subject })
        .then(data => {
            return data.data;
        })
}