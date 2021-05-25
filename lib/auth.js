import { hash } from 'bcryptjs'

export async function hashPassword(password) {
    await hash(password, 12);
    return hashPassword

}