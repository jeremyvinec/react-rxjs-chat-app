import Http from './Http';
import {
  ChatServiceDataNull,
  ChatServiceParams,
} from '../types/ChatType';

class ChatService {
  get = async (params: ChatServiceDataNull) => await Http.get(params);
  post = async (params: ChatServiceParams) => await Http.post(params);
  put = async (params: ChatServiceParams) => await Http.put(params);
  delete = async (params: ChatServiceParams) => await Http.delete(params);
}

export default new ChatService();