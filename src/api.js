class API {

    _getResponse(res) {
        return res.ok ? res.json() : Promise.reject()
    }

    constructor(path) {
        this.host = `http://127.0.0.1:8888`
        this.communityHost = this.host + path
        this.scheduleHost = this.host + '/schedule' + path
        this.examHost = this.host + '/exam' + path
    }

    async get() {
        const res = await fetch(`${this.communityHost}`);
        return this._getResponse(res);
    }

    async getSchedule(id) {
        const res = await fetch(`${this.scheduleHost}/${id}`);
        return this._getResponse(res);
    }

    async getExam(id) {
        const res = await fetch(`${this.examHost}/${id}`);
        return this._getResponse(res);
    }

    async getFreeAuditoriums() {
        const res = await fetch(`${this.host}/auditoriums/asu/free`);
        return this._getResponse(res)
    }
}

export { API }