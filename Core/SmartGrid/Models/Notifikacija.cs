using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Notifikacija
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Tip { get; set; }
        [Required]
        public string Tekst { get; set; }
        [Required]
        public DateTime Vreme { get; set; }
        [Required]
        public bool Procitana { get; set; }
        [Required]
        public string Ikona { get; set; }

        public string Link { get; set; }
    }
}
