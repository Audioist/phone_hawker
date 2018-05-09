export const GET_MODEL = "get_model"

export const get_model = (model) => {
    return {
        type: GET_MODEL,
        payload: model
    }
}