using Microsoft.EntityFrameworkCore;
using SmartGrid.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Data
{
    public class SmartGridContext : DbContext
    {
        public SmartGridContext(DbContextOptions<SmartGridContext> options) : base(options)
        {

        }

        public DbSet<Device> Devices { get; set; }
        public DbSet<Incident> Incidents { get; set; }
    }
}
