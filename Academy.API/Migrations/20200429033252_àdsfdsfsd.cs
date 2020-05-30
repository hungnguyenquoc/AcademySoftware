using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Academy.API.Migrations
{
    public partial class àdsfdsfsd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_OptionClasses",
                table: "OptionClasses");

            migrationBuilder.DropIndex(
                name: "IX_OptionClasses_ClassId",
                table: "OptionClasses");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "OptionClasses");

            migrationBuilder.DropColumn(
                name: "studyTime",
                table: "OptionClasses");

            migrationBuilder.AddColumn<int>(
                name: "OptionId",
                table: "OptionClasses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_OptionClasses",
                table: "OptionClasses",
                columns: new[] { "ClassId", "OptionId" });

            migrationBuilder.CreateTable(
                name: "Options",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    StudyTimeGetDay = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Options", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OptionClasses_OptionId",
                table: "OptionClasses",
                column: "OptionId");

            migrationBuilder.AddForeignKey(
                name: "FK_OptionClasses_Options_OptionId",
                table: "OptionClasses",
                column: "OptionId",
                principalTable: "Options",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OptionClasses_Options_OptionId",
                table: "OptionClasses");

            migrationBuilder.DropTable(
                name: "Options");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OptionClasses",
                table: "OptionClasses");

            migrationBuilder.DropIndex(
                name: "IX_OptionClasses_OptionId",
                table: "OptionClasses");

            migrationBuilder.DropColumn(
                name: "OptionId",
                table: "OptionClasses");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "OptionClasses",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<string>(
                name: "studyTime",
                table: "OptionClasses",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_OptionClasses",
                table: "OptionClasses",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_OptionClasses_ClassId",
                table: "OptionClasses",
                column: "ClassId");
        }
    }
}
