using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Lokacija
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Ulica { get; set; }

        [Required]
        public string Grad { get; set; }

    }
}
