import { Catch, Injectable ,OnModuleInit} from '@nestjs/common';
import axios, { Axios } from 'axios';
import { text } from 'body-parser';
import { error } from 'console';
import fetch from 'node-fetch';
import { from } from 'rxjs';

@Injectable()
export class TelegramService {
  private readonly apiUrl = "https://api.telegram.org/6870198830:AAGd3ESP3tCuRURSgKImGLVYPdmsV8iNWPI";
  
async setWebhook(url: string): Promise<any>{
  try{
    const webhookUrl = "${this.apiUrl}/setWebhook?url=${url}";
    return await axios.post(webhookUrl);
  }
  catch (error) {
    console.error('Error setting webhook:', error.message);
    throw error; // Optionally rethrow the error
  }
}

async sendMessage(chat_id: string, text: string): Promise<any>{
  try{
    const sendMessageUrl = "${this.apiUrl}/sendMessage";
    const data = {
      chat_id: chat_id,
      text: text,
    };
    return await axios.post(sendMessageUrl, data);
  }
  catch (error) {
    console.error('Error sending message:', error.message);
    throw error; // Optionally rethrow the error
  }
}
}
