using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Call
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Reason { get; set; }
        [Required]
        public string Comment { get; set; }
        [Required]
        public string Hazard { get; set; }
        public string Address { get; set; }

        //public Incident Incident { get; set; }
    }
}
