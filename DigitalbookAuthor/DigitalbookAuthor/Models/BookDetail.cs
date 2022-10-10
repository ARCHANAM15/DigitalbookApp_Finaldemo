using System;
using System.Collections.Generic;

#nullable disable

namespace DigitalbookAuthor.Models
{
    public partial class BookDetail
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string AuthorId { get; set; }
        public string Publisher { get; set; }
        public string Category { get; set; }
        public string Content { get; set; }
        public string ImageUrl { get; set; }
        public string Active { get; set; }
        public string ReleasedDate { get; set; }
        public string Price { get; set; }
        public bool? Blocked { get; set; }
    }
}
