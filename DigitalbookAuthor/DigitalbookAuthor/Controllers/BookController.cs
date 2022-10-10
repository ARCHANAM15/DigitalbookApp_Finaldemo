using DigitalbookAuthor.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Author.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        BookAppContext db = new BookAppContext();
        [HttpGet]

        public IEnumerable<BookDetail> Get()

        {
            return db.BookDetails;
        }
        [HttpGet]
        [Route("AuthorBooks")]
        public dynamic Get([FromQuery] string Author)
        {
            try
            {
                var getbooks = (from i in db.BookDetails
                                where i.Author == Author
                                select new
                                {
                                    id = i.Id,
                                    title = i.Title,
                                    author = i.Author,
                                    category = i.Category,
                                    price = i.Price,
                                    publisher = i.Publisher,
                                    active = i.Active,
                                    imageurl = i.ImageUrl,
                                    content = i.Content,

                                }).ToList();
                return getbooks;
            }
            catch (Exception ex)
            {
                return ex;
            }
        }
        [HttpPost]

        public IActionResult Post([FromForm] BookDetail book)
        {

            try
            {
                BookDetail createbook = new BookDetail();
                var file = Request.Form.Files[0];
                var foldername = "Images";
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(foldername, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    createbook.ImageUrl = dbPath;
                }
                else
                {
                    return BadRequest();
                }
                createbook.Title = book.Title;
                createbook.Publisher = book.Publisher;
                createbook.Category = book.Category;
                createbook.Price = book.Price;
                createbook.Active = book.Active;
                createbook.Content = book.Content;
                createbook.Author = book.Author;


                db.BookDetails.Add(createbook);
                db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
