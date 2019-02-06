const  reducer = (state={zee:"shan"},action)=>{
    switch(action.type)
    {
        case "UPDATE_NAV":
        {
            console.log("action",action)
            return {...state,nav:action.nav}
        }
        default :
        {
            return {...state}
        }


    }

}

export default reducer;