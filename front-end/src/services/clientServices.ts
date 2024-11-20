
export const fetchClients = async () => {
    return await fetch('http://localhost:5000/api/auth/').then(data => data.json())
}

// export const registerClient = async (client: registerClient): Promise<Client> => {
//     const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(client)
//     }).then(
//         (res) => {
//             if (res.status === 200) {
//                 return res.json()
//             }
//             throw new Error('Erro ao cadastrar cliente')
//         }
//     )
//     return response.user;
// }