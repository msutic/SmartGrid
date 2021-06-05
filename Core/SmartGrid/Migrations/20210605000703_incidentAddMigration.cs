using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SmartGrid.Migrations
{
    public partial class incidentAddMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IncidentId",
                table: "Devices",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<int>(type: "int", nullable: false),
                    Priority = table.Column<int>(type: "int", nullable: false),
                    Confirmed = table.Column<bool>(type: "bit", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ETA = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ATA = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OutageTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ETR = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AffectedConsumersNumber = table.Column<int>(type: "int", nullable: false),
                    Calls = table.Column<int>(type: "int", nullable: false),
                    Voltage = table.Column<double>(type: "float", nullable: false),
                    ScheduledTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Cause = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubCause = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConstructionType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Material = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MultimediaAttachment = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Call",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Hazard = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncidentId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Call", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Call_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Devices_IncidentId",
                table: "Devices",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Call_IncidentId",
                table: "Call",
                column: "IncidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Devices_Incidents_IncidentId",
                table: "Devices",
                column: "IncidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Devices_Incidents_IncidentId",
                table: "Devices");

            migrationBuilder.DropTable(
                name: "Call");

            migrationBuilder.DropTable(
                name: "Incidents");

            migrationBuilder.DropIndex(
                name: "IX_Devices_IncidentId",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "IncidentId",
                table: "Devices");
        }
    }
}
