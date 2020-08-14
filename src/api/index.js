import axios from 'axios'

const API_URL = 'https://5f194821e104860016bae927.mockapi.io/shoppe-cart/'

const MAX_CHECKOUT = 2

export const fetchAll = async () => {
    try {
        const res = await axios.get(API_URL)
        const data = await res.data
        return data
    } catch (e) {
        console.log(e)
    }
}

export const buyProducts = cart => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Object.keys(cart.quantityById).length <= MAX_CHECKOUT ?
                resolve(cart) :
                reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`)
        }, 1000)
    })
}