export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InRva2VuX3BhZ2FtZW50byJ9.La6-hdrQR0IJ4ZEHD20a4lUuRZOwWZIAerxxzEU0hcU";
    
    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}