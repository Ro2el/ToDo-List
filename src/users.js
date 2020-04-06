
export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// console.log(uuidv4());
export function createUser() {
    var uuid1 = uuidv4()
    var uuid2 = uuidv4()
    var uuid3 = uuidv4()
    let users = {
        [uuid1]: { name: "Esraa", id: uuid1 },
        [uuid2]: { name: "Ahmed", id: uuid2},
        [uuid3]: { name: "Yousef", id:uuid3 }
    }
    return users
}