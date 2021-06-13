using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Safetydoc
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Status { get; set; }
        public string Type { get; set; }
        public string SwitchingPlan { get; set; }
        public string SafetyDocType { get; set; }
        public DateTime DateCreated { get; set; }
        public string PhoneNo { get; set; }
        public string Crew { get; set; }
        public string Creator { get; set; }
        public string Details { get; set; }
        public string Notes { get; set; }
        public bool WorkOperationsCompleted { get; set; }
        public bool TagsRemoved { get; set; }
        public bool GroundingRemoved { get; set; }
        public bool ReadyForService { get; set; }
    }
}
