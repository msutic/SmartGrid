using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Workplan
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Type { get; set; }

        public string Order { get; set; }

        public int IncidentId { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        public string StartDate { get; set; }

        [Required]
        public string EndDate { get; set; }

        [Required]
        public int CrewId { get; set; }

        [Required]
        public string CreatedBy { get; set; }

        [Required]
        public string Purpuse { get; set; }

        public string Notes { get; set; }

        [Required]
        public string Company { get; set; }

        public string PhoneNumber { get; set; }
        [Required]
        public DateTime CreatedOn { get; set; }

        public string Devices { get; set; }

        public string Instructions { get; set; }

        public string Multimedia { get; set; }
    }
}
