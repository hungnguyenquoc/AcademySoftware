using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class AcademyDbContext : DbContext
    {
        public AcademyDbContext(DbContextOptions<AcademyDbContext> options) : base(options){}

        public DbSet<Course> Courses{get;set;}
        public DbSet<Value> Values {get;set;}
        public DbSet<User> Users {get;set;}
        public DbSet<BookingCourse> BookingCourses {get;set;}
        public DbSet<BookingDetail> BookingDetails {get;set;}
        public DbSet<CourseCategory> CourseCategories {get;set;}
        public DbSet<OpenRegister> OpenRegisters {get;set;}
        public DbSet<Post> Posts {get;set;}
        public DbSet<ProductTag> ProductTags {get;set;}
        public DbSet<Tag> Tags {get;set;}
        public DbSet<Photo> Photos {get;set;}
    }
}