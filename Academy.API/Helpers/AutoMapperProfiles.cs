using System.Linq;
using Academy.API.Dtos;
using Academy.API.Models;
using AutoMapper;

namespace Academy.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();

            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<MajorDto, Major>();
            CreateMap<MajorForUpdateDto, Major>();
            CreateMap<ProgramStudyDto, ProgramStudy>();
            
            CreateMap<RolesDto, Role>();
            CreateMap<RoleForUpdateRoleDto, Role>();
            
            CreateMap<CourseForAddDto, Course>();
            CreateMap<CourseForDetailedDto, Course>();
            CreateMap<CourseForListDto, Course>();
            CreateMap<CourseForUpdateDto, Course>();

            // CreateMap<CourseForListDto, Course>();
            
            // CreateMap<CourseCategoryForAddDto, CourseCategory>();
            // CreateMap<CourseCategoryForDetailedDto, CourseCategory>();
            // CreateMap<CourseCategoryForUpdateDto, CourseCategory>();
            // CreateMap<CourseCategoryForListDto, CourseCategory>();

            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();


            CreateMap<OpenRegisterForAddDto, OpenRegister>();
            CreateMap<OpenRegisterForListDto, OpenRegister>();
            CreateMap<OpenRegisterForDetailedDto, OpenRegister>();
            CreateMap<OpenRegisterForUpdateDto, OpenRegister>();

            CreateMap<ClassForAddDto, Class>();
            CreateMap<ClassForListDto, Class>();
            CreateMap<ClassForDetailedDto, Class>();
            CreateMap<ClassForUpdateDto, Class>();


            CreateMap<StudentForAddDto, Student>();
            CreateMap<DTO, Student>();
            CreateMap<Student, StudentForListDto>();
            CreateMap<Student,StudentForDetailedDto>();
            CreateMap<StudentForUpdateDto,Student>();

            CreateMap<FunctionForListDto, Function>();
            CreateMap<FunctionForUpdateDto, Function>();

            CreateMap<PermissionForDto, Permission>();


            CreateMap<AnnouncementDto, Announcement>();
            // CreateMap<UserForUpdateDto, User>();
            //CreateMap<Photo, PhotoForReturnDto>();
            //CreateMap<PhotoForCreationDto, Photo>();
        }
    }
}