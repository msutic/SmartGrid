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
        public IncidentType Type { get; set; }
        public int Priority { get; set; }
        public bool Confirmed { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        public DateTime ETA { get; set; }
        public DateTime ATA { get; set; }
        public DateTime OutageTime { get; set; }
        public DateTime ETR { get; set; }
        public int AffectedConsumersNumber { get; set; }
        public int Calls { get; set; }
        public double Voltage { get; set; }
        public DateTime ScheduledTime { get; set; }

        //Devices
        public ICollection<Device> Devices { get; set; }

        //Resolution
        public string Cause { get; set; }
        public string SubCause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }

        //Calls
        public ICollection<Call> CallsList { get; set; }

        //Crew
        public string Crew { get; set; }

        //Multimedia
        public int MultimediaAttachment { get; set; }
    }
}
