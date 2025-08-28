export interface CreateMailRequest {
  replyTo: string,
  email: string,
  content: string,
  recipients: string[],
}