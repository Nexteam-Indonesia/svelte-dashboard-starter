import apiUtils from "../../utils/api_utils"

const getAllUser = async () => {

    const result = await apiUtils.getRequestApi("users?page=2")
    return result.data;

}

export default {
    getAllUser
}