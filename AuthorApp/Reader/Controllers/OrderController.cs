using MassTransit;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reader.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reader.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IBus bus;
        BookAppContext db = new BookAppContext();
        public OrderController(IBus _bus)
        {
            bus = _bus;
        }
        [HttpPost]
        [Route("order-create")]
        public async Task<TblOrder> CreateOrder([FromBody] TblOrderModelData orderModel)
        {
            TblOrder tblOrder = new TblOrder();
            try
            {
                Uri uri = new Uri("rabbitmq:localhost/orderQueue");
                var endpoint = await bus.GetSendEndpoint(uri);
                
                tblOrder.Address = orderModel.Address;
                tblOrder.BookId = orderModel.BookId;

                tblOrder.BookTitle = orderModel.BookTitle;
                tblOrder.PaymentMethod = orderModel.PaymentMethod;
                tblOrder.Reader = orderModel.Reader;
                tblOrder.ReaderId = Convert.ToInt32(orderModel?.ReaderId);
                tblOrder.Orderstatus = orderModel.Orderstatus;
                db.TblOrders.Add(tblOrder);
                db.SaveChanges();
                await endpoint.Send(tblOrder);
                return tblOrder;
            }
            catch(Exception ex)
            {
                return tblOrder;
            }


            

        }
        [HttpGet]
        [Route("getReaderOrders")]
        public dynamic getReaderOrder(int? readerId)
        {
            dynamic OrderDetails = (from bko in db.TblOrders
                                    join bk in db.BookDetails
                                   on bko.BookId equals bk.Id
                                    where bko.ReaderId == readerId
                                    select new
                                    {
                                        Id = bko.Id,
                                        reader = bko.Reader,
                                        title = bk.Title,
                                        author = bk.Author,
                                        address = bko.Address,
                                        price = bk.Price,
                                        paymentmethod = bko.PaymentMethod,
                                        Orderstatus = bko.Orderstatus



                                    }).ToList();
            return OrderDetails;
        }
        [HttpDelete]
        [Route("cancel-order")]
        public IActionResult cancelOrder(int id)
        {
            try
            {
                var cancelOrder = db.TblOrders.Where(x => x.Id == id).FirstOrDefault();
                cancelOrder.Orderstatus = "cancel";
                db.TblOrders.Update(cancelOrder);
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
