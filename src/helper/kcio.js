function observadorLogin(token) {
    fetch("http://localhost:4000/api/observarEstado", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth': token
        }
    }).then(res => res.json())
        .then(res => {
            return res
        }
        )
}
module.exports = {
    observadorLogin
}