﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Call
    {
        [Key]
        public int Id { get; set; }
        public string Reason { get; set; }
        public string Comment { get; set; }
        public string Hazard { get; set; }

        public Call()
        {

        }
    }
}
