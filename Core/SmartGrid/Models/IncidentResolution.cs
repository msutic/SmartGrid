using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class IncidentResolution
    {
        public string Cause { get; set; }
        public string SubCause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
    }
}
