import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
    public areMessagesDisplayed: boolean;
    messages: string[] = [];

    addMessage(message: string): void {
        const currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }

    showMessages(): void {
        this.areMessagesDisplayed = true;
    }

    hideMessages(): void {
        this.areMessagesDisplayed = false;
    }
}
