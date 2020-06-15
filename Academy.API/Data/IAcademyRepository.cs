using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Helpers;
using Academy.API.Models;

namespace Academy.API.Data
{
    public interface IAcademyRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        //  Task<PagedList<User>> GetUsers(UserParams userParams);
        // Task<PagedList<User>> GetUsers(UserParams userParams);

        //  Task<User> GetUser(int id, bool isCurrentUser);
        //  Task<Photo> GetPhoto(int id);
        //  Task<Photo> GetMainPhotoForUser(int userId);
        //  Task<Like> GetLike(int userId, int recipientId);
        //  Task<Message> GetMessage(int id);
        //  Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
        //  Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);
    }
}