export function cache(item) {
    return {
        get() {
            return JSON.parse(localStorage.getItem(item));
        },

        set(data) {
            localStorage.setItem(item, JSON.stringify(data));
        },

        remove() {
            localStorage.removeItem(item);
        }
    };
}

export function sessionCache(item) {
    return {
        get() {
            return JSON.parse(sessionStorage.getItem(item));
        },

        set(data) {
            sessionStorage.setItem(item, JSON.stringify(data));
        },

        remove() {
            sessionStorage.removeItem(item);
        }
    };
}