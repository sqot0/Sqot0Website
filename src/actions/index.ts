import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { getSecret } from 'astro:env/server';

const TELEGRAM_BOT_TOKEN = getSecret('TELEGRAM_BOT_TOKEN');
const TELEGRAM_CHAT_ID = getSecret('TELEGRAM_CHAT_ID');

export const server = {
  sendForm: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      contact: z.string(),
      message: z.string(),
    }),
    handler: async ({name, contact, message}) => {
        const content = `<b>Name:</b> ${name}%0A<b>Contact:</b> ${contact}%0A<b>Message:</b> ${message}`

        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=HTML&text=${content}`)

        if (!response.ok) {
            return {
                error: 'Failed to send message'
            }
        }

        return {
            message: 'Message sent successfully'
        }
    }
  })
}