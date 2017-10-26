import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable()
export class AuthenticationService {
    private user: User 
    constructor() {
    }

    public isAuthenticated():boolean {
        return this.user != null;
    }
}


