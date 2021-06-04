using SmartGrid.Models.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class IncidentBasicInfo
    {
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
        public int Voltage { get; set; }
        public DateTime ScheduledTime { get; set; }

        public IncidentBasicInfo()
        {

        }

        public IncidentBasicInfo(int id, IncidentType type, int priority, bool confirmed, string status, string description, DateTime eTA, DateTime aTA, DateTime outageTime, DateTime eTR, int affectedConsumersNumber, int calls, int voltage, DateTime scheduledTime)
        {
            Id = id;
            Type = type;
            Priority = priority;
            Confirmed = confirmed;
            Status = status;
            Description = description;
            ETA = eTA;
            ATA = aTA;
            OutageTime = outageTime;
            ETR = eTR;
            AffectedConsumersNumber = affectedConsumersNumber;
            Calls = calls;
            Voltage = voltage;
            ScheduledTime = scheduledTime;
        }
    }
}
