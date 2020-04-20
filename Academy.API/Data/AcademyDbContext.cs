using Academy.API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class AcademyDbContext :  IdentityDbContext<User, Role, int, 
        IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, 
        IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public AcademyDbContext(DbContextOptions<AcademyDbContext> options) : base(options){}

        public DbSet<Course> Courses{get;set;}
        public DbSet<Value> Values {get;set;}
        // public DbSet<User> Users {get;set;}
        public DbSet<BookingCourse> BookingCourses {get;set;}
        // public DbSet<BookingDetail> BookingDetails {get;set;}
        public DbSet<OpenRegister> OpenRegisters {get;set;}
        public DbSet<Photo> Photos {get;set;}
        public DbSet<Class> Classes {get;set;}
        public DbSet<Event> Events {get;set;}
        public DbSet<Major> Majors {get;set;}

        public DbSet<ProgramStudy> ProgramStudies {get;set;}
        public DbSet<CourseCategory> CourseCategories {get;set;}
        public DbSet<OpenRegisterUser> OpenRegisterUsers {get;set;}


        protected override void OnModelCreating(ModelBuilder builder) 
        {
             base.OnModelCreating(builder);

            builder.Entity<UserRole>(userRole => 
            {
                userRole.HasKey(ur => new {ur.UserId, ur.RoleId});

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });
             builder.Entity<OpenRegisterUser>(openRegisterUser => 
            {
                openRegisterUser.HasKey(uc => new {uc.UserId, uc.OpenId});

                openRegisterUser.HasOne(uc => uc.OpenRegister)
                    .WithMany(c => c.OpenRegisterUsers)
                    .HasForeignKey(uc => uc.OpenId)
                    .IsRequired();

                openRegisterUser.HasOne(uc => uc.User)
                    .WithMany(u => u.OpenRegisterUsers)
                    .HasForeignKey(uc => uc.UserId)
                    .IsRequired();
            });
            //  builder.Entity<BookingDetail>(bookingDetails => 
            // {
            //     bookingDetails.HasKey(uc => new {uc.Cou_ID, uc.Book_ID});

            //     bookingDetails.HasOne(uc => uc.Course)
            //         .WithMany(c => c.BookingDetails)
            //         .HasForeignKey(uc => uc.Cou_ID)
            //         .IsRequired();

            //     bookingDetails.HasOne(uc => uc.BookingCourse)
            //         .WithMany(u => u.BookingDetails)
            //         .HasForeignKey(uc => uc.Book_ID)
            //         .IsRequired();
            // });
        }
    }
}