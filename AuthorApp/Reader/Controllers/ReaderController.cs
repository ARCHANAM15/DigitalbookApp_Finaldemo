using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reader.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Reader.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class ReaderController : ControllerBase
    {
        BookAppContext db = new BookAppContext();
        [HttpPost]
        [Route("getbooks")]
        public IEnumerable<BookDetail> searchBook(string title, string author, string publisher, string content)
        {
            List<BookDetail> allAuthorBooks = db.BookDetails.Where(x => x.Title.Contains(title) || x.Publisher.Contains(publisher) || x.Author.Contains(author) || x.Content.Contains(content)).ToList();
            return allAuthorBooks;
        }
        [HttpGet]
        [Route("GetAuthorBookByAuthorBookID")]
        public IEnumerable<BookDetail> GetAuthorBookByAuthorBookID(string authorBookId)
        {

            var authorList = db.BookDetails.Where(x => x.Id == Convert.ToInt32(authorBookId)).ToList();
            return authorList;
        }
    }
}
