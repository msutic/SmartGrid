using SmartGrid.Models.Enumerations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Incident
    {
        //public IncidentBasicInfo BasicInfo { get; set; }
        //BasicInfo
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public IncidentType Type { get; set; }
        public int Priority { get; set; }
        public bool Confirmed { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        [Required]
        public DateTime ETA { get; set; }
        [Required]
        public DateTime ATA { get; set; }
        [Required]
        public DateTime OutageTime { get; set; }
        [Required]
        public DateTime ETR { get; set; }
        public int AffectedConsumersNumber { get; set; }
        public int Calls { get; set; }
        public double Voltage { get; set; }
        [Required]
        public DateTime ScheduledTime { get; set; }

        //Devices
        public ICollection<Device> Devices { get; set; }

        //Resolution
        [Required]
        public string Cause { get; set; }
        [Required]
        public string SubCause { get; set; }
        [Required]
        public string ConstructionType { get; set; }
        [Required]
        public string Material { get; set; }

        //Calls
        public ICollection<Call> CallsList { get; set; } = new List<Call>();

        //Crew
        public string Crew { get; set; }

        //Multimedia
        public int MultimediaAttachment { get; set; }
    }
}
