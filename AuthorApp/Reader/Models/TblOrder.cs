using System;
using System.Collections.Generic;

#nullable disable

namespace Reader.Models
{
    public partial class TblOrder
    {
        public int Id { get; set; }
        public int? BookId { get; set; }
        public string Address { get; set; }
        public string PaymentMethod { get; set; }
        public string Reader { get; set; }
        public int? ReaderId { get; set; }
        public string BookTitle { get; set; }
        public string Orderstatus { get; set; }
    }
}
