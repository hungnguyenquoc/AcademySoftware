using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Academy.API.Dtos;

namespace Academy.API.Data
{
    public class MailJetRepository : IEmail
    {
        public async Task Send(string emailAdress, string body, EmailOptionsDto options)
        {
            var client = new SmtpClient();
            client.Host = options.Host;
            client.Credentials = new NetworkCredential(options.APIKey, options.APIKeySecret);
            client.Port = options.Port;

            var message = new MailMessage(options.SenderEmail, emailAdress);
            message.Body = body;
            message.IsBodyHtml = true;
            await client.SendMailAsync(message);
        }
    }
}