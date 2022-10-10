using System;
using System.Collections.Generic;

#nullable disable

namespace DigitalbookAuthor.Models
{
    public partial class Order
    {
        public int Id { get; set; }
        public string BookId { get; set; }
        public string Booktitle { get; set; }
        public string Reader { get; set; }
        public string Address { get; set; }
        public string PaymentMethod { get; set; }
        public string Title { get; set; }
    }
}
