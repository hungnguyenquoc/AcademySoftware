using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Academy.API.Migrations
{
    public partial class DbModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CouID",
                table: "Courses",
                newName: "Cou_ID");

            migrationBuilder.AlterColumn<string>(
                name: "Cou_Name",
                table: "Courses",
                maxLength: 256,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CategoryID",
                table: "Courses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Cou_Alias",
                table: "Courses",
                maxLength: 256,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cou_Content",
                table: "Courses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cou_Description",
                table: "Courses",
                maxLength: 256,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cou_Image",
                table: "Courses",
                maxLength: 256,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cou_MoreImages",
                table: "Courses",
                type: "xml",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Cou_Price",
                table: "Courses",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Cou_PromotionPrice",
                table: "Courses",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "Cou_ViewCount",
                table: "Courses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Courses",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Courses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MetaDescription",
                table: "Courses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MetaKeyword",
                table: "Courses",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Re_ID",
                table: "Courses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Status",
                table: "Courses",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "Courses",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedDate",
                table: "Courses",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BookingCourses",
                columns: table => new
                {
                    Book_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    MetaKeyword = table.Column<string>(nullable: true),
                    MetaDescription = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Book_Name = table.Column<string>(maxLength: 256, nullable: false),
                    Book_Email = table.Column<string>(maxLength: 100, nullable: true),
                    Book_Phone = table.Column<string>(maxLength: 100, nullable: true),
                    Book_CodeDiscount = table.Column<string>(maxLength: 100, nullable: true),
                    PaymentMethod = table.Column<string>(maxLength: 256, nullable: true),
                    PaymentStatus = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingCourses", x => x.Book_ID);
                });

            migrationBuilder.CreateTable(
                name: "CourseCategories",
                columns: table => new
                {
                    Cate_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    MetaKeyword = table.Column<string>(nullable: true),
                    MetaDescription = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Cate_Name = table.Column<string>(maxLength: 256, nullable: false),
                    Cate_Alias = table.Column<string>(maxLength: 256, nullable: false),
                    Cate_Description = table.Column<string>(maxLength: 500, nullable: true),
                    Cate_Image = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseCategories", x => x.Cate_ID);
                });

            migrationBuilder.CreateTable(
                name: "OpenRegisters",
                columns: table => new
                {
                    Re_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    MetaKeyword = table.Column<string>(nullable: true),
                    MetaDescription = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Re_Name = table.Column<string>(maxLength: 256, nullable: true),
                    Time_Start = table.Column<DateTime>(nullable: false),
                    Time_End = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OpenRegisters", x => x.Re_ID);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Post_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    MetaKeyword = table.Column<string>(nullable: true),
                    MetaDescription = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Post_Name = table.Column<string>(maxLength: 256, nullable: true),
                    Post_Content = table.Column<string>(nullable: true),
                    Post_Image = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Post_ID);
                });

            migrationBuilder.CreateTable(
                name: "Tags",
                columns: table => new
                {
                    Tag_ID = table.Column<string>(maxLength: 50, nullable: false),
                    Tag_Name = table.Column<string>(maxLength: 50, nullable: false),
                    Tag_Type = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.Tag_ID);
                });

            migrationBuilder.CreateTable(
                name: "BookingDetails",
                columns: table => new
                {
                    BookDetail_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Book_ID = table.Column<int>(nullable: false),
                    Cou_ID = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingDetails", x => x.BookDetail_ID);
                    table.ForeignKey(
                        name: "FK_BookingDetails_BookingCourses_Book_ID",
                        column: x => x.Book_ID,
                        principalTable: "BookingCourses",
                        principalColumn: "Book_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookingDetails_Courses_Cou_ID",
                        column: x => x.Cou_ID,
                        principalTable: "Courses",
                        principalColumn: "Cou_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductTags",
                columns: table => new
                {
                    ProductTag_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cou_ID = table.Column<int>(nullable: false),
                    Tag_ID = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTags", x => x.ProductTag_ID);
                    table.ForeignKey(
                        name: "FK_ProductTags_Courses_Cou_ID",
                        column: x => x.Cou_ID,
                        principalTable: "Courses",
                        principalColumn: "Cou_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductTags_Tags_Tag_ID",
                        column: x => x.Tag_ID,
                        principalTable: "Tags",
                        principalColumn: "Tag_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_CategoryID",
                table: "Courses",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_Re_ID",
                table: "Courses",
                column: "Re_ID");

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_Book_ID",
                table: "BookingDetails",
                column: "Book_ID");

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_Cou_ID",
                table: "BookingDetails",
                column: "Cou_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTags_Cou_ID",
                table: "ProductTags",
                column: "Cou_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTags_Tag_ID",
                table: "ProductTags",
                column: "Tag_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_CourseCategories_CategoryID",
                table: "Courses",
                column: "CategoryID",
                principalTable: "CourseCategories",
                principalColumn: "Cate_ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_OpenRegisters_Re_ID",
                table: "Courses",
                column: "Re_ID",
                principalTable: "OpenRegisters",
                principalColumn: "Re_ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_CourseCategories_CategoryID",
                table: "Courses");

            migrationBuilder.DropForeignKey(
                name: "FK_Courses_OpenRegisters_Re_ID",
                table: "Courses");

            migrationBuilder.DropTable(
                name: "BookingDetails");

            migrationBuilder.DropTable(
                name: "CourseCategories");

            migrationBuilder.DropTable(
                name: "OpenRegisters");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "ProductTags");

            migrationBuilder.DropTable(
                name: "BookingCourses");

            migrationBuilder.DropTable(
                name: "Tags");

            migrationBuilder.DropIndex(
                name: "IX_Courses_CategoryID",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_Re_ID",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "CategoryID",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_Alias",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_Content",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_Description",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_Image",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_MoreImages",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_Price",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_PromotionPrice",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Cou_ViewCount",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "MetaDescription",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "MetaKeyword",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Re_ID",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "UpdatedDate",
                table: "Courses");

            migrationBuilder.RenameColumn(
                name: "Cou_ID",
                table: "Courses",
                newName: "CouID");

            migrationBuilder.AlterColumn<string>(
                name: "Cou_Name",
                table: "Courses",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 256,
                oldNullable: true);
        }
    }
}
