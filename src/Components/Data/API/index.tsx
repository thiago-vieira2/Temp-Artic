import axios from "axios";


export default async function API() {
    try {
        const response = await axios.get("https://api-tinta-negra.onrender.com/lersheets", {
            headers: {
                "validacao-token": '"SenacTintaNegra_247312@#"'
            }


        })
        console.log(response.data)
        console.log('funciona')
        return response.data

    } catch (error) {
        console.error(error)
        throw error
    }

}

