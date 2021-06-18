using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Models
{
    public class Potrosac
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Ime { get; set; }
        [Required]
        public string Prezime { get; set; }
        [Required]
        public string Ulica { get; set; }
        [Required]
        public string Grad { get; set; }
        [Required]
        public int Broj { get; set; }


        public string Broj_telefona { get; set; }

        [Required]
        public string Tip { get; set; }
        public int Prioritet { get; set; }
        
        public int Postanski_broj { get; set; }
    }
}
