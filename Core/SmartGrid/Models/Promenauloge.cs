using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Promenauloge
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int Idkorisnika { get; set; }

        [Required]
        public string Korisnickoime { get; set; }

        [Required]
        public string Starauloga { get; set; }

        [Required]
        public string Novauloga { get; set; }
        
    }
}
