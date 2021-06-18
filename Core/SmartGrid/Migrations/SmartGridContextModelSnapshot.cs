﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SmartGrid.Data;

namespace SmartGrid.Migrations
{
    [DbContext(typeof(SmartGridContext))]
    partial class SmartGridContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SmartGrid.Models.Device", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("X_coordinate")
                        .HasColumnType("real");

                    b.Property<float>("Y_coordinate")
                        .HasColumnType("real");

                    b.HasKey("Id");

                    b.ToTable("Devices");
                });

            modelBuilder.Entity("SmartGrid.Models.Incident", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("ATA")
                        .HasColumnType("datetime2");

                    b.Property<int>("AffectedConsumersNumber")
                        .HasColumnType("int");

                    b.Property<int>("Calls")
                        .HasColumnType("int");

                    b.Property<string>("Cause")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Confirmed")
                        .HasColumnType("bit");

                    b.Property<string>("ConstructionType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Crew")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ETA")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ETR")
                        .HasColumnType("datetime2");

                    b.Property<string>("Material")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MultimediaAttachment")
                        .HasColumnType("int");

                    b.Property<DateTime>("OutageTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<DateTime>("ScheduledTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SubCause")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Voltage")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("SmartGrid.Models.Notifikacija", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ikona")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Procitana")
                        .HasColumnType("bit");

                    b.Property<string>("Tekst")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tip")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Vreme")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("SmartGrid.Models.Potrosac", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Broj")
                        .HasColumnType("int");

                    b.Property<string>("Broj_telefona")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Postanski_broj")
                        .HasColumnType("int");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Prioritet")
                        .HasColumnType("int");

                    b.Property<string>("Tip")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ulica")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Potrosaci");
                });

            modelBuilder.Entity("SmartGrid.Models.PrioritetLok", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Grad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Prioritet")
                        .HasColumnType("int");

                    b.Property<string>("Ulica")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("PrioritetiLokacija");
                });

            modelBuilder.Entity("SmartGrid.Models.Safetydoc", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Creator")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Crew")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<string>("Details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("GroundingRemoved")
                        .HasColumnType("bit");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("ReadyForService")
                        .HasColumnType("bit");

                    b.Property<string>("SafetyDocType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SwitchingPlan")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TagsRemoved")
                        .HasColumnType("bit");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("WorkOperationsCompleted")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Safetydocs");
                });
#pragma warning restore 612, 618
        }
    }
}
