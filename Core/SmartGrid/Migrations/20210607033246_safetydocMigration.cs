using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SmartGrid.Migrations
{
    public partial class safetydocMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Safetydocs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SwitchingPlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SafetyDocType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PhoneNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Creator = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkOperationsCompleted = table.Column<bool>(type: "bit", nullable: false),
                    TagsRemoved = table.Column<bool>(type: "bit", nullable: false),
                    GroundingRemoved = table.Column<bool>(type: "bit", nullable: false),
                    ReadyForService = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Safetydocs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Safetydocs");
        }
    }
}
