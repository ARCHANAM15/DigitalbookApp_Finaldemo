using AuthorApp.Models;
using MassTransit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorApp.Consumers
{
    public class AuthorConsumer: IConsumer<BookDetail>
    {
        BookAppContext db;
        public AuthorConsumer(BookAppContext _db)
        {
            db = _db;
        }

        public Task Consume(ConsumeContext<BookDetail> context)
        {
            var data = context.Message;
            var productdata = db.BookDetails.Where(x => x.Id == data.Id).FirstOrDefault();
            productdata.Title = productdata.Title;
            db.BookDetails.Update(productdata);
            db.SaveChanges();
            return Task.CompletedTask;
        }
    }
}
