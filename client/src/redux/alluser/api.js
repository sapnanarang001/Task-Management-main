import * as URL from "../../constants/endpoint"
import { APICore } from "../../helpers/api/apiCore"
const api = new APICore()


export function getAllUserApi(data): any { 
console.log("dfdfgh")
    return api.get(URL.GetAllMileStones, data.payload)
}
