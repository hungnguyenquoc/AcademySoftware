﻿// <auto-generated />
using System;
using Academy.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Academy.API.Migrations
{
    [DbContext(typeof(AcademyDbContext))]
    [Migration("20200224155243_AddDB")]
    partial class AddDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Academy.API.Models.BookingCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BookCodeDiscount")
                        .HasMaxLength(100);

                    b.Property<string>("BookEmail")
                        .HasMaxLength(100);

                    b.Property<string>("BookName")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.Property<string>("BookPhone")
                        .HasMaxLength(100);

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<string>("PaymentMethod")
                        .HasMaxLength(256);

                    b.Property<string>("PaymentStatus")
                        .HasMaxLength(256);

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.HasKey("Id");

                    b.ToTable("BookingCourses");
                });

            modelBuilder.Entity("Academy.API.Models.BookingDetail", b =>
                {
                    b.Property<int>("BookDetail_ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Book_ID");

                    b.Property<int>("Cou_ID");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<int>("Quantity");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.HasKey("BookDetail_ID");

                    b.HasIndex("Book_ID");

                    b.HasIndex("Cou_ID");

                    b.ToTable("BookingDetails");
                });

            modelBuilder.Entity("Academy.API.Models.Class", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BookId");

                    b.Property<string>("Class_Code");

                    b.Property<string>("Class_Name");

                    b.Property<int>("CourseId");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.HasKey("Id");

                    b.HasIndex("BookId");

                    b.HasIndex("CourseId");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("Academy.API.Models.Course", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CouCode")
                        .HasMaxLength(256);

                    b.Property<string>("CouContent");

                    b.Property<string>("CouDescription")
                        .HasMaxLength(256);

                    b.Property<string>("CouImage")
                        .HasMaxLength(256);

                    b.Property<string>("CouMoreImages")
                        .HasColumnType("xml");

                    b.Property<string>("CouName")
                        .HasMaxLength(256);

                    b.Property<decimal>("CouPrice");

                    b.Property<decimal>("CouPromotionPrice");

                    b.Property<int?>("CouViewCount");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<int?>("OpenRegisterId");

                    b.Property<int>("ProId");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.HasKey("Id");

                    b.HasIndex("OpenRegisterId");

                    b.HasIndex("ProId");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("Academy.API.Models.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<DateTime>("Date");

                    b.Property<DateTime>("EndTime");

                    b.Property<string>("Event_Content");

                    b.Property<string>("Event_Description");

                    b.Property<string>("Event_Title");

                    b.Property<DateTime>("StartTime");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("Academy.API.Models.Major", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<string>("Maj_Code");

                    b.Property<string>("Maj_Description");

                    b.Property<string>("Maj_Name");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Majors");
                });

            modelBuilder.Entity("Academy.API.Models.OpenRegister", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<DateTime>("EndTime");

                    b.Property<string>("ReName")
                        .HasMaxLength(256);

                    b.Property<DateTime>("StartTime");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("OpenRegisters");
                });

            modelBuilder.Entity("Academy.API.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Description");

                    b.Property<bool>("IsMain");

                    b.Property<string>("PublicId");

                    b.Property<string>("Url");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("Academy.API.Models.ProgramStudy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<int>("MajorId");

                    b.Property<string>("Pro_Code");

                    b.Property<string>("Pro_Description");

                    b.Property<string>("Pro_Name");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.HasKey("Id");

                    b.HasIndex("MajorId");

                    b.ToTable("ProgramStudies");
                });

            modelBuilder.Entity("Academy.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Description");

                    b.Property<string>("Email");

                    b.Property<string>("FullName");

                    b.Property<string>("Gender");

                    b.Property<DateTime>("LastActive");

                    b.Property<string>("MobilePhone");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<bool>("Status");

                    b.Property<string>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedDate");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Academy.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("Academy.API.Models.BookingDetail", b =>
                {
                    b.HasOne("Academy.API.Models.BookingCourse", "BookingCourse")
                        .WithMany("BookingDetails")
                        .HasForeignKey("Book_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Academy.API.Models.Course", "Course")
                        .WithMany("BookingDetails")
                        .HasForeignKey("Cou_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academy.API.Models.Class", b =>
                {
                    b.HasOne("Academy.API.Models.BookingCourse", "BookingCourse")
                        .WithMany("Classes")
                        .HasForeignKey("BookId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Academy.API.Models.Course", "Course")
                        .WithMany("Classes")
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academy.API.Models.Course", b =>
                {
                    b.HasOne("Academy.API.Models.OpenRegister")
                        .WithMany("Courses")
                        .HasForeignKey("OpenRegisterId");

                    b.HasOne("Academy.API.Models.ProgramStudy", "ProgramStudy")
                        .WithMany("Courses")
                        .HasForeignKey("ProId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academy.API.Models.Event", b =>
                {
                    b.HasOne("Academy.API.Models.User", "User")
                        .WithMany("Events")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academy.API.Models.Major", b =>
                {
                    b.HasOne("Academy.API.Models.User", "User")
                        .WithMany("Majors")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academy.API.Models.OpenRegister", b =>
                {
                    b.HasOne("Academy.API.Models.User", "User")
                        .WithMany("OpenRegisters")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academy.API.Models.Photo", b =>
                {
                    b.HasOne("Academy.API.Models.User", "User")
                        .WithMany("Photos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academy.API.Models.ProgramStudy", b =>
                {
                    b.HasOne("Academy.API.Models.Major", "Major")
                        .WithMany("ProgramStudies")
                        .HasForeignKey("MajorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
