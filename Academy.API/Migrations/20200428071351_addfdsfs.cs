using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Academy.API.Migrations
{
    public partial class addfdsfs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudyTime",
                table: "Classes");

            migrationBuilder.AddColumn<int>(
                name: "StudyTimeId",
                table: "Classes",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OptionClasses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    StudyTime = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OptionClasses", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Classes_StudyTimeId",
                table: "Classes",
                column: "StudyTimeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Classes_OptionClasses_StudyTimeId",
                table: "Classes",
                column: "StudyTimeId",
                principalTable: "OptionClasses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classes_OptionClasses_StudyTimeId",
                table: "Classes");

            migrationBuilder.DropTable(
                name: "OptionClasses");

            migrationBuilder.DropIndex(
                name: "IX_Classes_StudyTimeId",
                table: "Classes");

            migrationBuilder.DropColumn(
                name: "StudyTimeId",
                table: "Classes");

            migrationBuilder.AddColumn<string>(
                name: "StudyTime",
                table: "Classes",
                nullable: true);
        }
    }
}
