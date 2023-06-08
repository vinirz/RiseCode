import Airtable from "airtable"
import { SHA256 } from 'crypto-js'
import { toast } from "react-toastify";

const userInfo = localStorage.getItem('user')

export const User = {
    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    },

    isAuthenticated(){
        return userInfo ? true : false
    }
}

const base = new Airtable({ apiKey: 'keymZeqCHaPAJcsxx' }).base('appWSfcNcPT8jjHkD');

export function Logar(mail, pass){
    return new Promise ((resolve, reject) => (base('Users')
    .select({
      filterByFormula: `AND(password = '${SHA256(pass).toString()}', email = '${mail}')`,
      maxRecords: 1,
    })
    .firstPage((error, records) => {
        if (error) {
            console.error(error);
            reject(error);
            return;
          }

        if (records.length > 0) {
            const user = records[0].fields;
            resolve({
              email: user.email,
              name: user.name,
              password: user.password,
              picture: user.picture,
            })

        } else {
            toast('Algo deu errado, tente novamente')
        }
    })))

}
