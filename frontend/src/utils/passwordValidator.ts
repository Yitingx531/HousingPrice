/**
 * check if the user's password follows the correct rule
 * @export
 * @param {string} password
 */

export default function passwordValidator(password: string){
    return /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length > 16;
}