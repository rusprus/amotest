import { AmoAPIInstance } from "@/api"

export const AmoAPI = {

    // async getToken() {
    //     console.log('getToken 3')
    //     return AmoAPIInstance({
    //                 method: 'get',
    //                 // url: '/orders/update',
    //                 // data: order
    //             });
    // },

    async addOrder(order) {
        return AmoAPIInstance({
            method: 'post',
            url: '/api/v4/leads',
            data: order
        }).then(res => {
            return res
        });
    },

    async addContact(contact) {
        return AmoAPIInstance({
            method: 'post',
            url: '/api/v4/contacts',
            data: contact
        }).then(res => {
            return res
        });
    },

    async addCompany(company) {
        return AmoAPIInstance({
            method: 'post',
            url: '/api/v4/companies',
            data: company
        }).then(res => {
            return res
        });
    },

}