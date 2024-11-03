/**
 * check if the email user inputed is in the correct format
 * @param email 
 */
export default function emailValidator(email: string){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
