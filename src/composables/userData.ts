
const userData = {
    position: {
        latitude: 0,
        longitude: 0
    },
    datetime: 0
}

export function getUserData() {
    return userData;
}
export function setUserData(latitude: number, longitude: number) {
    userData.position.latitude = latitude;
    userData.position.longitude = longitude;
    userData.datetime = Date.now();
}
