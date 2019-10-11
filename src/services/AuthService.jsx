import {decorate, observable} from 'mobx';

class AuthService {

    authInfo = null;

    login = () => {
        this.authInfo = {
            fullName : "Abhinish Raj",
            givenName : "abhinish13",
            permission: ['admin']
        }
    };

    logout = () => {
        this.authInfo = null;

    }                                                                                                                                                                           

    


}

decorate(AuthService, {
    "authInfo": observable
});

const instance = new AuthService();

export default instance;


