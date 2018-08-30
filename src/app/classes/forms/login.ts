export class Login {
    constructor(
        public username: string,
        public password: string
    ) { }

    public checkRequired(): string {
        if (!this.username) {
            return 'username must not be empty';
        }

        if (!this.password) {
            return 'password must not be empty';
        }
    }

    public checkLength(): string {
        if (this.username.length < 5) {
            return 'username must contains at least 5 characters';
        }

        if (this.password.length < 6) {
            return 'password must contains at least 6 characters';
        }
    }   
}
