using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Podesavanja
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public bool Obavezna { get; set; }
        [Required]
        public bool Errorvidljive { get; set; }
        [Required]
        public bool Infovidljive { get; set; }
        [Required]
        public bool Warningvidljive { get; set; }
        [Required]
        public bool Successvidljive { get; set; }
    }
}
