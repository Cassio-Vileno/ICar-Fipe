import { Credentials } from '../types/user';
import api from './axios.fetch.service';


export default class AuthService {
  static async signIn(credentials: Credentials): Promise<any> {
    const { data } = await api.post('signIn', credentials);
    return data;
  }
}
