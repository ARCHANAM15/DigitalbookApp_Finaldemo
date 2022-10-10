using System;
using System.Collections.Generic;

#nullable disable

namespace Reader.Models
{
    public partial class Ordertbl
    {
        public int Id { get; set; }
        public int? BookId { get; set; }
        public string Address { get; set; }
        public string OrderStatus { get; set; }
        public string Booktitle { get; set; }
        public string PaymentMethod { get; set; }
    }
}
