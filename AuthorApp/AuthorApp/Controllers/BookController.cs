using AuthorApp.Models;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace AuthorApp.Controllers
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
        [Route("AuthorBooksbyID")]
        public dynamic Get([FromQuery] string Authorid)
      {
            var getbooks = (from i in db.BookDetails
                            where i.AuthorId == Authorid
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
        [HttpPost]
        [Route("createbook")]
        public async Task<IActionResult> Post([FromForm] BookDetail book)
        {
            BookDetail createbook = new BookDetail();
            var file = Request.Form.Files[0];
            //var foldername = "Images";
            var pathToSave = (Directory.GetCurrentDirectory());
            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var _filename = Path.GetFileNameWithoutExtension(fileName);
                fileName = _filename + DateTime.Now.ToString("yyyyMMddHHmmss") + ".jpg";
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = fileName;
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                string connectionstring = "DefaultEndpointsProtocol=https;AccountName=samplecontainer;AccountKey=L3Ci4j2iNnymGJ7BSJiGDGHCpU0HILW/HdJ2uChYwoD05dP6k8QnSpZ7zpJfUa8AuLL+6RyInIIh+ASt5sghpg==;EndpointSuffix=core.windows.net";
                string containerName = "image";
                BlobContainerClient container = new BlobContainerClient(connectionstring, containerName);
                var blob = container.GetBlobClient(fileName);
                var blobstream = System.IO.File.OpenRead(fileName);
                await blob.UploadAsync(blobstream);
                var URI = blob.Uri.AbsoluteUri;
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
            createbook.AuthorId = book.AuthorId;

            db.BookDetails.Add(createbook);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [HttpPut]
        [Route("bookupdate")]
        public async Task<IActionResult> put([FromForm] BookDetail bookModel)
        {

            var authorUpdate = db.BookDetails.Where(s => s.Title == bookModel.Title).FirstOrDefault();
            var file = Request.Form.Files[0];
            //var foldername = "Images";
            var pathToSave = (Directory.GetCurrentDirectory());
            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var _filename = Path.GetFileNameWithoutExtension(fileName);
                fileName = _filename + DateTime.Now.ToString("yyyyMMddHHmmss") + ".jpg";
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = fileName;
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                string connectionstring = "DefaultEndpointsProtocol=https;AccountName=samplecontainer;AccountKey=L3Ci4j2iNnymGJ7BSJiGDGHCpU0HILW/HdJ2uChYwoD05dP6k8QnSpZ7zpJfUa8AuLL+6RyInIIh+ASt5sghpg==;EndpointSuffix=core.windows.net";
                string containerName = "image";
                BlobContainerClient container = new BlobContainerClient(connectionstring, containerName);
                var blob = container.GetBlobClient(fileName);
                var blobstream = System.IO.File.OpenRead(fileName);
                await blob.UploadAsync(blobstream);
                var URI = blob.Uri.AbsoluteUri;
                authorUpdate.ImageUrl = dbPath;
            }
            else
            {
                return BadRequest();
            }

            authorUpdate.Title = bookModel.Title;

            authorUpdate.Category = bookModel.Category;
            authorUpdate.Publisher = bookModel.Publisher;
            authorUpdate.Active = bookModel.Active;
            authorUpdate.Price = bookModel.Price;
            authorUpdate.Content = bookModel.Content;
             db.BookDetails.Update(authorUpdate);
              db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
        }
           
        
        [HttpDelete]
        [Route("deletebook")]
        public IActionResult Delete(int id)
        {
            var data = db.BookDetails.Where(x => x.Id == id).FirstOrDefault();
            db.BookDetails.Remove(data);
            db.SaveChanges();
            //
            var response = new { Status = "Success" };
            return Ok(response);
        }
        [HttpPut]
        [Route("book-block")]
        public IActionResult BookBlock([FromBody] int id)
        {
            try
            {
                var bookblobk = db.BookDetails.Where(s => s.Id == id).FirstOrDefault();
                bookblobk.Active = "No";
                db.BookDetails.Update(bookblobk);
                db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }

        }
        [HttpPut]
        [Route("book-unblock")]
        public IActionResult BookUnBlock([FromBody] int id)
        {
            try
            {
                var bookunblobk = db.BookDetails.Where(s => s.Id == id).FirstOrDefault();
                bookunblobk.Active = "Yes";
                db.BookDetails.Update(bookunblobk);
                db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }

        }
    }
}
