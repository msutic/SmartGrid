using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Device
    {
        public string Type { get; set; }
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public double X_coordinate { get; set; }
        public double Y_coordinate { get; set; }
    }
}
