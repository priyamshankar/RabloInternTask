export const slider = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"slider",
            payload : amount
        })
    }
}
