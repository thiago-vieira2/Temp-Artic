import axios from "axios";


export default async function API() {
    try {
        const response = await axios.get("https://api-tinta-negra.onrender.com/lersheets", {
            headers: {
                "validacao-token": '"SenacTintaNegra_247312@#"'
            }


        })

        return response.data

    } catch (error) {
        console.error(error)
        throw error
    }

}

