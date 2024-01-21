import { Controller, Post} from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('set-webhook')

  async setWebhook(): Promise<any>{

    const yourWebhookUrl = 'https://your.domain.com/webhook';

    return this.telegramService.setWebhook(yourWebhookUrl);
  }


}