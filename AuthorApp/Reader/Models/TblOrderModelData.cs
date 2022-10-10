using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reader.Models
{
    public class TblOrderModelData
    {
        public int Id { get; set; }
        public int? BookId { get; set; }
        public string Address { get; set; }
        public string PaymentMethod { get; set; }
        public string Reader { get; set; }
        public string ReaderId { get; set; }
        public string BookTitle { get; set; }
        public string Orderstatus { get; set; }
    }
}
