import axios from "axios";


export default async function API() {
    try {
        const response = await axios.get("https://api-tinta-negra.onrender.com/lersheets", {
            headers: {
                "validacao-token": '"SenacTintaNegra_247312@#"'
            }


        })

        return response.data
      /*   dados.forEach(item => {
            console.log("ID: "+item.ID);
            console.log("Temp: "+item.temp);
            console.log("Potencia: "+item["potencia fogão"]);
        }); */
    } catch (error) {
        console.error(error)
        throw error
    }

}

