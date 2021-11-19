const initialState = {
    user: JSON.parse(localStorage.getItem("authUser")),
    films: [],
    series: [],
    slides: {}
}

export default initialState;