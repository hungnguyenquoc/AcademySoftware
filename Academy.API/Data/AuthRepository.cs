using System.Linq;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly AcademyDbContext _context;

        public AuthRepository(AcademyDbContext context) {
            _context = context;
        }

       public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync( x => x.UserName == username);
            if(user == null) {
                return null;
            }
            // if(!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt)) {
            //     return null;
            // }
            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt)) 
            {
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for(int i =0; i < computeHash.Length; i ++) {
                    if(computeHash[i] != passwordHash[i]) {
                        return false;
                    }
                }
            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            // user.PasswordHash = passwordHash;
            // user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512() )
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _context.Users.AnyAsync(x => x.UserName == username)) {
                return true;
            }
            return false;
        }

         public int GetUserMaxID()
        {
            int id = _context.Users.Max(c => c.Id);
            return id;
        }

        public async Task<User> GetUser(int id)
        {
             var course = await _context.Users.FirstOrDefaultAsync( c => c.Id == id);
            return course;
        }

       public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);

        }

    }
}