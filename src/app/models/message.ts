export interface Message {

    id: number;
    title: string;
    text: string;
    type: MessageType;
    timeout: number;
}

export enum MessageType {
  
  info = 1,
  success = 2,
  error = 3,
  warning = 4
}