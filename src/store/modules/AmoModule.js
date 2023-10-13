import { AmoAPI } from '@/api/AmoAPI'

export const AmoModule = {
    namespaced: true,
    state: () => ({
        entity: { id: 1, name: 'Не выбрано' },
        entities: [
            { id: 1, name: 'Не выбрано' },
            { id: 2, name: 'Сделка' },
            { id: 3, name: 'Контакт' },
            { id: 4, name: 'Компания' },
        ],

        createdEntities: [
            { id: 22, type: 'Сделка', name: 'Название сделки' },
            { id: 32, type: 'Контакт', name: 'Название контакта' },
            { id: 41, type: 'Компания', name: 'Название компании' },
        ]

    }),

    getters: {
        isActive(state) {
            return state.entity.name == 'Не выбрано' ? true : false
        }

    },
    actions: {

        createItem({ state, dispatch }) {
            let created = {}
            switch (state.entity.name) {
                case 'Сделка':
                    created = { type: 'Сделка', name: 'Название сделки'}
                    dispatch('addOrder', created).then((res) => {
                        console.log(res)
                        state.createdEntities.push(created)
                    })
                    break;
                case 'Контакт':
                    created = { type: 'Контакт', name: 'Название контакта' }
                    dispatch('addContact', created).then((res) => {
                        console.log(res)
                        state.createdEntities.push(created)
                    })
                    break;
                case 'Компания':
                    created = { type: 'Компания', name: 'Название компании' }
                    dispatch('addCompany', created).then((res) => {
                        console.log(res)
                        state.createdEntities.push(created)
                    })
                    break;

                default:
                    break;
            }

        },

        addOrder(order) {
                AmoAPI.addOrder(order).catch(function (error) {
                    if (error.response) {
                      // The request was made and the server responded with a status code
                      // that falls out of the range of 2xx
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      // `error.request` is an instance of XMLHttpRequest in the browser
                      // and an instance of http.ClientRequest in node.js
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }
                  });
         
           
        },

        addContact(contact) {
            AmoAPI.addContact(contact).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser
                  // and an instance of http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
              });
        },

        addCompany(company) {
            AmoAPI.addCompany(company).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser
                  // and an instance of http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
              });
        },


    },
    mutations: {

    }

}